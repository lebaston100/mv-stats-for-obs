# Multiview Stats for obs-studio

This provides you with an atem-mini like multiview stats display to show stuff like the recording/streaming status, free disk space, stream health, current stream bitrate and streaming/recording timecode.

### Requirements
- The [obs-websocket plugin](https://github.com/Palakis/obs-websocket/releases) (Version >= 4.7.0)
- An internet connection

### Setup obs-websocket
- Download the obs-websocket installer and run it or use the zip file for a manual install
- Start OBS, open the "Tools" menu and select "websocket server settings"
- Make sure that "Enable Websocket server" is checked, "Server Port" is 4444
- If you want/need to, you can also set a password if you are running in an untrusted network

### Setup inside obs-studio
- [Download this repository](https://github.com/lebaston100/mv-stats-for-obs/archive/master.zip) or clone it (you only need the display1.html and display2.html files)
- Create 2 new scenes in obs
- Additional work if you set a password in obs-websocket: Open each html file with a text editor and replace the "mypassword" with your password where it says "// Set password here" and save the files
- Add a browser source in each scene with 1920x1080 and "local file" selected and pointed to each html file
- You can lower the browser render framerate to save resources
- Move the scenes into the right spot so they show up in the right place of the multiview
- That's it!

## Examples in stand-by
display1.html:
![Example image of display1.html](https://cdn.lebaston100.de/git/amv/display1.png)
display2.html:
![Example image of display2.html](https://cdn.lebaston100.de/git/amv/display2.png)