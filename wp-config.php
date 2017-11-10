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
define('DB_NAME', 'untitled_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

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
define('AUTH_KEY',         'CnAV>s0YXh(<GNU.B9@7Y2fD]fA[?Y8k;/tk[V|QI_T-c=9g|EKyu4qHSKg}06Qt');
define('SECURE_AUTH_KEY',  '(mqWLgF(#n6[9#jlQ[*wfhVy>otm?hEY,r~~Tu22f*d*7/`MIB+&B1Y3jv4e/a{0');
define('LOGGED_IN_KEY',    'MH?{zEHJ:xR4Vwtb*fP|Fsqow.Zg]x?Z:3hEHy&xWs8?dbuV9_RkHpRA|jQQ?KeK');
define('NONCE_KEY',        'n-Ln}6nS.,zfxJZ]}k)?r:Di!-^wtz? B/7h?Ug6M,_&a$-]28qb1GX@}y }pNlC');
define('AUTH_SALT',        '!T9pih>,-!oSDrFh?,itn`.+Yk:a0UBT=& i/qCK J]fL(H/hPl}fZR7=r.3}/0O');
define('SECURE_AUTH_SALT', '.?J9gK<2)|h>gn}<84(SC+fCoV^n1DFc%xW=&~Z!NF1.+V1O)zi||iY6pYVWpBoS');
define('LOGGED_IN_SALT',   ')cm=.Mlf<{>rm17MMeo<A Rh~<!9TWDH)k^eIk8:]qj.O5e~S16o;=&*>ptsyU7B');
define('NONCE_SALT',       '9bmzY+C3(q@2A!a;]|Th5cak*;:>hJ(~2VOQSeofoc6VXPt_UWAC(J9/_D{&{U?j');

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

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
