+++
title = "Firefox tricks: efficient QuantumBar usage"
description = "Tricks to efficiently use the Firefox address bar. Using scope characters, bookmark keywords, and duckduckgo bangs, without add-ons."

[taxonomies]
categories = ["blog"]
tags = ["firefox"]

[extra]
toc = true
zenn_applause = true
comments = [
    {url = "https://www.reddit.com/r/firefox/comments/pjozlo/firefox_tricks_efficient_quantumbar_usage/", name = "Reddit"},
    {url = "https://mastodon.social/@timvisee/106891027024448347", name = "Mastodon"},
    {url = "https://twitter.com/likecaffeinated/status/1435260278950801408", name = "Twitter"},
]
+++

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/header.png", url="/blog/firefox-tricks-quantumbar/header.png") }}

The Firefox [QuantumBar][firefox-address-bar] (formerly AwesomeBar, or just
address bar) is surprisingly capable. There's a lot you can do with it to
quickly navigate through your browser. It's one of the things which makes
Firefox so comfy to me.

I like to be as quick as possible without leaving the keyboard. For this, I use
_scope characters_, _bookmark keywords_, and _DuckDuckGo bangs_. In this article
I'll go through these features and hope to show you something new, no add-ons
required.

<!-- more -->

## Restrict characters, scopes

By default, when you type search terms in the address bar, the suggestion list
shows various suggestions types, including search results, bookmarks, and open
tabs. I usually find these to be spot-on already.

When looking for a specific type of result through, like an open tab, you can
speed up the process by adding special characters with a whitespace in the
address bar before (or after) your search terms. Firefox is vague about its
naming, so I call these scope characters.

Available scope characters:

- `%`: limit to open tabs
- `^`: limit to browser history
- `*`: limit to bookmarks
- `+`: limit to tagged bookmarks
- `#`: limit to pages where search terms are part of title or tag
- `$`: limit to pages where search terms are part of the address
- `?`: limit to search suggestions

Imagine you want to jump to an open Google tab, simply type:

```
% google
```

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/tab-google.png", url="/blog/firefox-tricks-quantumbar/tab-google.png") }}

Or you want to find an _MDN_ bookmark on _Progressive web apps_ you added to
your huge bookmarks collection ages ago. [Proton][proton] even shows a fancy
hint now:

```
* mdn pwa
```

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/bookmark-mdn-pwa.png", url="/blog/firefox-tricks-quantumbar/bookmark-mdn-pwa.png") }}

Simple! By the way, use <kbd class="bind"><kbd>Ctrl</kbd>+<kbd>L</kbd></kbd> or
<kbd>F6</kbd> to quickly focus the address bar.

Firefox documentation lists this feature [here][search-chars]. It has changed a
bit during Firefox's lifetime as you can see [here][search-chars-old].

## Bookmark keywords, smart triggers

Almost every browser supports bookmarks. However, Firefox allows you to
configure a bookmark keyword to make them easily accessible and interactive.

The keyword acts as a trigger in the address bar. You basically extend the scope
characters above with your bookmarks to your liking.

You may add a new bookmark through the bookmark manager (<kbd
class="bind"><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd></kbd>) or editing an
existing one, then the _Keyword_ field shows up. This is where you specify your
keyword term to trigger it with. You may put `%s` in the bookmark URL, which
will be replaced with what you type after the trigger keyword, making them
interactive.

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/bookmark-edit.png", url="/blog/firefox-tricks-quantumbar/bookmark-edit.png") }}

The simplest example would be to quickly jump to your favorite site. Set a
bookmark with the `d` keyword. Type `d` in your address bar and hit enter to
instantly jump to your bookmarked webpage. Though this isn't so interesting.

Here are some better examples I use a lot:

#### Bookmark: specific search engine

Quickly search with a specific search engine:

```
d what is the answer to life
wiki bikeshedding
```

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/bookmark-search.png", url="/blog/firefox-tricks-quantumbar/bookmark-search.png") }}

<details>
<summary>Tap to see bookmark config</summary>

