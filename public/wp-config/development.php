<?php

/**
 * The name of the database for WordPress.
 * @var string
 */
define('DB_NAME', 'insert_db_name_here');

/**
 * The MySQL database username.
 * @var string
 */
define('DB_USER', 'ux');

/**
 * The MySQL database password.
 * @var string
 */
define('DB_PASSWORD', 'ffs12345');

/**
 * The MySQL hostname.
 * @var string
 */
define('DB_HOST', '192.168.0.61');

/**
 * The database charset to use in creating database tables.
 * @var string
 */
define('DB_CHARSET', 'utf8');

/**
 * The database collate type. Don't change this if in doubt.
 * @var string
 */
define('DB_COLLATE', '');

/**
 * Authentication unique keys and salts. You can generate these at
 * https://api.wordpress.org/secret-key/1.1/salt/
 * @var string
 */
define('AUTH_KEY',         'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('SECURE_AUTH_KEY',  'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('LOGGED_IN_KEY',    'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('NONCE_KEY',        'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('AUTH_SALT',        'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('SECURE_AUTH_SALT', 'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('LOGGED_IN_SALT',   'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');
define('NONCE_SALT',       'dont_change_this_salt_because_all_devs_need_to_be_equally_salty');

/**
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/**
 * The WordPress database table prefix.
 * @var string
 */
$table_prefix = 'wp_';
