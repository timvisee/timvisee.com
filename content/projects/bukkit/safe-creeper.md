+++
title = "Safe Creeper"
description = "Safe Creeper Bukkit plugin"
date = 2013-11-12

[taxonomies]
tags = ["bukkit"]
categories = ["project"]

[extra]
zenn_applause = true
+++

_Source code: [GitHub][github]_  
_Current version: v1.5.2.5_

_Note: this project is discontinued, and will likely no longer receive support
or updates._

With Safe Creeper you can control creeper explosions and other things like,
fireballs, TNT, Enderman and some other things, you can set if a creeper
explosions damage the world. That means that the players got damage but that the
world is still ok. You can also set a lot of other things, if players can place
TNT blocks, if creepers will explode above the surface and underneath not, set
if enderman can place and break blocks, even if they can clone blocks, explosion
sounds, smoke effects and a lot of more things. The plugins is fully
configurable and have multi world support.

## Video
{{ youtube(id="hSBKoMWkMTc") }}

## Features
- Set if creepers damage the world, also fireballs, TNT and other things
- Get full control of the Wither and EnderDragon bosses!
- Enderman support, set if enderman can place and break blocks, also set if they
  can clone blocks (get blocks but don't remove them from the world)
- Multi World support
- Start the plugin before loading the world, to ceep everything safe while
  generating the world and adding the mobs on it
- Optional function that your settings are only avable between two levels, for
  example, if you want, a creeper can explode only underneeth a level
  (y coordinate) and above a level.
- Explosion sounds, enable or disable explosion sounds
- Explosion smoke effect
- Set if players can place a TNT block
- Set if creepers will be powerd when they hit by lightning
- And a lot more...

## Download
- [Safe Creeper v1.5.2.5][download-bukkit] _(dev.bukkit.org, direct link)_
- [Safe Creeper v1.5.2.5][download-dropbox] _(dropbox.com, direct link)_
- [Safe Creeper v1.5.2.5][download-mediafire] _(mediafire.com, direct link)_
- [Older downloads][download-older] _(on old website)_

## Installation
1. Download the plugin
2. Add the `SafeCreeper.jar` file and the folder `Safe Creeper` from the
   downloaded `.zip` file to the `/plugin` folder of the Minecraft server. Also
   add the files inside the Safe Creeper folder into the folder
   `plugins/Safe Creeper`, this is optional.
3. Set some standaard settings if you want
4. Start your server and enjoy the plugin :)

## Commands
Safe Creeper commands can be invoked by typing `/safecreeper` or `/sc` in the
in-game chat, or in the server console.

| Command                       | Action                               |
| :---------------------------- | :----------------------------------- |
| `/safecreeper <help/h/?>`     | Help command                         |
| `/safecreeper help <config>`  | View config help                     |
| `/safecreeper reload`         | Reload the config files              |
| `/safecreeper reloadperms`    | Reinitialize the permissions systems |
| `/safecreeper poststatistics` | Get the current plugin version       |
| `/safecreeper <checkupdates>` | Get the current plugin version       |
| `/safecreeper <version>`      | Get the current plugin version       |

## Permissions
Safe Creeper supports permissions all major permissions systems.  Bellow you
could find all the permission nodes. If you don't have an permissions system
installed, all the commands are only permitted to OP's.

| Permission node                                 | Action                                              |
| :---------------------------------------------- | :-------------------------------------------------- |
| `safecreeper.command.reload`                    | Permission for /sc reload                           |
| `safecreeper.command.reloadperms`               | Permission for /sc reloadperms                      |
| `safecreeper.command.config.get`                | Config commands to get values from the config files |
| `safecreeper.command.config.set`                | Config commands to set values from the config files |
| `safecreeper.command.poststatistics`            | Update checker command                              |
| `safecreeper.command.checkupdates`              | Update checker command                              |
| `safecreeper.bypass.WaterControl.CanPlaceWater` | Bypass permission to place water                    |
| `safecreeper.bypass.LavaControl.CanPlaceLava`   | Bypass permission to place lava                     |
| `safecreeper.bypass.TNTControl.CanPlaceTNT`     | Bypass permission to place TNT                      |
| `safecreeper.bypass.TNTControl.CanBreakTNT`     | Bypass permission to break TNT                      |
| `safecreeper.bypass.PlayerControl.CanSleep`     | Bypass permission to sleep                          |

## Source code
Because I like programming and I want to share my code so other developers could
fix an issue directly if they found a problem for example, I share the source
code of my project. It's available on [GitHub][github].

## Changelog
Version 1.5.2.5 (12-11-2013)
- Removed unused downloader.
- Build against `Bukkit-1.6.4-R2.0`

[View all the changes here][changelog] _(old website)_

## Donate
Please donate some money so I can buy some coffee to make better plugins and
host the website, I would really like it if you give an donation and I probably
put you on the sponsor list :-)

[Donate][donate]

## Comment
Please comment and ask on the official Bukkit forums, if you have a question
you can also contact me; Safe Creeper page on [dev.bukkit.org][dev.bukkit.org].

[github]: https://github.com/timvisee/safe-creeper
[download-bukkit]: https://old.timvisee.com/download/190
[download-dropbox]: https://old.timvisee.com/download/191
[download-mediafire]: https://old.timvisee.com/download/192
[download-older]: https://old.timvisee.com/projects/bukkit/safe-creeper/downloads
[changelog]: https://old.timvisee.com/projects/bukkit/safe-creeper/changelog
[donate]: @/donate.md
[dev.bukkit.org]: https://dev.bukkit.org/server-mods/safe-creeper/
