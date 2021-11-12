+++
title = "lazymc"
description = "lazymc - Put your Minecraft server to rest when idle."
date = 2021-11-11

[taxonomies]
tags = ["cli", "minecraft", "proxy"]
categories = ["project"]

[extra]
zenn_applause = true
zenn_hide_header_meta = true
+++

> Put your Minecraft server to rest when idle.

- [Visit project page on GitHub][github]

`lazymc` puts your Minecraft server to rest when idle, and wakes it up when
players connect.

Some Minecraft servers (especially modded) use an insane amount of resources
when nobody is playing. lazymc helps by stopping your server when idle, until a
player connects again.

lazymc functions as proxy between clients and the server. It handles all
incoming status connections until the server is started and then transparently
relays/proxies the rest. All without them noticing.

<video controls>
    <source src="https://user-images.githubusercontent.com/856222/141378688-882082be-9efa-4cfe-81cc-5a7ab8b8e86b.mp4" type="video/mp4">
</video>

<br>
<br>

<details><summary>Click to see screenshots</summary>
<p>

{{ fit_image(path="projects/lazymc/sleeping.png") }}
{{ fit_image(path="projects/lazymc/join.png") }}
{{ fit_image(path="projects/lazymc/starting.png") }}
{{ fit_image(path="projects/lazymc/started.png") }}

</p>
</details>

---

- [Features](https://github.com/timvisee/lazymc/#features)
- [Requirements](https://github.com/timvisee/lazymc/#requirements)
- [Usage](https://github.com/timvisee/lazymc/#usage)
- [Compile from source](https://github.com/timvisee/lazymc/#compile-from-source)

_View more on the project pages over at:_

- [GitHub][github]
- [GitLab][gitlab]

[github]: https://github.com/timvisee/lazymc
[gitlab]: https://gitlab.com/timvisee/lazymc
