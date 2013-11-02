\#tf2.mix.nahl is changing irc networks! That means we need to transfer the stats, and get you set up on the new network.

**TL;DR** Set your canonical nick on gamesurge. [Register](http://geeksirc.net/nickserv-registration/). [Login with password](http://webchat.geeksirc.net/tf2.mix.nahl).

#Here's what you need to do

##On Gamesurge:
_Make sure_ that you restore your nickname to the name that you want to be known as. So, if you were funny and changed your nickname to some kind of joke, _your stats won't be transferred!_

So, use the following to reset your gamesurge name:

    !nick [your_nickname_here]

If your name on gamesurge is your name, then you don't need to change anything on gamesurge.

This is so that the bot can look up your stats on your old account, and associate it with your new account. **Remember this nickname so that you use the same one on the new server.**

---
&nbsp;  
Now, on to setting up your account on the new network

##GeeksIRC

###Registration
Go to [the registration page](http://geeksirc.net/nickserv-registration/), and enter your nickname, email (for recovery??), and a password. _Make sure that you don't make typos in your password, since there's no confirmation_. If you have issues, admins are usually online, and can help you.

###Special characters
If your nick is something like `xX%%@@420sniper@@%%Xx`, then you won't be able to register that. Use something simple, like `420sniper`; check your email (I -- forivall -- didn't get an email, so that needs to be fixed.)

When you log into the IRC client, using your _registration name_ (like `420sniper`) use the command

    /msg NickServ group xX%%@@420sniper@@%%Xx


###Logging in

####Web Client (KiwiIRC)

1. Go to [webchat.geeksirc.net/tf2.mix.nahl](http://webchat.geeksirc.net/tf2.mix.nahl)
2. Enter your nickname
3. Check the password checkbox and enter your password
4. Connect!

**Note:** if it gets while connecting, try connecting without the password. As soon as you connect, type `/ns identify [password]`. The system may change your name (in order to protect against nickname hijacking), so change your nick back with `/nick [your_name]`

####IRC Client
<small>I'll assume you know what you're doing</small>

- Server info: `irc.geeksirc.net`, port `6667` or, with SSL, port `6697`.
- Identify: `/msg NickServ identify [username] [password]` (most IRC clients can do this automatically)
- Our channels: `#tf2.mix.nahl` and `#GeeksIRC`

You can doublecheck that you were identified correctly with `/whois [user_name]`

##Notes

The web client is in beta status, so it may fail to connect, and have other bugs. But its **super fantastic**, and we're in contact with its creator, so if anything goes wrong, we know who to call.

`!stats` doesn't work _yet_, the database hasn't been transferred yet.

###Other useful commands

If your name gets locked out

    /msg NickServ release [user_name] [password]

###Messages to admins

Please private message `blindsight`, so he can re-add you.

##So, why did we change irc hosts?

1. Better IRC services and better IRCd software daemon.
2. More different levels of operators instead of just @, there will be (~&@%) this means more finer control of operator privileges.
3. Opers that are available 24/7
4. Automatic IP cloaking (no one will be able to see your IP unless they are network staff. (see GeeksIRC staff page)
5. vhosts (this replaces where your IP would go so you can make your name say Blindsight!Cuban@Border.Crossings.vhost
6. More channel and user modes which means more finer control.
