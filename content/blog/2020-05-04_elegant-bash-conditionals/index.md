+++
title = "Elegant bash conditionals"
description = "How to write better bash scripts by replacing if-statements with something much more elegant"

# TODO: remove to release
draft = true

[taxonomies]
categories = ["blog"]
tags = ["bash", "shell"]

[extra]
comments = true
zenn_applause = true
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
- `&&`: run the following command if previous succeeded
- `||`: run the following command if previous failed

## Exit codes
You might wonder how bash considers whether a command succeeded.
This is where [exit codes][exit-status] come in.
When a program exists a numeric status code is returned.
A value of `0` means the program succeeded, any other value means it failed.

The exit code is normally hidden.
You may inspect it from the last run command by reading the `?`
variable by invoking:

```bash
echo $?
```

E.g., listing with `ls` normally returns `0`, but this value differs if the
directory doesn't exist or if an error occurred.

```bash
ls ~/            # exit code: 0
ls ~/nonexistant # exit code: 2
```

This will function similarly to almost any program.

### Chaining commands
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
[ $USER != "root" ] && echo You must be root && exit 1
```

The `echo` command _always_ exists with `0`, so this propagates to `exit` if the
first expression is truthful.

<br>

If we'd like to print our profile file contents with a success message,
or an error message on read failure, we can do the following:

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

The `true` and `false` commands do nothing more than returning `0` or `1`.

Bash features [parameter expression][bash-param-exp].
You can use `${EDITOR:=nvim}` to set the `EDITOR` variable to `nvim` only if
it is empty, so you won't even need conditionals.

Most other shells support similar operators. [fish][fish] uses `; and` and `;
or`, but now [supports][fish-and-and] `&&` and `||` as well in modern versions.

## Closing thoughts
These command sequences with control operators are an elegant alternative for
simple if-statements. I think they look much better and are more expressive
looking at the conditional logic.

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