---
layout: page
title: Projects
permalink: /projects/
---

## New Projects

### [TacoScript]

An es2015+-isomorphic altjs language, built to interoperate with [Babel].

Once it's ready/usable (mid-February 2016), I'll start advertising it on [HN],
etc.

### [PartyChurch]

A remake of meatspace.tv.

## Ongoing

### [Babel]

[Mis][Babel PRs][c][Babel PR] [contributions][Babel contribs].
Currently (2016-02-03) working on a PR to upgrade lodash to version 4.

### [Atom Editor][Atom Editor] [Packages][My Atom Packages] and [Contributions][Atom Contribs]
_CoffeeScript, JavaScript, Electron_

Also contributed to
[atom-block-comments](https://github.com/RayKwon/atom-block-comment/commits?author=forivall),
[es-identifier-highlight](https://github.com/heilhead/es-identifier-highlight/commits?author=forivall),
[atom-tree-view-breadcrumb](https://github.com/abe33/atom-tree-view-breadcrumb/commits?author=forivall),
[atom-fold-functions](https://github.com/robballou/atom-fold-functions/commits?author=forivall).

## Completed

### [Numix Project]
_SVG_

Some small icon contributions to the [base theme][Numix base theme contribs] and
the [circle theme][Numix circle theme contribs].

### [Gift exchange bot](https://github.com/forivall/holiday-gift-exchange-bot)
_Node.js, nodemailer_

Since my family lives in different cities these days, our usual "hand out slips
of paper" for arranging who should give gifts to who method wouldn't work anymore.

So I wrote a quick little script that sends out an email to each person for who
they're giving a gift to, that's even better than slips of paper since it can
make sure that they don't get their spouse's name.

I could turn this into a simple web service in time for next year! (Which would
also solve the problem of not accidentally peeking at someone's email if you got
the address wrong, which happened. :open_mouth: )

### [SizzlingStats.com] - [Add Overkill damage statistic]
_Node.js, Angular, MongoDb_

The creator of SizzlingStats (a plugin for recording statistics in competitive
TF2) added a new statistic and asked me to add support for it on the website.
It took me a couple hours, including feedback and a quick iterative improvement,
especially since I was already familiar with the entire stack.

_Upcoming:_ Fix some more issues on [SizzlingStats.com].

### [Mumble VOIP] - [Logitech G-Key support]
_C++, Qt, DirectInput, Windows_

I own a Logitech keyboard, and I prefer to use special programmable "G-Keys" for
my push-to-talk key, so I worked with the project's maintainer to write a module
to interact with Logitech's library in a GPL-compliant environment. I also
[provided user docs][Mumble G-Key User Docs] for use of the keys.

### [Azio Levetron Mech5 Keyboard Linux Driver]
_C, Linux Kernel, HID Descriptor protocol_

This is another keyboard I own, however, it also has some macro keys that needed
a driver to be written for Linux.

### [NiftyKb]
_C++, Qt, DirectInput, Windows, IPC_

Although I had a linux driver for my Mech5 Keyboard, it's support is also rather
goofy on Windows, where only Mumble seemed to be able to detect the macro keys.
So I extracted out the keybinding code from mumble to a separate application,
so that the keys could be used for any purpose imaginable.

Since this uses the same keybinding code as mumble, it's not only bound to the
Mech5 keyboard, it works with anything that mumble (DirectInput) can detect,
such as XBox and PS3 controllers.

### [NiftyKb-ts3]
_C++, Windows_

The primary motivation for NiftyKb was to get these special buttons to work
in TeamSpeak, so I forked the G-Key plugin for TeamSpeak so it could be driven
by NiftyKb.

### [quote-stream]

[Fixed a bug relating to newlines](https://github.com/substack/quote-stream/commits?author=forivall)

### [redshift]

_C_

[Debugged and fixed serious bug relating to headers and overridden macros.](https://github.com/jonls/redshift/commits?author=forivall)

### [Webpack]

Added an [additional umd build mode](https://github.com/webpack/webpack/commits?author=forivall).

## In Planning

These are potential, only in planning stages / proof of concept projects, based
on previous work and research during other projects.

### [Potatoe]

A JavaScript / Node.js build tool that uses npm to run `npm scripts` directly
and in parallel, within a single node process, to save memory, cpu and disk
usage, so that `npm scripts` can fully compete with `gulp`.

### Other

[node-ddcci](https://github.com/forivall/node-ddcci) / [libddcci](https://github.com/forivall/libddcci)

[Random ideas](https://trello.com/b/waF3B37Z)

[TacoScript]: https://github.com/forivall/tacoscript
[PartyChurch]: https://github.com/forivall/partychurch
[HN]: https://news.ycombinator.com/
[Potatoe]: https://github.com/forivall/potatoe
[Babel]: https://github.com/babel/babel
[Babel PRs]: https://github.com/babel/babel/pulls?q=author%3Aforivall
[Babel PR]: https://github.com/babel/babel/pull/2210
[Babel Contribs]: https://github.com/babel/babel/commits?author=forivall
[Atom Editor]: https://atom.io
[My Atom Packages]: https://atom.io/users/forivall
[Atom Contribs]: https://github.com/atom/tree-view/pulls?q=author%3Aforivall
[Numix Project]: https://numixproject.org/
[Numix base theme contribs]: https://github.com/numixproject/numix-icon-theme/commits?author=forivall
[Numix circle theme contribs]: https://github.com/numixproject/numix-core/commits?author=forivall
[Mumble VOIP]: http://wiki.mumble.info/wiki/Main_Page
[Logitech G-Key support]: https://github.com/mumble-voip/mumble/pull/1730
[Logitech G-Key User Docs]: http://wiki.mumble.info/wiki/Logitech_G-keys
[Azio Levetron Mech5 Keyboard Linux Driver]: https://github.com/forivall/azio-levetron-mech5-linux-driver
[NiftyKb]: https://github.com/forivall/niftykb
[NiftyKb-ts3]: https://github.com/forivall/niftykb-ts3
[SizzlingStats.com]: https://github.com/SizzlingStats/sizzlingstats.com
[Add Overkill damage statistic]: https://github.com/SizzlingStats/sizzlingstats.com/pull/48
[Webpack]: https://github.com/webpack/
[redshift]: https://github.com/jonls/redshift
[quote-stream]: https://github.com/substack/quote-stream

<!-- TODO: add years to each -->
<!-- TODO: add more of planned projects -->
