# 4 across Icon Frame for WYSIWYG

This is a 4 across icon frame with heading and text and arrows inbetween for embed in an ACSF wysiwyg, currently used on two pages for the excelsior pass:
- (coming shortly)
- (standby)

Embed all the code into the source of the full html view of a wysiwyg as done with other custom embeds.

**HEY READ THIS:** Make sure you double check the relative path of the image files that are uploaded to the site that you are using this on. Currently the paths are relative, but hardcoded, as of 9/2/21. They change every month because of how drupal's media file manager works, so if you replace the images in october and don't change the path in the code - it'll be broken. 

This is built using tailwind for styling and all the utility classes used here are in the minified css at the top of the embed. Tailwind uses a ":" modifier to indicate a state change (breakpoint change) and different parameters. It's mobile first so any style that isn't prefixed is valid from the smallest breakpoint up and only different states at desktop/tablet or larger are indicated.

need help? email [jeffrey.knaack@ogs.ny.gov] or [digital.services@ogs.ny.gov]