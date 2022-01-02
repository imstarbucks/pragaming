<<<<<<< HEAD
# pragaming
Personal project for pragFam
=======
# Firestarter
Firestarter is a WordPress stack and folder structure that is optimised for
build tools and best practices.

Together with the [Forefather](https://git.forefront.com.my/lib/forefather)
development server, Firestarter allows you to quickly set up new WordPress
based projects.

## Features
* [Boilr](https://git.forefront.com.my/lib/Boilr) — ES6, SASS, BrowserSync, image minification and many more
* Folder structure optimised for developers, Git and build tools
* Flexible wp-config configuration
* Defaults to shared database server <sup>[1](#footnote-1)</sup>

## Requirements
Make sure you have the following dependencies before continuing:
* [Forefather Vagrant Server](https://git.forefront.com.my/lib/forefather)
* [Composer](https://getcomposer.org/)
* Access to a bash-based terminal (macOS Terminal, Windows Git Bash, Windows Subsystem for Linux)

## Usage
If you're setting up a new project, see [setting up new projects](#setting-up-new-projects) instead.

```bash
# 1. Download this repository or clone it into the forefather `sites/` directory
$ git clone <repository_url> <project_name>

# 2. Enter the directory
$ cd <project_name>

# 3. Call the init script to download WordPress files
$ ./firestarter-init.sh

# 4. Your done! If this project uses Boilr, proceed to installing npm dependencies.
```

### Setting up new projects
These steps are for new projects only. Ignore this if you cloning from an
existing repository.

```bash
# 1. Download the firestarter repository or clone it into the forefather `sites/` directory
$ git clone https://git.forefront.com.my/lib/firestarter.git <project_name>

# 2. Enter the directory
$ cd <project_name>

# 3. (Optional) If you want to use Boilr, switch to the `boilr` branch
$ git checkout boilr

# 4. Stop tracking the `firestarter` GitLab repository
$ rm -rf .git

# 5. Call the init script to download WordPress files
$ ./firestarter-init.sh

# 6. Configure database settings in wp-config/development.php

# 7. Your done! You may now proceed to pushing this to a new Git repository.
```


### Switching between `wp-config` files
Firestarter has been modified to lookup for multiple `wp-config` files. It loads
the first available config file in the `public/wp-config` directory in this order:
1. `wp-config/production.php` (create this file for production servers)
2. `wp-config/local.php` (create this file for your local modifications)
3. `wp-config/development.php` (default)

So to override the default `development.php` configuration, simply create a new
file according to the hierarchy above. Unlike `development.php`, the other two
files will be ignored by Git, so your changes will only affect you.

### Switching to a local database
By default, Firestarter uses a shared database server for development. If you
would like to use an isolated local database server running on Forefather, simply
copy `wp-config/local.sample.php` to `wp-config/local.php` and modify the
settings accordingly.

---
<sup id="footnote-1">[1] Only works while in office</sup>
>>>>>>> c01254e (initial commit)
