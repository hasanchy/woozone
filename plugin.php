<?php
/*
Plugin Name:	 		WZone - WooCommerce Amazon Affiliates
Plugin URI: 			http://codecanyon.net/item/woocommerce-amazon-affiliates-wordpress-plugin/3057503
Description: 			Choose from over a million products & earn advertising fees from the 1’st internet retailer online! You can earn up to 10% advertising fees from the 1’st trusted e-commerce leader with minimal effort. This plugin allows you to import unlimited number of products directly from Amazon right into your Wordpress WooCommerce Store! EnjoY!
Version: 				15.2.0
Author: 				AA-Team
Author URI: 			http://codecanyon.net/user/AA-Team/portfolio
Text Domain: 	    	woozone
WC requires at least: 	4.0.0
WC tested up to: 		5.0.0
*/
! defined( 'ABSPATH' ) and exit;

define('WOOZONE_VERSION', '15.2.0');

if ( ! defined('WOOZONE_PLUGIN_FILE') ) {
	define('WOOZONE_PLUGIN_FILE', __FILE__);
}
if ( ! defined('WOOZONE_ABSPATH') ) {
	define('WOOZONE_ABSPATH', dirname( WOOZONE_PLUGIN_FILE ) . '/');
}
if ( ! defined('WOOZONE_PLUGIN_BASENAME') ) {
	define('WOOZONE_PLUGIN_BASENAME', plugin_basename( WOOZONE_PLUGIN_FILE ));
}

$plugin_path = dirname(__FILE__) . '/';

if (!class_exists('WooZone')) {
    require_once($plugin_path . 'aa-framework/framework.class.php');
}

add_action('plugins_loaded', function () {

	load_plugin_textdomain(
		'woozone',
		false,
		dirname(plugin_basename(__FILE__)) . '/languages/'
	);

	global $WooZone;

	if (!isset($WooZone)) {
		$WooZone = new WooZone();
	}

}, 10);
