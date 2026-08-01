<?php
/*
* Define class WooZoneNoAwsSyncWidget
* Make sure you skip down to the end of this file, as there are a few
* lines of code that are very important.
*/
!defined('ABSPATH') and exit;

if (class_exists('WooZoneNoAwsSyncWidget') != true) { class WooZoneNoAwsSyncWidget {

	const VERSION = '1.0';

	static protected $_instance;

	private $the_plugin = null;
	private $alias = '';

	private $module_folder = '';
	private $module = '';

	protected $amz_settings;
	protected $sync_settings = array();
	protected $sync_tables = array();

	private $syncObj = null;



	// Required __construct() function that initalizes the AA-Team Framework
	public function __construct()
	{
		global $WooZone;

		$this->the_plugin = $WooZone;
		$this->alias = $this->the_plugin->alias;

		$this->module_folder = $this->the_plugin->cfg['paths']['plugin_dir_url'] . 'modules/noaws_sync_widget/';
		$this->module = $this->the_plugin->cfg['modules']['noaws_sync_widget'];

		$this->amz_settings = $this->the_plugin->settings();

		if ( $this->the_plugin->is_admin ) {
			add_action('admin_menu', array( $this, 'adminMenu' ));
		}

		add_action( 'wp_ajax_WooZoneNoAWS_SyncWidget', array( $this, 'ajax_request' ) );
	}

	// Singleton pattern
	static public function getInstance()
	{
		if (!self::$_instance) {
			self::$_instance = new self;
		}

		return self::$_instance;
	}



	//====================================================================================
	//== AJAX REQUEST
	//====================================================================================

	public function ajax_request() {

		if( !current_user_can('administrator') ){
			die( __( "Only administrator can update this option!", "WooZone" ));
		}
		
		if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'woozone_admin')) {
			wp_send_json_error(['message' => 'Invalid nonce.']);
			wp_die();
		}
		
		$requestData = array(
			'action' 	=> isset($_REQUEST['sub_action']) ? (string) $_REQUEST['sub_action'] : '',
			'bulk_id' 	=> isset($_REQUEST['bulk_id']) ? (int) $_REQUEST['bulk_id'] : 0,
		);
		extract($requestData);
		//var_dump('<pre>', $requestData , '</pre>'); echo __FILE__ . ":" . __LINE__;die . PHP_EOL;

		$ret = array(
			'status' => 'invalid',
			'msg' => 'Invalid action!',
		);

		if ( empty($action) || !in_array($action, array(
			'default',
			'sync_bulk',
			'reset_sync_stats',
			'cronjob_stats_mainstats',
		)) ) {
			die(json_encode($ret));
		}

		//:: actions
		switch ( $action ) {

			case 'default':
				$ret = array_replace_recursive( $ret, array(
					'status' => 'valid',
					'msg' => 'this is a default action!',
				));
				break;

			case 'sync_bulk':

				$opSyncBulk = $this->sync_bulk( $bulk_id );
				$ret = array_replace_recursive( $ret, $opSyncBulk );
				break;

			case 'reset_sync_stats':

				$what = isset($_REQUEST['what']) ? $_REQUEST['what'] : '';

				$opResetSyncStats = $this->reset_sync_stats( $what );
				$ret = array_replace_recursive( $ret, $opResetSyncStats );
				break;

			case 'cronjob_stats_mainstats':

				$opStatus = $this->sync_stats( false );
				$ret = array_merge($ret, array(
					'status'		=> 'valid',
					'html'			=> $opStatus,
				));
				break;

		}

		die( json_encode( $ret ) );
	}



	//====================================================================================
	//== PUBLIC
	//====================================================================================

	//====================================================================================
	// HTML Interface

	// Hooks
	public function adminMenu()
	{
	   self::getInstance()
			->_registerAdminPages();

		if( isset($_GET['page']) && $_GET['page'] == $this->the_plugin->alias . "_no_aws_keys_sync_widget" ) {

			// Enqueue dev bundle in footer from webpack dev server (HTTPS)
			wp_enqueue_script(
				'WooZone/noaws_sync_widget_dev',
				'https://192.168.68.120:5173/bundle.js',
				array(),
				time(),
				true
			);
			wp_enqueue_style(
				'WooZone/noaws_sync_widget',
				$this->module_folder . 'assets/app.css'
			);
		}
	}

	// Register plug-in module admin pages and menus
	protected function _registerAdminPages()
	{
		add_submenu_page(
			$this->the_plugin->alias,
			$this->the_plugin->alias . " " . __('No AWS Keys Sync Widget', 'woozone'),
			__('No AWS Keys Sync Widget', 'woozone'),
			'manage_options',
			$this->the_plugin->alias . "_no_aws_keys_sync_widget",
			array($this, 'printBaseInterface')
		);

		require_once( $this->the_plugin->cfg['paths']['plugin_dir_path'] . '/modules/noaws_sync_widget/list.table.php' );
		$this->wp_list_table = new WooZoneNoAwsSyncWidgetList( $this->the_plugin, $this );

		return $this;
	}

	public function printBaseInterface()
	{
		global $wpdb;

		$req = array(
			'bulk_country' => isset($_GET['bulk_country']) ? $_GET['bulk_country'] : '',
			'bulk_status' => isset($_GET['bulk_status']) ? $_GET['bulk_status'] : '',
		);
		extract( $req );
?>

	<div id="<?php echo WooZone()->alias?>" class="WooZone-direct-import">

		<div id="WooZone-sync-log" class="<?php echo WooZone()->alias?>-content" style="margin: 0px;">

			<?php
			// show the top menu
			WooZoneAdminMenu::getInstance()->make_active('import|noaws_sync_widget')->show_menu();
			?>

			<!-- Content -->
			<section class="WooZone-main">

				<?php
				echo WooZone()->print_section_header(
					$this->module['noaws_sync_widget']['menu']['title'],
					$this->module['noaws_sync_widget']['description'],
					$this->module['noaws_sync_widget']['help']['url']
				);
				?>
				<div id="<?php echo WooZone()->alias?>-SyncWidget-wrapper">

					<div id="root" method="get">
    					dsda
					</div>
				</div>
			</section>
		</div>
	</div>

<?php
	}

} } // end class

// Initialize the WooZoneNoAwsSyncWidget class
$WooZoneNoAwsSyncWidget = WooZoneNoAwsSyncWidget::getInstance();
