# manifest.json

This file tells how the pop-up should be displayed: name, version, what should show up when it pops up, and scripts that work with it. It is possible to use the pop-up in order to control your scripts.
The svg file in line 20 is the image that will be displayed in Firefox's toolbar. When you click this, the html file (linked in line 22) will show up. The title of the pop-up is taken from line 21.

# toolbar-button.svg

This file is displayed in the toolbar.

# toolbar-popup.html

This is just a html file that can be styled how you would like (with fonts, css, or js). It works just as it should, but there is a limit played on how wide and tall it will be displayed. Consider this when making it.

# background.js

This is the script that controls what theme is shown. This will check in a interval of 5 minutes what the time is, then will choose the correct theme for that time.
At the start of the file, the colours and images for the themes are located. day, evening, and night are displayed depending on the if statements from line 174. Here, "theme_frame" is the toolbar background and "colors" contains each buttons colour. RGB is used here.
Lines 174 to 187 are a function that chooses the theme. The if statements have notes showing when it returns True.

# /images

background.js takes its images from here. This is displayed behind the tabs and toolbar. .pngs and .gifs are supported. Just be sure to resize the photos to match your resolution, otherwise it might cut off. 