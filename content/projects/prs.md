+++
title = "prs"
description = "prs - Secure, fast & convenient password manager CLI using GPG and git to sync."
date = 2020-10-22

[taxonomies]
tags = ["cli", "pass", "security"]
categories = ["project"]

[extra]
zenn_applause = true
zenn_hide_header_meta = true
+++

> A secure, fast & convenient password manager CLI using GPG and git to sync.

- [Visit project page on GitHub][github]

`prs` is a secure, fast and convenient password manager for the terminal. It
features [GPG][gnupg] to securely store your secrets and integrates [`git`][git]
for automatic synchronization between multiple machines. It also features a
built-in password generator, recipient management, history tracking, rollbacks,
housekeeping utilities and more.

<script id="asciicast-368611" src="https://asciinema.org/a/368611.js" async></script>
<small>_No demo visible here? View it on [asciinema][usage-demo-asciinema]._</small>

`prs` is heavily inspired by [`pass`][pass] and uses the same file structure
with some additions. `prs` therefore works alongside with `pass` and all other
compatible clients, extensions and migration scripts.

---

- [Features](https://github.com/timvisee/prs/#features)
- [Usage](https://github.com/timvisee/prs/#usage)
- [Requirements](https://github.com/timvisee/prs/#requirements)
- [Install](https://github.com/timvisee/prs/#install)
- [Build](https://github.com/timvisee/prs/#build)
- [Security](https://github.com/timvisee/prs/#security)
- [FAQ](https://github.com/timvisee/prs/#faq)

_View more on the project pages over at:_

- [GitHub][github]
- [GitLab][gitlab]

[github]: https://github.com/timvisee/prs
[gitlab]: https://gitlab.com/timvisee/prs
[usage-demo-asciinema]: https://asciinema.org/a/368611
[usage-demo-svg]: https://cdn.rawgit.com/timvisee/prs/4c5a95c9/res/demo.svg
[gnupg]: https://gnupg.org/
[git]: https://git-scm.com/
[pass]: https://www.passwordstore.org/
