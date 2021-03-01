+++
title = "List & export your subreddits"
description = "A script to help you make a list and export all subreddits you joined."

[taxonomies]
categories = ["guide", "blog"]
tags = ["reddit", "snippet"]

[extra]
zenn_applause = true
+++

{{ fit_image(path="blog/2021-03-01_list-export-your-subreddits/header.png", url="/blog/list-export-your-subreddits/header.png") }}

The last few years I've been wanting to export the list of subreddits I joined.
It's fun to share with friends having a similar interest,
as I've collected many gems throughout the years.

To achieve this I've set-up a simple script.
It exports your subreddits to a plain text list.

<!-- more -->

## How to export
1.  Visit [old.reddit.com/subreddits/mine][list] in a desktop browser,
    make sure you're logged in.
2.  On that page, [open][developer-tools] your browser developer tools (Keybind: _Ctrl+Shift+I_).
3.  In the developer tools panel, open the **Console** tab.
4.  Copy-and-paste the following snippet into the console, press _Enter_ to run it:
    ```javascript
    $('body').replaceWith('<body>'+$('.subscription-box').find('li').find('a.title').map((_, d) => $(d).text()).get().join("<br>")+'</body>');javascript.void()
    ```
5.  Your full list of subreddits will appear on the webpage.

[Here][mine] is mine.

<br>

<details>
<summary>Tap here if you're a nerd.</summary>

## For nerds
Here is the above snippet, expanded:

```javascript
// Pluck list of subreddits from page, build plain text list
var subs = $('.subscription-box')
    .find('li')
    .find('a.title')
    .map((_, d) => $(d).text())
    .get()
    .join("<br>");

// Put list of subreddits on page
$('body').replaceWith('<body>' + subs +'</body>');

javascript.void()
```

Your complete list of subreddits is located in the sidebar on [that][list] page.
The script plucks your list of reddits from this sidebar and puts it in an array.
Then the array is imploded in a string to show on the page.
Super simple.

</details>

[developer-tools]: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#How_to_open_the_devtools_in_your_browser
[list]: https://old.reddit.com/subreddits/mine
[mine]: https://gist.github.com/timvisee/5af8d219d0a88740cdac2351f2f77247
[reddit]: https://reddit.com/
