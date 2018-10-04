# 1.0.0 Beta

This version includes numerous major changes, including:

- migrating to Bootstrap 4.1.3
- New documentation site based on Vuepress
- Switch to using bootstrap as an npm import rather than forking the entire library
- More refined fonts, particularly for headers, and other various changes that move us a bit further away from UA Bootstrap
- Font Awesome 5, which is an optional import. It will be deprecated in later versions
- UA Brand Icons as an optional import.

See [#26](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/issues/26) for more details

# v0.1.4

- Updated the CDN link for Milo fonts
- Slight improvement of documentation

This is the final alpha-based release.

# 0.1.3

## New Features
- Install via npm! Yay! 
- Numerous Documentation page fixes
- Sage and Silver documentation site! Because we can!

# 0.1.2

This release includes numerous background color types and some changes to better reflect UA branding. It is also 100% compatable with Django-Base-App! :smile: 

# 0.1.1

This adds the `fonts/` directory to the distribution so that this can actually be used. No other changes.

# 0.1.0

This is the initial release that includes the basic branding changes.

## Highlights
*  Colors: All Bootstrap colors have been UAified
*  Alerts, Buttons, Badges, Cards, etc: All bootstrap components that use the color schemes have been updated to better make use of those colors
*  Fonts: We now use Milo Web and Milo Sans Web to match up with the UA branding style 
*  UA Branding Icons: Use the UA Glyphicon set!
*  Font Awesome: Since Bootstrap dropped Glyphicons, we are going to use Font Awesome cuz it's awesome. It's also better, and generally what the bootstrap creators recommend anyway.
*  A few convenience classes were added, such as `.uppercase` and `.sans` to help with some of the branding style

## Bootstrap Version
This release is based on [Bootstrap 4 Alpha 6](https://github.com/twbs/bootstrap/releases/tag/v4.0.0-alpha.6) so check out the changes they note there, and over the course of the alphas. A lot of things are the same as in Bootstrap 3, but there are quite a few small changes here and there.
