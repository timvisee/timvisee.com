+++
title = "Reconnect to broken tmux session"
description = "Reconnect to a running tmux session, that tmux fails to connect to."

# TODO: remove to release
draft = true

[taxonomies]
categories = ["guide", "blog"]
tags = ["tmux"]

[extra]
comments = true
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
you invoke `tmux attach`, the program finds this socket, and attaches to session
through the socket.

Now what happens when you delete this file? Exactly, your `tmux` command doesn't
know how to connect to the running server. That's what we're seeing here.

## Recreate socket
Because others had the same issue, tmux provides a feature to fix this. When you
send the `SIGUSR1` signal to the host process, it creates a fresh socket file
for you.

For this you need to find the PID of the running tmux server. Find it through
your task manager, or invoke the following command to list all running tmux
programs. The first line is probably your server, the first number on that line
is the PID you'll need:

```bash
ps kstart_time -ef | grep tmux
# timvisee    5612    2344  0 may11 ?        Ss    16:22 tmux new
# timvisee  913216  911044  0 21:22 pts/5    S+     0:00 grep tmux
```

For me it was `5612`, so I invoke the following and attach again (be sure to use
your own PID):

```bash
sudo kill -SIGUSR1 5612
tmux attach
```

Happy hacking!
