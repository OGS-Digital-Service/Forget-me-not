# NYS OGS Digital Services Language Switcher

NYSDS built our own version because the one provided by the vendor had a lot of issues:
1. **Major accessibility problems** including being inoperable and unreachable from a keyboard using expected keys.
2. mouseout events for being the only way to close the menu (really guys?)
3. lots of js including cookies that might be for business purposes and not for MVP need of a switcher
4. Duplicate IDs so the same switcher couldn't be easily reused multiple times on the same page without modifications

## What is in this repo?
This repo stores the various code pieces needed to use the NYSDS Langauage Switcher. There's an assembled file, a test embed for wysiwyg demo, and each of the pieces separated into their own files and minified versions in case you need to chop and change things.

**Things to consider:**
1. This hasn't been tested in production with the 12 url prefixes that the vendor is providing. (As of January 27, 2022)
2. The embeds-demo.html is a bare bones proof of concept. Fonts wont load correctly there, it's just to demo the placement and the function.
3. When this ends up on a production site, you may need to adjust font names and paths to load in the font-awesome globe icon. Also most of the css is scoped to this component only with some normalize aspects, but we can't guarantee it will work everywhere if you've applied a weird color or spacing mechanism to generic elements like section, article, or div.
4. The JS here is a bit rudimentary and can probably be improved upon or made more efficient. Feel free to open a PR/issue for that.
5. The insert-snippets.js is another brute force method of adding in the two banners and their corresponding js to above the universal navigation and below the universal footer. If you go that route you'll need the translate-banners.css to exist somewhere on the site too.

## Demo Pages
- https://distrodemo.ny.gov/translate-banner-test 
- https://ogs-digital-service.github.io/language-access/ 

## Problems? 
"Fix it yourself, websites aren't that hard." - Ron Swanson

Just kidding, email [digital.services@ogs.ny.gov] or [jeffrey.knaack@ogs.ny.gov] and we'll do anything we can to help in any way. We're cool man and just want the stuff on the internet to work right and be simple and accessible.
