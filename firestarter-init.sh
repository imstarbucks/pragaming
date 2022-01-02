# firestarter-init.sh
# ~~~~~~~~~~~~~~~~~~~
# Convenience script to perform the following actions:
#   1. ssh into the server
#   2. cd into the current folder (from the vm side)
#   2. download WordPress core using `$ wp core download`

# Specify which WordPress version to download
version="5.7.2"

download_cmd="wp core download --skip-content --version=\"${version}\""
