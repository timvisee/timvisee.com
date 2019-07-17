+++
title = "Snippet: Correctly capitalize names in PHP"
description = "How to correctly capitalize and normalize names in PHP with this simple snippet"

[taxonomies]
categories = ["snippet", "blog"]
tags = ["php", "snippet"]

[extra]
zenn_applause = true
+++

When building websites with any kind of user registration, it's fascinating
what people enter in name fields. no casing, Random CASING, a dozen spaces
&nbsp;&nbsp;&nbsp;between&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;words, or
nospacingatall. Seeing this always irritates me, I'd fancy things to nice and
be consistent.

{{ fit_image(path="blog/2019-07-17_snippet-correctly-capitalize-names-in-php/banner.png") }}

It appears that correctly normalizing name capitalization is an _unsolvable_
puzzle. There is **no** consistency in name casing, or for any kind of name
formatting for that matter.
See [_Falsehoods programmers believe about names_][name-falsehoods].

> _I always wonder how big social networks handle this._

Okay, so this isn't solvable. But at least I could try to make it _better_.
I came across [this][original] wonderful PHP snippet for name capitalization a while
back, but it had a few shortages. It didn't correctly case with just a person's
last name for instance (needed when storing first/last names separate). I love
challenges like this and decided to improve, here is my take on it:

<!-- more -->

```php
<?php

/**
  * Normalize the given (partial) name of a person.
  *
  * - re-capitalize, take last name inserts into account
  * - remove excess white spaces
  *
  * Snippet from: https://timvisee.com/blog/snippet-correctly-capitalize-names-in-php
  *
  * @param string $name The input name.
  * @return string The normalized name.
  */
function name_case($name) {
    // A list of properly cased parts
    $CASED = [
      "O'", "l'", "d'", 'St.', 'Mc', 'the', 'van', 'het', 'ten', 'den', 'von',
      'und', 'der', 'de', 'da', 'of', 'and', 'the', 'III', 'IV', 'VI', 'VII',
      'VIII', 'IX',
    ];

    // Trim whitespace sequences to one space, append space to properly chunk
    $name = preg_replace('/\s+/', ' ', $name) . ' ';

    // Break name up into parts split by name separators
    $parts = preg_split('/( |-|O\'|l\'|d\'|St\\.|Mc)/i', $name, -1, PREG_SPLIT_DELIM_CAPTURE);

    // Chunk parts, use $CASED or uppercase first, remove unfinished chunks
    $parts = array_chunk($parts, 2);
    $parts = array_filter($parts, function($part) {
            return sizeof($part) == 2;
        });
    $parts = array_map(function($part) use($CASED) {
            // Extract to name and separator part
            list($name, $separator) = $name;

            // Use specified case for separator if set
            $cased = current(array_filter($CASED, function($i) use($separator) {
                return strcasecmp($i, $separator) == 0;
            }));
            $separator = $cased ? $cased : $separator;

            // Choose specified part case, or uppercase first as default
            $cased = current(array_filter($CASED, function($i) use($name) {
                return strcasecmp($i, $name) == 0;
            }));
            return [$cased ? $cased : ucfirst(strtolower($name)), $separator];
        }, $parts);
    $parts = array_map(function($part) {
            return implode($part);
        }, $parts);
    $name = implode($parts);

    // Trim and return normalized name
    return trim($name);
}
```

<details>
<summary>Tap here to expand a better version for use with Laravel.</summary>

> This variant is more concise and uses a function approach using
> [Laravel collections][laravel-collections]:
>
> ```php
> <?php
>
> /**
>   * Normalize the given (partial) name of a person.
>   *
>   * - re-capitalize, take last name inserts into account
>   * - remove excess white spaces
>   *
>   * Snippet from: https://timvisee.com/blog/snippet-correctly-capitalize-names-in-php
>   *
>   * @param string $name The input name.
>   * @return string The normalized name.
>   */
> function name_case($name) {
>     // A list of properly cased parts
>     $CASED = collect([
>         "O'", "l'", "d'", 'St.', 'Mc', 'the', 'van', 'het', 'ten', 'den', 'von',
>         'und', 'der', 'de', 'da', 'of', 'and', 'the', 'III', 'IV', 'VI', 'VII',
>         'VIII', 'IX',
>     ]);
>
>     // Trim whitespace sequences to one space, append space to properly chunk
>     $name = preg_replace('/\s+/', ' ', $name) . ' ';
>
>     // Break name up into parts split by name separators
>     $parts = preg_split('/( |-|O\'|l\'|d\'|St\\.|Mc)/i', $name, -1, PREG_SPLIT_DELIM_CAPTURE);
>
>     // Chunk parts, use $CASED or uppercase first, remove unfinished chunks
>     $name = collect($parts)
>         ->chunk(2)
>         ->filter(function($part) {
>             return $part->count() == 2;
>         })
>         ->mapSpread(function($name, $separator = null) use($CASED) {
>             // Use specified case for separator if set
>             $cased = $CASED->first(function($i) use($separator) {
>                 return strcasecmp($i, $separator) == 0;
>             });
>             $separator = $cased ?? $separator;
>
>             // Choose specified part case, or uppercase first as default
>             $cased = $CASED->first(function($i) use($name) {
>                 return strcasecmp($i, $name) == 0;
>             });
>             return [$cased ?? ucfirst(strtolower($name)), $separator];
>         })
>         ->map(function($part) {
>             return implode($part);
>         })
>         ->join('');
>
>     // Trim and return normalized name
>     return trim($name);
> }
> ```

</details>

<br />

Of course, this function fulfills the truth table presented with the original
snippet:

| Input | Becomes |
| :------- | :----- |
| michael o’carrol | Michael O’Carrol |
| lucas l’amour	|	Lucas l’Amour |
| george d’onofrio | George d’Onofrio |
| william stanley iii	| William Stanley III |
| UNITED STATES OF AMERICA | United States of America |
| t. von lieres und wilkau | T. von Lieres und Wilkau |
| paul van der knaap | Paul van der Knaap |
| jean-luc picard	|	Jean-Luc Picard |
| JOHN MCLAREN | John McLaren |
| hENRIC vIII	| Henric VIII |
| VAsco da GAma	| Vasco da Gama |

It neatly passes additional previously problematic situations as well.
Brilliant!

| Input | Original snippet | This snippet |
| :------- | :--- | :----- |
| van der knaap | <u>**Van**</u> der Knaap | van der Knaap |
| l’amour	|	<u>**L’A**</u>mour | l’Amour |
| von lieres&nbsp;&nbsp;&nbsp;&nbsp;UND wilkau | <u>**V**</u>on Lieres<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>und Wilkau | von Lieres und Wilkau |

<br />

Normalizing using a function like this makes it impossible for some to enter
their name as formatted on their ID. Knowing the audience you serve, this is a
risk you may be able to accept but it will never be perfect. You could always
use this to suggest formatting improvements to the user, allowing them to choose
what's right.

---

> Using numbers to identify people would be a more rational choice, except
> when you're using Pi. \s

{{ fit_image(path="blog/2019-07-17_snippet-correctly-capitalize-names-in-php/beagle-boys.png") }}

Feel free to use and share.

_Special thanks to Armand Niculescu, for the [snippet][original] this was inspired by!_

[laravel-collections]: https://laravel.com/docs/collections
[name-falsehoods]: https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
[original]: https://www.media-division.com/correct-name-capitalization-in-php/
