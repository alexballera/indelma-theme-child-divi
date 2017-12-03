<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'c1indelmaprod');

/** MySQL database username */
define('DB_USER', 'c1indelmadev');

/** MySQL database password */
define('DB_PASSWORD', 'XcQnD7XX4rwx');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fZ;6_O9({x9V^lkdY@2]8#u-M?,7]SEnib45@V0TR?8u/-)eTK{cXxsv#g%Bzcr7');
define('SECURE_AUTH_KEY',  '1:<QvN(QH.#cq`-G0{|ZmUt:9B0Xd8Bi_|1ORU$M$FEh;%eStITH|_7tz=g 5guj');
define('LOGGED_IN_KEY',    'tls1=)K6}_Z)*!p]G$Qr=2ZyG(q8kSe3NLhqYHd2^x`&*/MZ+dThP5(=B,Yduc-i');
define('NONCE_KEY',        'Y[1&KV3>K$dR~oeepZOIo;c-?3q!07rcE.SlU9o8!UeuZzmbzv6wK[{@bY,!hTB~');
define('AUTH_SALT',        'X+IZN21&|ZK*7#n~az)>g~nz,BrF(8^LnGTq):[oPG7GQv4NMDr$8|2Byb^.@f8y');
define('SECURE_AUTH_SALT', 'xr$Oo}Whl9+a@*|nxUgn%RIeY`#;{pQSJI|`06RNl@Jv)R9t-GNbO7iL>bT1R e*');
define('LOGGED_IN_SALT',   's~&~ep:BEb]*q,={{RL(Zv<!>vzHEMBk|Pk=2tm!H8B4d}%qk:}u@TC@T*hS&CJ:');
define('NONCE_SALT',       ';0Nbe.&^).4!taMf$sLk{Mn^wC2h.~#JAsp^F}u2D*&7gwzv2l:?KPKU&|[|CYW$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('WP_CACHE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

