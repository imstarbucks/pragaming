<?php
/**
 * The base configuration for WordPress.
 *
 * WARNING: This is a non-standard wp-config.php file. It is DIFFERENT from the
 * standard file provided by a typical WordPress installation. Replace this
 * file with the standard wp-config.php to revert back to standard behaviour.
 *
 * It has been modified to load configuration values in the `wp-config/`
 * directory in the following order (from highest to lowest priority):
 *
 *   1. wp-config/production.php
 *   2. wp-config/local.php
 *   3. wp-config/development.php
 *
 * @author FOREFRONT International <support@forefront.com.my>
 */


/**
 * Define an array of config files to lookup.
 * @var string[]
 */
$ff_config_lookup_hierarchy = array(
  dirname(__FILE__) . '/wp-config/production.php',
  dirname(__FILE__) . '/wp-config/local.php',
  dirname(__FILE__) . '/wp-config/development.php',
);

// Load the first wp-config file in the lookup hierarchy.
$ff_has_config = false;
foreach ($ff_config_lookup_hierarchy as $ff_config) {
  if (file_exists($ff_config)) {
    include $ff_config;
    $ff_has_config = true;
    break;
  }
}

if (!$ff_has_config) {
  ?>
    <div style="margin: 0 auto; max-width: 480px;">
      <h1>Fatal Error!</h1>
      <p><strong>No active wp-config file found in the <code>wp-config/</code> directory.</strong></p>
      <hr>
      <p>Please have atleast one of the following file(s).</p>
      <ul>
        <li><strong>wp-config/production.php</strong>; or</li>
        <li><strong>wp-config/local.php</strong>; or</li>
        <li><strong>wp-config/development.php</strong></li>
      </ul>
    </div>
  <?php
  die();
}

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') ) {
  define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
