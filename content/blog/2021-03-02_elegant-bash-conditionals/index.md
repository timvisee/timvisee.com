+++
title = "Elegant bash conditionals"
description = "How to write better bash scripts by replacing if-statements with something much more elegant"

[taxonomies]
categories = ["blog"]
tags = ["bash", "shell"]

[extra]
toc = true
zenn_applause = true
comments = [
    {url = "https://news.ycombinator.com/item?id=26314489", name = "Hacker News"},
    {url = "https://www.reddit.com/r/linux/comments/lw0ofg/elegant_bash_conditionals/", name = "Reddit"},
    {url = "https://lobste.rs/s/nao13f/elegant_bash_conditionals", name = "Lobsters"},
    {url = "https://mastodon.social/@timvisee/105820152436436465", name = "Mastodon"},
]
+++

The if-statement is a very basic thing, not just in bash, but in all of programming.
I see them used quite a lot in shell scripts,
even though in many cases they can be replaced with something much more elegant.

In this rather short article, I'll show how control operators can be used
instead.
Many probably know about this, but don't realize how to use them nicely.
This will help you write cleaner shell scripts in the future.

Here is what a simple if-statements looks like in bash:

```bash
if [ expression ]
then
    command
fi

# or
if [ expression ]; then command; fi
```

Ughh. Let's improve!

<!-- more -->

## Control operators
Bash provides [control operators][control-operators] to build sequences of
commands.
Some of these are conditional and allow logical branching based on the success
state of the last run command.

We will just focus on these two logical operators:
- `&&`: the AND operator, run the following command only if previous succeeded
- `||`: the OR operator, run the following command only if previous failed

## Exit codes
You might wonder how bash considers whether a command succeeded.
This is where [exit codes][exit-status] come in.
When a program exists a numeric status code is returned.
A value of `0` means the program succeeded, any other value means it failed.

The exit code is normally hidden.
The status of the last run command is stored in the `?` variable.
You may inspect it by invoking:

```bash
echo $?
```

E.g., listing with `ls` normally returns `0`, but this value differs if the
directory doesn't exist or if an error occurred.

```bash
ls ~/            # exit code: 0
ls ~/nonexistent # exit code: 2
```

This will function similarly to almost any program.

## Chaining commands
Let's go over some examples to show how these control operators can be used.

Imagine you want to [source][bash-source] the `~/.profile` file, but only if it
is readable:

```bash
if [ -r ~/.profile ]; then
    source ~/.profile
fi
```

We can simplify this using control operators:

```bash
[ -r ~/.profile ] && . ~/.profile
```

Only if the readability check expression is truthful/succeeds, we want to source
the file, so we use the `&&` operator.

<br>

To require invoking user to be root, we can do the following:

```bash
[ $EUID -ne 0 ] && echo You must be root && exit 1
```

The `echo` command exists with `0`, so this propagates to `exit` if the
first expression is truthful.

<br>

If we'd like to print our profile file contents with a success message,
or an error message on reading failure, we can do the following:

```bash
cat ~/.profile && echo This is your profile || echo Failed to read profile
```

<br>

You can make these command sequences as long as you want. Useful for
building install scripts that go through a series of steps. You could define
bash functions for each step and orchestrate the installation like this:

```bash
init && configure && install && cleanup || echo Install failed
```

Or format it differently to make long sequences better readable:

```bash
init &&
  configure &&
  install &&
  cleanup ||
  echo Install failed
```

## Nice to know
There are [many][bash-control-operators] more control operators,
including list terminators, pipe operators, and others.

The `[` (commonly used in if-statements) isn't just a shell feature.
It is a binary on Unix-like systems, usually located at `/usr/bin/[`,
so it can be used anywhere.
It returns the exit code `0` if the expression was truthful.

You can chain multiple `[ expr ] && [ expr ]` expressions together, they are
commands after all.

Bash also has `[[`, which is
[different](https://stackoverflow.com/q/13542832/1000145) from `[`.

You can wrap multiple commands with `{ expr }` to run it as single expression in
your command chain. For example:

```bash
[ $EUID -ne 0 ] && { echo You must be root; exit 1 }
```

The `true` and `false` commands do nothing more than returning `0` or `1`.

Bash features [parameter expression][bash-param-exp].
You can use `${EDITOR:=nvim}` to set the `EDITOR` variable to `nvim` only if
it is empty, so you won't even need conditionals.

Most other shells support similar operators. [fish][fish] uses `; and` and `;
or`, but now [supports][fish-and-and] `&&` and `||` as well in modern versions.

`$_` (or `Alt+.`) is your last used argument (noted by [@Diti](https://lobste.rs/s/nao13f/elegant_bash_conditionals#c_brp038)).
For example:

```bash
test -f "FILE" && source "$_" || echo "$_ does not exist" >&2
```

A function or script returns the exit code of the last expression. If your last
expression is a command chain as described in this article, you might have an
unexpected exit code. See
[this](https://www.reddit.com/r/linux/comments/lw0ofg/elegant_bash_conditionals/gpf1lr0/)
comments.

## Closing thoughts
These command sequences with control operators are an elegant alternative for
simple if-statements. I think they look much better and are more expressive
looking at conditional logic.

But, don't overuse them. For bigger statements or advanced branching, you should
fall back to if-statements.

I hope this article motivates you to make your shell scripts a little more
elegant in the future by using these operators.

[bash-control-operators]: https://unix.stackexchange.com/a/159514/61092
[bash-source]: https://bash.cyberciti.biz/guide/Source_command
[bash-param-exp]: https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html#Shell-Parameter-Expansion
[control-operators]: https://www.gnu.org/software/bash/manual/html_node/Definitions.html#Definitions
[exit-status]: https://en.wikipedia.org/wiki/Exit_status
[fish]: https://fishshell.com/
[fish-and-and]: https://github.com/fish-shell/fish-shell/issues/4620
