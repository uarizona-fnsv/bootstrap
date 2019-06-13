# 1.1.0 - Tonight, Tonight

[![](http://img.youtube.com/vi/NOG3eus4ZSo/0.jpg)](https://www.youtube.com/watch?v=NOG3eus4ZSo "Tonight, Tonight - click to play")
*(click to play)*

> Believe in me as I believe in you

This release supports Bootstrap 4.3.1 (and all the 4.2.1 bits we previously missed) in all of it's glory, full of new components we actually could really use, like toast notifications, spinners, and switches!

### New Things
- Spinner (for loading indicators)
- Switch (an iOS like reskin of a checkbox)
- Toast (displaying notifications)
- Various other little niceities like `.modal-xl`, `.text-decoration-none`, `.streached-link`, `.rounded-sm`/`.rounded-lg`, `.list-group-horizontal`, and more.
- Tons of css and js optimizations
- Really cool responsive font sizes, which you can turn on if you want to use it. This is turned off by default (and will likely be until bootstrap v5, since it can break things) but if a project looks fine with it turned on, then use it! This is done with the `$enable-responsive-font-sizes` boolean wherever you import the sass files for bootstrap. If you aren't using sass, you won't be able to use them.

For detailed information, see Bootstrap's [4.2.1 release notes](https://blog.getbootstrap.com/2018/12/21/bootstrap-4-2-1/) and [4.3.0 release notes](https://blog.getbootstrap.com/2019/02/11/bootstrap-4-3-0/).

### Other Improvements
In addition to the css changes, this release includes the following:
- Improved documentation site changelog, home page, and usage instructions
- Better deploys to the static site (master deploys to the root of the bucket, everything else to `versions/` folder for easy access)
- Improved deploys to Sonatype Nexus
- Minor updates to packages

# 1.0.0 - Money For Nothing

[![](http://img.youtube.com/vi/lAD6Obi7Cag/0.jpg)](https://www.youtube.com/watch?v=lAD6Obi7Cag "Money For Nothing - Click to play")
*(click to play)*

> Listen here
> Now that ain't workin' that's the way to do it

Implementing bootstrap is now a breeze in our projects and I'll make all those electronics store workers jealous. Maybe. Idk. It's a stretch but sums up my attitude towards this project in comparison to working with UA Bootstrap.

Finally, FSO-Bootstrap is fully mature after nearly 2 years! (Granted, 0.1.4 was _very_ stable aside from still being based on bootstrap 4-alpha.6)

This release finalizes any style changes from default bootstrap.

# 1.0.0 Release Candidate

The RC introduces a full-blown, super awesome, totally not over-complicated CI/CD workflow that handles automated versioning via an npm task, deployment of documentation sites based on branch, and deployment of released code to a CDN.

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
