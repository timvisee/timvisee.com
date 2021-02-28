+++
title = "Reconnect to broken tmux session"
description = "Reconnect to a running tmux session, that tmux fails to connect to."

[taxonomies]
categories = ["guide", "blog"]
tags = ["tmux"]

[extra]
zenn_applause = true
+++

Ever tried to attach to a running tmux session, only to find that that fails?

```bash
tmux attach
# no sessions
tmux ls
# error connecting to /tmp/tmux-1000/default (No such file or directory)
```

Even though you're sure tmux is running fine, it shows up as running in your
task manager after all.

_So, where are your precious tmux sessions?_

<!-- more -->

## Socket file
All your tmux sessions are hosted by a single tmux process. This is persistent
and keeps running until you quit all sessions again.

The process creates a socket file, other processes use this to talk to it. When
you invoke `tmux attach`, the program finds this socket and attaches to it
through the socket.

Now, what happens when you delete this file? Exactly, your `tmux` command doesn't
know how to connect to the running server. That's what we're seeing here.

## Recreate socket
Because others had the same issue, tmux provides a feature to fix this. When you
send the `SIGUSR1` signal to the host process, it creates a fresh socket file
for you.

For this, you need to find the PID of the running tmux server. Find it through
your task manager, or invoke the following command to find the PID of the oldest
running tmux process:

```bash
pgrep --oldest tmux
# 5612
```

For me it was `5612`, so I invoke the following and attach it again (be sure to
use your own PID):

```bash
sudo kill -SIGUSR1 5612
tmux attach
```

Happy hacking!
