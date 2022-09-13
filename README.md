# Multiview Stats for obs-studio

This provides you with an atem-mini like multiview stats display to show stuff like the recording/streaming status, free disk space, stream health, current stream bitrate and streaming/recording timecode.

display1.html is all about streaming related stats. The big text on the top shows the current streaming status and the stream timecode. The middle left part displays the current bitrate that is beeing sent and the middle right part shows the network congestion in the same color that the small rectangle in the obs status bar would show. The bottom line shows the streaming service (Either the name or the custom url).

display2.html is mostly about recording related stats. The big text on the top shows the current recording status and the recording timecode. The middle left part displays the free disk space but be warned this is not an absolute value but calculated relative to the first free disk space value that obs sends (which is basically the free space before the recording started). The middle right part shows the current render framerate. The bottom text shows the current configured recording path.

All data will auto-populate when the page is loaded and obs with obs-websocket enabled is running.

### Requirements
- OBS 28 or later
- An internet connection

### Setup obs-websocket
- Start OBS, open the "Tools" menu and select "obs-websocket Settings"
- Make sure that "Enable Websocket server" is checked, "Server Port" is 4455
- (If "Enable Authentication" is enabled) Copy the websocket password by clicking on "Show Connect Info"-Button -> Next to the "Server Password" field -> "Copy"-Button

### Setup inside obs-studio
- [Download this repository](https://github.com/lebaston100/mv-stats-for-obs/archive/master.zip) OR clone it (you only need the display1.html and display2.html files) OR use the online hosted versions at [http://mv-stats.lebaston100.de/display1.html](http://mv-stats.lebaston100.de/display1.html) and [http://mv-stats.lebaston100.de/display2.html](http://mv-stats.lebaston100.de/display2.html) (only works when authentification is disabled in obs-websocket)
- Create 2 new scenes in obs
- Additional work if you set a password in obs-websocket: Open each html file with a text editor and replace the "secret-password" with your password where it says "// Set password here"(line 28 in display1.html and line 47 in display2.html) and save the files
- Add a browser source in each scene with 1920x1080 and "local file" selected and pointed to each of the html files
- You can lower the browser render framerate to save resources
- Move the scenes into the right spot so they show up in the right place of the multiview
- That's it!

If you want to run the pages on another device in the network that is not the obs-pc, then you can manually set the obs-pc ip by editing the variable in the line before the password configuration line.

If you have any problems, just open a Github issue or join my [Discord Server](https://discord.gg/PCYQJwX).

Big thanks to my co-dev Rgenxer ([facebook.com/temzlemdor](https://www.facebook.com/temzlemdor) / Rgenxer#1169) for doing all the frontend development.

## Examples in stand-by
Both pages used in multiview:
![Example image of display2.html](https://cdn.lebaston100.de/git/amv/display3.png)
display1.html:
![Example image of display1.html](https://cdn.lebaston100.de/git/amv/display1.png)
display2.html:
![Example image of display2.html](https://cdn.lebaston100.de/git/amv/display2.png)