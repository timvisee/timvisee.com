+++
title = "World Portal"
description = "World Portal Bukkit plugin"
date = 2012-09-03

[taxonomies]
tags = ["bukkit"]
categories = ["project"]

[extra]
comments = true
zenn_applause = true
+++

_Source code: [GitHub][github]_  
_Current version: v0.7.1_

_Note: this project is discontinued, and will likely no longer receive support
or updates._

World Portal is a really useful and simple to use plugin to make portals in your
server. Players could use the portals to teleport to another location or even to
another world. This is also really useful when you have a large server so
players could go to other places them self really easy. With World Portal you
could even generate and teleport to other worlds, very smootly with no problems.
You could make portals using, buttons, pressure plates, switches and even more.
World Portal is the ultimate solution for portals, and even for multi world
mangement.

## Videos
{{ youtube(id="6h913qLm5SY") }}

_This video was made by gotgot1995. Please notice that this is an out-dated
version of world portal but works almost the same as shown in the video._

{{ youtube(id="jH7hdRkGric") }}

_The video above was made by ThermalM16 which gives a great example of World Portal usage._

{{ youtube(id="Kr90_482NuQ") }}

_This video was made by VerioHD._

## Features
- Teleport to other locations and world with signs, pressure plates, buttons
  and more
- Easily create portals using a single command
- Generate new worlds
- Portal break protection
- Forces chunks to load when a player teleports to it
- Multiworld support
- Permissions Support
- And even a lot more!

## Upcoming Features
- Mark a place and give it a name so you could easily link portals to it.
- Payment system for the portals so the user needs to pay to go through the
  portal (optional for every portal!)
- Easily link two portals to each other
- Add a optional delay to the portals to teleport after 3 seconds for example.
- Command to create a new world.
- Create portals of detector rails, so players could be teleported when they are
  riding in a minecart on a track.
- The optional ability to show a message in the world where the player was
  teleported to that that player has joined that world.
- The optional option that mobs could teleport through portals (using pressure
  plates for example)

## Download
- [World Portal v0.7.1][download-dropbox] _(dropbox.com, direct link)_
- [World Portal v0.7.1][download-mediafire] _(mediafire.com, direct link)_
- [Older downloads][download-older] _(on old website)_

## Installation
1. Download the plugin
2. Add the `WorldPortal.jar` file and the folder `World Portal` from the
   downloaded `.zip` file to the `/plugin` folder of the Minecraft server.
   Also add the files inside the World Portal folder to the
   `plugins/World Portal` folder.
3. Add the permission lines if you have a permissions system;
   (Look at the permissions paragraph blow)
4. Start your server, and create your portals!

## Commands
World Portal commands can be invoked by typing `/worldportal` or `/wp` in the
in-game chat.

| Command                      | Action                                          |
| :--------------------------- | :---------------------------------------------- |
| `/wp create`                 | Create a World Portal                           |
| `/wp createstop`             | Disable creation mode                           |
| `/wp remove`                 | Remove World Portals                            |
| `/wp removestop`             | Disable remove mode                             |
| `/wp tp <world> [x] [y] [z]` | Teleport to another location/world              |
| `/wp info`                   | Get your status                                 |
| `/wp save`                   | Save all World Portals                          |
| `/wp reload`                 | Reload the plugin                               |
| `/wp verion`                 | Get plugin info                                 |

## Permissions
Portal Portal supports the following permissions:

| Permission node        | Action                         | Default |
| :--------------------- | :----------------------------- | :------ |
| `worldportal.use`      | Teleport through World Portals | All     |
| `worldportal.create`   | Create World Portals           | OPs    |
| `worldportal.remove`   | Remove World Portals           | OPs    |
| `worldportal.teleport` | Teleport commands              | OPs    |
| `worldportal.save`     | Save World Portals             | OPs    |
| `worldportal.reload`   | Reload World Portals           | OPs    |

## Portal blocks
| Object name         | Object ID | Trigger action |
| :------------------ | :-------: | :------------- |
| Sign                | `63`      | _Click_        |
| Wall sign           | `68`      | _Click_        |
| Stone pressureplate | `70`      | _Touch_        |
| Wood pressureplate  | `72`      | _Touch_        |
| Button              | `77`      | _Click_        |
| Lever               | `69`      | _Switch_       |

## Source code
Because I like programming and I want to share my code so other developers could
fix an issue directly if they found a problem for example, I share the source
code of my project. It's available on [GitHub][github].

## Changelog
Version 0.2.6 (3-10-2012)
- World Portal will now auto generate it's config files if they don't exist.
- The `CraftBukkit` API has been updated
- The `PermissionsEx` API has been updated
- Some other minor bug fixes.

[View all the changes here][changelog] _(old website)_

## Donate
Please donate some money so I can buy some coffee to make better plugins and
host the website, I would really like it if you give an donation and I probably
put you on the sponsor list :-)

[Donate][donate]

## Comment
Please comment and ask on the official Bukkit forums, if you have a question
you can also contact me; World Portal page on [dev.bukkit.org][dev.bukkit.org].


[github]: https://github.com/timvisee/world-portal
[download-dropbox]: https://old.timvisee.com/download/69
[download-mediafire]: https://old.timvisee.com/download/70
[download-older]: https://old.timvisee.com/projects/bukkit/world-portal/downloads
[changelog]: https://old.timvisee.com/projects/bukkit/world-portal/changelog
[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QH2EGBRH9T6R2
[dev.bukkit.org]: https://dev.bukkit.org/server-mods/world-portal/