> Keyword: `d`  
> Url: `https://duckduckgo.com/?q=%s`
>
> Keyword: `wiki`  
> Url: `https://en.wikipedia.org/wiki/Special:Search/%s`

</details>

#### Bookmark: jump to subreddit

Quickly jump to your favorite subreddit:

```
r/ linuxmasterrace
```

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/bookmark-reddit.png", url="/blog/firefox-tricks-quantumbar/bookmark-reddit.png") }}

<details>
<summary>Tap to see bookmark config</summary>

> Keyword: `r/`  
> Url: `https://reddit.com/r/%s`

</details>

#### Bookmark: translate

Quickly translate something between English and Dutch:

```
ennl bikeshedding
nlen fietsenstalling
```

{{ fit_image(path="blog/2021-09-07_firefox-tricks-quantumbar/bookmark-translate.png", url="/blog/firefox-tricks-quantumbar/bookmark-translate.png") }}

<details>
<summary>Tap to see bookmark config</summary>

> Keyword: `ennl`  
> Url: <sub><sup>`https://translate.google.com/?sl=en&tl=nl&op=translate&text=%s`</sup></sub>
>
> Keyword: `nlen`  
> Url: <sub><sup>`https://translate.google.com/?sl=nl&tl=en&op=translate&text=%s`</sup></sub>

</details>

## DuckDuckGo bangs

For the final trick, we use the default search engine to extend address bar
functionality.

[DuckDuckGo][duckduckgo] provides an insane amount of [`!bangs`][bangs]. These
function similar to bookmark keywords, but are preconfigured. DuckDuckGo has
more than 13K bangs [available][bangs] for popular sites, most you can come up
with _just work_. Simply prefix your search terms with the appropriate bang and
hit <kbd>Enter</kbd>. Super powerful!

The only caveat is that it requires you to
[change][firefox-change-search-engine] your default search engine to DuckDuckGo
to use it easily.

Here are some example queries:

- [`!g Amsterdam`](https://ddg.gg/?q=!g+Amsterdam): Search `Amsterdam` via Google, if DuckDuckGo couldn't find it
- [`!maps Amsterdam`](https://ddg.gg/?q=!maps+Amsterdam): Show `Amsterdam` on Google Maps
- [`!so Rust string character count`](https://ddg.gg/?q=!so+Rust+string+character+count): Find a solution on StackOverflow
- [`!rust String`](https://ddg.gg/?q=!rust+String): Search `String` in Rust documentation
- [`!timer 3m`](https://ddg.gg/?q=!timer+3m): Set a 3-minute timer
- [`!wa solve x^2+4x+6=0`](https://ddg.gg/?q=!wa+solve+x^2+%2B+4x+%2B+6+%3D+0): Solve equation with WolframAlpha
- [`!bangs`](https://ddg.gg/?q=!bangs): _there's so many more..._

Lastly, not clearly listed, DuckDuckGo has an _I'm Feeling Ducky_ feature using
just the `!` bang. It will redirect you to the first search result instantly:

- [`! Coldplay magic`](https://ddg.gg/?q=!+Coldplay+magic)
- [`! jamming cat`](https://ddg.gg/?q=!+jamming+cat)
- [`! timvisee`](https://ddg.gg/?q=!+timvisee)

I hope you've learned something new and useful to be just that little bit more
efficient using the Firefox QuantumBar.

[firefox-address-bar]: https://firefox-source-docs.mozilla.org/browser/urlbar/index.html#address-bar
[firefox-change-search-engine]: https://support.mozilla.org/en-US/kb/change-your-default-search-settings-firefox
[search-chars-old]: http://kb.mozillazine.org/Location_Bar_search#Location_Bar_search_.28internal_-_Auto_Complete.29
[search-chars]: https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox#w_changing-results-on-the-fly
[proton]: https://wiki.mozilla.org/Firefox/Proton
[duckduckgo]: https://duckduckgo.com/
[bangs]: https://duckduckgo.com/bangs
