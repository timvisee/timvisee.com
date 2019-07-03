+++
title = "Glowstone Lanterns"
description = "Glowstone Lanterns Bukkit plugin"
date = 2011-07-09

[taxonomies]
tags = ["bukkit"]
categories = ["project"]
+++

_Source code: [GitHub][github]_  
_Current version: v1.0.1_

_Note: this project is discontinued, and will likely no longer receive support
or updates._

![Glowstone Lanterns header](header.png)

With this plugin Glowstone Lanterns you can make lanterns, when it's going dark
the glass of the lanterns will change in glowstone and when it's daytime it will
change in glass again. The great thing is that you don't need to place a full
lantern but only a glass/glowstone block, so you can use it for everything. This
plugin is very useful for a large city to light it up, that looks really cool
that the lanterns will change in glowstone! You can also place prebuilt
lanterns, so that's really useful if you want to plase a lot of lanterns in a
little time. You can enable glowstone lanterns with `/gl`, when you place a
glass or a glowstone block it is marked as a glowstone lanterns, this block will
change to glowstone if it is night and to glass if it is daytime. If you use
`/gl l l` you will enable prebuilt glowstone lanterns, if you place a glass or a
glowstone block there will appear the prebuilt glowstone lantern you selected
right there. There prebuilt lanterns are in external files, so you can make your
own prebuilt lanterns and share them with other people.

## Video
In the video underneath you can see how the plugin works: _(outdated video)_

{{ youtube(id="a_rdqOazJl0") }}

## Features
- Permissions support
- Multi world support
- Place prebuilt lanterns that are saved in external files, you can make them and share them with other people
- Possibility to make your own custom prebuilt lanterns
- Players can only destroy lanterns if he have permission
- Put lanterns on when it rains
- And a lot more!

## Planned Features
- Custom chat messages
- In-game prebuilt lanterns creator

## Download
- [Glowstone Lanterns v1.0.1][download-dropbox] _(dropbox.com, direct link)_
- [Glowstone Lanterns v1.0.1][download-mediafire] _(mediafire.com, direct link)_
- [Older downloads][download-older] _(on old website)_

## Installation
1. Download the plugin
2. Add the `GlowstoneLanterns.jar` file and the folder `Glowstone Lanterns` from
   the downloaded `.zip` file to the `/plugin` folder of the Minecraft server.
   Also add the included folder `Glowstone Lanterns` to your plugins folder.
3. Add the permission nodes if you have a permissions system.
4. Set some settings in the config file.
5. Start your server and enjoy the plugin :)

## Commands
Glowstone Lanterns commands can be invoked by typing `/glowstonelanterns`,
`/glowstonelantern` or `/gl` in the in-game chat, or in the server console.

| Command             | Action                                          |
| :------------------ | :---------------------------------------------- |
| `/gl`               | Enable glowstone lanterns                       |
| `/gl lantern <id>`  | Enable prebuilt glowstone lanterns              |
| `/gl lantern`       | Disable prebuilt glowstone lanterns             |
| `/gl list lanterns` | List the prebuilt lanterns                      |
| `/gl help`          | View the help with all commands                 |
| `/gl info`          | View info (see if glowstone lanterns is enabled)|
| `/gl save`          | Save the glowstone lanterns list                 |
| `/gl reload`        | Reload the lanterns list                        |
| `/gl version`       | View current running version number             |

## Permissions
| Permission node                   | Action                                    |
| :-------------------------------- | :---------------------------------------- |
| `glowstonelanterns.gl`              | Allow users to place glowstone lanterns   |
| `glowstonelanterns.destroyLanterns` | Allow users to destroy glowstone lanterns |
| `glowstonelanterns.info`            | Allow users to use the info command       |
| `glowstonelanterns.reload`          | Allow users to use the reload command     |
| `glowstonelanterns.save`            | Allow users to use the save command       |

## Source code
Because I like programming and I want to share my code so other developers could
fix an issue directly if they found a problem for example, I share the source
code of my project. It's available on [GitHub][github].

## Changelog
Version 0.6 (14-10-2012)

- Delayed lantern changes
- Auto generating config files
- Updated bukkit API
- Improved the permissions manager
- Added `PermissionsEx` support
- Added `Essentials Group Manager` support
- Updated `Default Permissions` support
- Renamed package from `me.timvisee` to `com.timvisee`

[View all the changes here][changelog] _(old website)_

## Donate
Please donate some money so I can buy some coffee to make better plugins and
host the website, I would really like it if you give an donation and I probably
put you on the sponsor list :-)

[Donate][donate]

## Comment
Please comment and ask on the official Bukkit forums, if you have a question
you can also contact me; Glowstone Lanterns page on
[dev.bukkit.org][dev.bukkit.org].


[github]: https://github.com/timvisee/GlowstoneLanterns
[download-dropbox]: https://old.timvisee.com/download/75
[download-mediafire]: https://old.timvisee.com/download/76
[download-older]: https://old.timvisee.com/projects/bukkit/glowstone-lanterns/downloads
[changelog]: httpss://old.timvisee.com/projects/bukkit/glowstone-lanterns/changelog
[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QH2EGBRH9T6R2
[dev.bukkit.org]: https://dev.bukkit.org/server-mods/glowstone-lanterns/
