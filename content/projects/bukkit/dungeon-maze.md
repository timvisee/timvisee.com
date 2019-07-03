+++
title = "Dungeon Maze"
description = "Dungeon Maze Bukkit plugin"
date = 2012-11-21

[taxonomies]
tags = ["bukkit"]
categories = ["project"]
+++

_Source code: [GitHub][github]_  
_Current version: v0.1.5.2_

_Note: this project is discontinued, and will likely no longer receive support
or updates._

Dungeon Maze is a world generator for Minecraft, it's a CraftBukkit plugin.
Dungeon Maze generates an infinite world with a lot of cool and strange stuff in
it. The world contains 7 layers of epicness, each layer does have different
content. All the layers contains a lot of Monsters, but also a lot of treasures.
It's a very cool map to explore with some friends. Give it a try! Will you
survive?  Check out the announcement trailer bellow!

## Announcement trailer
Finally, after 1 year of work Dungeon Maze is going to be released for the first
time:

{{ youtube(id="t5dPptMDnSg") }}

## Features
- Dungeon Maze generates an infinite world of epicness!
- Each world contains 7 layers, each layer may contain different strucures.
- Dungeon Maze contains a lot of Monster Spawners, so it contains a lot of mobs
- The Dungeon Maze plugin does have some commands to easily generate a new Dungeon Maze world.
- And a lot more...

## Planned Features
- A lot of new structures should be added! In the future there's probably also
  going to be a future available to add custom structures, made by yourself.
- Config files to setup things for each world, like how much spawners a certain
  floor will contain, or what items could be found in a chest.
- And a lot more...

## Download
- [Dungeon Maze v0.1.5.2][download-dropbox] _(dropbox.com, direct link)_
- [Dungeon Maze v0.1.5.2][download-mediafire] _(mediafire.com, direct link)_
- [Older downloads][download-older] _(on old website)_

## Installation
1. Download the plugin
2. Add the `DungeonMaze.jar` file AND the folder `DungeonMaze` from the
   downloaded `.zip` file to the `../plugins` folder of the Minecraft server.
   Also add the files inside the DungeonMaze folder into the folder
   `../plugins/DungeonMaze'`.
3. Start your server and enjoy the plugin :)

## Commands
Dungeon Maze commands can be invoked by typing `/dungeonmaze` or `/dm` in the
in-game chat, or in the server console.

| Command                  | Action                                          |
| :----------------------- | :---------------------------------------------- |
| `/dm help`               | View Dungeon Maze help                            |
| `/dm createworld <name>` | Generate a new Dungeon Maze world                 |
| `/dm teleport <name>`    | Teleport to one of the Dungeon Maze worlds        |
| `/dm listworlds`         | List all Dungeon Maze worlds                      |
| `/dm reload`             | Reload the Dungeon Maze plugin                    |
| `/dm reloadperms`        | Reload the permissions system inside Dungeon Maze |
| `/dm checkupdates`       | Check for new updates                             |
| `/dm version`            | View the current version number                   |

## Permissions
Dungeon Maze supports permissions all major permissions systems.  Bellow you
could find all the permission nodes.  If you don't have an permissions system
installed, all the commands are only permitted to OP's.

| Permission node                    | Action                                  |
| :--------------------------------- | :-------------------------------------- |
| `dungeonmaze.command.createworld`  | Permission to the createworld command     |
| `dungeonmaze.command.teleport`     | Permission to the teleport command        |
| `dungeonmaze.command.listworlds`   | Permission to the listworlds command      |
| `dungeonmaze.command.reload`       | Permission to the reload command          |
| `dungeonmaze.command.reloadperms`  | Permission to the reloadperms command     |
| `dungeonmaze.command.checkupdates` | Permission to the checkupdates command    |
| `dungeonmaze.bypass.surface`       | Bypass the surface blocker                |
| `dungeonmaze.bypass.build`         | Bypass permission of the world protection |

## Tutorials
- How to create your first Dungeon Maze world: [How to create your first Dungeon Maze world _(on dev.bukkit.org)_][tutorial-first-world]
- How to use Dungeon Maze with Multiverse: [How to use Dungeon Maze with Multiverse _(on dev.bukkit.org)_][tutorial-multiverse]

## Source code
Because I like programming and I want to share my code so other developers could
fix an issue directly if they found a problem for example, I share the source
code of my project. It's available on [GitHub][github].

## Changelog
Version 0.1.5.2 Alpha (21-11-2012):
- Added the event system into the Dungeon Maze API. Dungeon Maze does now have
  events in the API system, you could find more information about it on the API
  page. (for developers)
- Added the `DMGenerationChest` event, wich is called when a chest is generated.
  With this event chest contents can be set, it can be cancelled etc.
  (for developers)
- Little bug fixes

[View all the changes here][changelog] _(old website)_

## Donate
Please donate some money so I can buy some coffee to make better plugins and
host the website, I would really like it if you give an donation and I probably
put you on the sponsor list :-)

[Donate][donate]

## Comment
Please comment and ask on the official Bukkit forums, if you have a question
you can also contact me; Dungeon Maze page on [dev.bukkit.org][dev.bukkit.org].


[github]: https://github.com/timvisee/dungeon-maze
[download-dropbox]: https://old.timvisee.com/download/91
[download-mediafire]: https://old.timvisee.com/download/92
[download-older]: https://old.timvisee.com/projects/bukkit/dungeon-maze/downloads
[tutorial-first-world]: http://dev.bukkit.org/server-mods/dungeon-maze/pages/how-to-create-your-first-dungeon-maze-world/
[tutorial-multiverse]: http://dev.bukkit.org/server-mods/dungeon-maze/pages/how-to-use-dungeon-maze-with-multiverse/
[changelog]: httpss://old.timvisee.com/projects/bukkit/dungeon-maze/changelog
[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QH2EGBRH9T6R2
[dev.bukkit.org]: https://dev.bukkit.org/server-mods/dungeon-maze/
