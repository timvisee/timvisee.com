+++
title = "ffsend"
description = "ffsend - Easily & securely share files from the command line. Fully featured Firefox Send client."
date = 2018-05-21

[taxonomies]
tags = ["cli", "file-sharing", "file-upload", "rust", "security"]
categories = ["project"]

[extra]
comments = true
zenn_applause = true
zenn_hide_header_meta = true
+++

> Easily and securely share files from the command line.
> A fully featured Firefox Send client.

- [Visit project page on GitHub][github]

Easily and securely share files and directories from the command line through
a safe, private and encrypted link using a single simple command. Files are
shared using the Send service and may be up to 1GB (2.5GB authenticated).
Others are able to download these files with this tool, or through their web
browser.

[![ffsend usage demo][usage-demo-svg]][usage-demo-asciinema]  
<small>_No demo visible here? View it on [asciinema][usage-demo-asciinema]._</small>

All files are always encrypted on the client, and secrets are never shared with the remote host. An optional password may be specified, and a default file lifetime of 1 (up to 20) download or 24 hours is enforced to ensure your stuff does not remain online forever. This provides a secure platform to share your files. Find out more about security here.

---

- [Features](https://github.com/timvisee/ffsend/#features)
- [Usage](https://github.com/timvisee/ffsend/#usage)
- [Requirements](https://github.com/timvisee/ffsend/#requirements)
- [Install](https://github.com/timvisee/ffsend/#install)
- [Build](https://github.com/timvisee/ffsend/#build)
- [Security](https://github.com/timvisee/ffsend/#security)

_View more on the project pages over at:_

- [GitHub][github]
- [GitLab][gitlab]

_Also see these related projects:_

- [`ffsend-api`](@/projects/ffsend-api.md) <span class="muted">(Send library implementation for Rust)</span>

[github]: https://github.com/timvisee/ffsend
[gitlab]: https://gitlab.com/timvisee/ffsend
[usage-demo-asciinema]: https://asciinema.org/a/182225
[usage-demo-svg]: https://cdn.rawgit.com/timvisee/ffsend/6e8ef55b/res/demo.svg
