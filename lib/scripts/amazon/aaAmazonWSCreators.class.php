<?php
/**
 * Main class for handling Amazon Creators API requests.
 */
! defined( 'ABSPATH' ) and exit;
if ( !defined('WOOZONE_ABSPATH') ) {
	define('WOOZONE_ABSPATH', dirname( __FILE__ ) . '/../../../');
}
require_once( WOOZONE_ABSPATH . 'composer/amazon-paapi/paapi5-php-sdk/vendor/autoload.php' );

if ( class_exists('aaAmazonWSCreators') != true ) {
class aaAmazonWSCreators
{
	/*
	 * Some required plugin information
	 */
	const VERSION = '1.0';

	/*
	 * Store some helpers config             
	 */
	public $the_plugin = null;
	private $settings = array();
	private $credentialId = '';
	private $credentialSecret = '';
	private $credentialVersion = '';
	private $country = 'com';
	private $marketplace = 'US';

	private $api_endpoint = 'https://creatorsapi.amazon/catalog/v1';
	private $token_endpoint = ''; // Set dynamically in getAccessToken

	public $requestConfig = array();
	public $responseConfig = array();

	private $last_request = array();
	private $last_response = array();

	/*
	 * Required __construct() function
	 */
	public function __construct( $accessKey=null, $secretKey=null, $country=null, $associateTag='' )
	{
		if ( is_object($accessKey) || is_array($accessKey) ) {
			// Called with ( $the_plugin, $pms )
			$this->the_plugin = $accessKey;
			$pms = $secretKey;
			$this->settings = isset($pms['settings']) ? $pms['settings'] : array();

			$this->credentialId = isset($this->settings['amz_credential_id']) ? $this->settings['amz_credential_id'] : '';
			$this->credentialSecret = isset($this->settings['amz_credential_secret']) ? $this->settings['amz_credential_secret'] : '';
			$this->credentialVersion = isset($this->settings['amz_credential_version']) ? $this->settings['amz_credential_version'] : '';

			$this->country = isset($pms['params_new']['country']) ? $pms['params_new']['country'] : (isset($this->settings['country']) ? $this->settings['country'] : 'com');
		} else {
			// Called with ( $accessKey, $secretKey, $country, $associateTag )
			$this->credentialId = $accessKey;
			$this->credentialSecret = $secretKey;
			$this->country = $country;
			$this->settings['main_aff_id'] = $associateTag;
		}
		$this->marketplace = $this->getMarketplaceFromCountry($this->country);
	}

	public function init( $pms=array() )
	{
		$pms = array_replace_recursive(array(
			'accessKey' 		=> null,
			'secretKey' 		=> null,
			'country' 			=> null,
			'associateTag' 		=> null,
		), $pms);

		if ($pms['accessKey']) $this->credentialId = $pms['accessKey'];
		if ($pms['secretKey']) $this->credentialSecret = $pms['secretKey'];
		if ($pms['country']) $this->country = $pms['country'];
		if ($pms['associateTag']) $this->settings['main_aff_id'] = $pms['associateTag'];

		if ($this->country) {
			$this->marketplace = $this->getMarketplaceFromCountry($this->country);
		}
		return $this;
	}

	public function getcfg()
	{
		$params = $this->requestConfig;
		if (isset($params['optionalParameters'])) {
			$params = array_replace_recursive($params, $params['optionalParameters']);
			unset($params['optionalParameters']);
		}

		$ret = array(
			'apiversion' 		=> 'creatorsapi',
			'requestConfig' 	=> $params,
			'responseConfig' 	=> array(),
			'last_request'      => $this->last_request,
			'last_response'     => $this->last_response,
		);
		return $ret;
	}

	public function initRequestConfig()
	{
		$this->requestConfig = array(
			'optionalParameters'	=> array()
		);
		return $this;
	}

	public function setCategory($category=null)
	{
		if (null === $category) return isset($this->requestConfig['SearchIndex']) ? $this->requestConfig['SearchIndex'] : null;
		$this->requestConfig['SearchIndex'] = $category;
		return $this;
	}

	public function setKeywords($keywords=null)
	{
		if (null === $keywords) return isset($this->requestConfig['Keywords']) ? $this->requestConfig['Keywords'] : null;
		$this->requestConfig['Keywords'] = $keywords;
		return $this;
	}

	public function setOptionalParameters($params=null)
	{
		if (null === $params) return $this->requestConfig['optionalParameters'];
		$this->requestConfig['optionalParameters'] = array_merge($this->requestConfig['optionalParameters'], (array)$params);
		return $this;
	}

	public function setPage($page=null)
	{
		if (null === $page) return isset($this->requestConfig['optionalParameters']['ItemPage']) ? $this->requestConfig['optionalParameters']['ItemPage'] : null;
		$this->requestConfig['optionalParameters']['ItemPage'] = $page;
		return $this;
	}

	public function setItemIds($itemid=null)
	{
		if (null === $itemid) return isset($this->requestConfig['ItemIds']) ? $this->requestConfig['ItemIds'] : null;
		$this->requestConfig['ItemIds'] = (array)$itemid;
		return $this;
	}

	public function setBrowseNodeIds($nodeid=null)
	{
		if (null === $nodeid) return isset($this->requestConfig['BrowseNodeIds']) ? $this->requestConfig['BrowseNodeIds'] : null;
		$this->requestConfig['BrowseNodeIds'] = (array)$nodeid;
		return $this;
	}

	public function setAsin($asin=null)
	{
		if (null === $asin) return isset($this->requestConfig['ASIN']) ? $this->requestConfig['ASIN'] : null;
		$this->requestConfig['ASIN'] = $asin;
		return $this;
	}

	public function setVariationsPage($page=null)
	{
		if (null === $page) return isset($this->requestConfig['optionalParameters']['VariationPage']) ? $this->requestConfig['optionalParameters']['VariationPage'] : null;
		$this->requestConfig['optionalParameters']['VariationPage'] = $page;
		return $this;
	}

	public function setResponseGroup($responseGroup=null) { return $this; } // Mocked

	public function set_the_plugin( $the_plugin=array(), $settings=array() )
	{
		$this->the_plugin = $the_plugin;

		if ( !empty($this->the_plugin) && !empty($this->the_plugin->amz_settings) ) {
			$this->settings = $this->the_plugin->amz_settings;
		} else {
			$this->settings = $settings;
		}
		$this->settings = !empty($this->settings) && is_array($this->settings) ? $this->settings : array();

		$this->credentialId = isset($this->settings['amz_credential_id']) ? $this->settings['amz_credential_id'] : $this->credentialId;
		$this->credentialSecret = isset($this->settings['amz_credential_secret']) ? $this->settings['amz_credential_secret'] : $this->credentialSecret;
		$this->credentialVersion = isset($this->settings['amz_credential_version']) ? $this->settings['amz_credential_version'] : $this->credentialVersion;
		
		$this->country = isset($this->settings['country']) ? $this->settings['country'] : $this->country;
		$this->marketplace = $this->getMarketplaceFromCountry($this->country);
	}

	private function getMarketplaceFromCountry($country)
	{
		$map = array(
			'com' => 'US',
			'co.uk' => 'UK',
			'de' => 'DE',
			'fr' => 'FR',
			'es' => 'ES',
			'it' => 'IT',
			'ca' => 'CA',
			'co.jp' => 'JP',
			'in' => 'IN',
			'com.br' => 'BR',
			'com.mx' => 'MX',
			'com.au' => 'AU',
		);
		return isset($map[$country]) ? $map[$country] : 'US';
	}

	private function getMarketplaceDomain($country)
	{
		$map = array(
			'com' => 'www.amazon.com',
			'co.uk' => 'www.amazon.co.uk',
			'de' => 'www.amazon.de',
			'fr' => 'www.amazon.fr',
			'es' => 'www.amazon.es',
			'it' => 'www.amazon.it',
			'ca' => 'www.amazon.ca',
			'co.jp' => 'www.amazon.co.jp',
			'in' => 'www.amazon.in',
			'com.br' => 'www.amazon.com.br',
			'com.mx' => 'www.amazon.com.mx',
			'com.au' => 'www.amazon.com.au',
		);
		return isset($map[$country]) ? $map[$country] : 'www.amazon.com';
	}

	private function getPartnerTag()
	{
		$tag = isset($this->settings['main_aff_id']) ? $this->settings['main_aff_id'] : '';
		if (isset($this->settings['AffiliateID']) && is_array($this->settings['AffiliateID'])) {
			if (isset($this->settings['AffiliateID'][$this->country])) {
				$tag = $this->settings['AffiliateID'][$this->country];
			} else if (isset($this->settings['AffiliateID'][$tag])) {
				$tag = $this->settings['AffiliateID'][$tag];
			}
		}
		return $tag;
	}

	public function getAccessToken()
	{
		$transient_key = 'woozone_creators_api_token_' . md5($this->credentialId . $this->credentialSecret . $this->country . $this->credentialVersion);
		$token = get_transient($transient_key);

		if ($token) {
			return $token;
		}

		$is_v3 = (stripos($this->credentialVersion, 'v3') !== false);
		$token_endpoint = $this->getTokenEndpoint($is_v3);
		
		$client = new \WooZoneVendor\GuzzleHttp\Client();
		try {
			$params = [
				'grant_type' => 'client_credentials',
				'client_id' => $this->credentialId,
				'client_secret' => $this->credentialSecret,
			];

			if ($is_v3) {
				$params['scope'] = 'creatorsapi::default';
				$requestOptions = [
					'json' => $params,
					'headers' => [
						'Accept' => 'application/json',
						'Content-Type' => 'application/json'
					]
				];
			} else {
				$params['scope'] = 'creatorsapi/default';
				$requestOptions = [
					'form_params' => $params,
					'headers' => [
						'Accept' => 'application/json',
						'Content-Type' => 'application/x-www-form-urlencoded'
					]
				];
			}

			// Debug: log the endpoint and parameters (masking secret)
			error_log('WooZone Creators API trying auth at: ' . $token_endpoint);

			$this->last_request = array(
				'url' => $token_endpoint,
				'method' => 'POST',
				'options' => $requestOptions
			);

			/*==============================*/

			$response = wp_remote_post(
				$token_endpoint,
				array(
					'headers' => array(
						'Content-Type' => 'application/x-www-form-urlencoded',
					),
					'body'    => http_build_query(
						array(
							'grant_type'    => 'client_credentials',
							'client_id'     => $this->credentialId,
							'client_secret' => $this->credentialSecret,
							'scope'         => 'creatorsapi::default',
						)
					),
					'timeout' => 30,
				)
			);

			if ( is_wp_error( $response ) ) {
				throw new \Exception( \esc_html( $response->get_error_message() ) );
			}

			$body          = json_decode( wp_remote_retrieve_body( $response ), true );
			$response_code = wp_remote_retrieve_response_code( $response );

			// var_dump( $body );
			// exit;
			if ( $response_code !== 200 ) {
				if ( isset( $body['error_description'] ) ) {
					if ( strpos( $body['error_description'], 'invalid_client_secret' ) !== false ) {
						$message = \esc_html__( 'Invalid Client Secret provided', 'auto-amazon-affiliate-for-woocommerce' );
					} elseif ( strpos( $body['error'], 'invalid_client' ) !== false ) {
						$message = \esc_html__( 'The Client ID is invalid, or the selected Creators API version does not match your credentials.', 'auto-amazon-affiliate-for-woocommerce' );
					} else {
						$message = \esc_html( $body['error_description'] );
					}
				} elseif ( isset( $body['error'] ) && strpos( $body['error'], 'invalid_client' ) !== false ) {
					$message = \esc_html__( 'The Client ID is invalid, or the selected Amazon country does not match your API credentials.', 'auto-amazon-affiliate-for-woocommerce' );
				} else {
					$message = isset( $body['error'] ) ? \esc_html( $body['error'] ) : \esc_html__( 'An error occurred while fetching access token', 'auto-amazon-affiliate-for-woocommerce' );
				}

				throw new \Exception( \esc_html__( 'Verification failed: ', 'auto-amazon-affiliate-for-woocommerce' ) . \esc_html( $message ), \esc_html( $response_code ) );
			}
			/*==============================*/



			// $response = $client->post($token_endpoint, $requestOptions);
			// $body_raw = (string)$response->getBody();
			// $this->last_response = $body_raw;
			
			// $body = json_decode($body_raw, true);
			
			if (isset($body['access_token']) || isset($body['accessToken'])) {
				$token = isset($body['access_token']) ? $body['access_token'] : $body['accessToken'];
				$expires_in = isset($body['expires_in']) ? (int)$body['expires_in'] : (isset($body['expiresIn']) ? (int)$body['expiresIn'] : 3600);
				set_transient($transient_key, $token, $expires_in - 60);
				return $token;
			}
		} catch (\WooZoneVendor\GuzzleHttp\Exception\RequestException $e) {
			$error_msg = 'WooZone Creators API Auth Error: ';
			if ($e->hasResponse()) {
				$resp_body = (string)$e->getResponse()->getBody();
				$this->last_response = $resp_body;
				$error_msg .= $resp_body;
			} else {
				$error_msg .= $e->getMessage();
				$this->last_response = $e->getMessage();
			}
			error_log($error_msg);
			return null;
		} catch (\Exception $e) {
			$this->last_response = $e->getMessage();
			error_log('WooZone Creators API Auth General Error: ' . $e->getMessage());
			return null;
		}

		return null;
	}

	private function getTokenEndpoint($is_v3 = true)
	{
		$region_map = [
			'US' => 'NA', 'CA' => 'NA', 'MX' => 'NA', 'BR' => 'NA',
			'UK' => 'EU', 'DE' => 'EU', 'FR' => 'EU', 'IT' => 'EU', 'ES' => 'EU', 'SE' => 'EU', 'PL' => 'EU', 'NL' => 'EU', 'TR' => 'EU', 'BE' => 'EU',
			'JP' => 'FE', 'SG' => 'FE', 'AU' => 'FE'
		];
		$region = isset($region_map[$this->marketplace]) ? $region_map[$this->marketplace] : 'NA';

		if ($is_v3) {
			$endpoints = [
				'NA' => 'https://api.amazon.com/auth/o2/token',
				'EU' => 'https://api.amazon.co.uk/auth/o2/token',
				'FE' => 'https://api.amazon.co.jp/auth/o2/token'
			];
		} else {
			$endpoints = [
				'NA' => 'https://creatorsapi.auth.us-east-1.amazoncognito.com/oauth2/token',
				'EU' => 'https://creatorsapi.auth.eu-south-2.amazoncognito.com/oauth2/token',
				'FE' => 'https://creatorsapi.auth.us-west-2.amazoncognito.com/oauth2/token'
			];
		}

		return isset($endpoints[$region]) ? $endpoints[$region] : $endpoints['NA'];
	}

	public function makeRequest($endpoint, $data = array(), $method = 'POST')
	{
		$accessToken = $this->getAccessToken();

		$payload = array(
			'keywords'     => $data['keywords'],
			'marketplace'  => $data['marketplace'],
			'partnerTag'   => $data['partnerTag'],
			'itemCount'    => 10,
			'itemPage'     => 1,
			'sortBy'       => 'Relevance',
			'condition'    => 'Any',
			'searchIndex'  => 'All',
			'availability' => 'Available',
			'resources'    => array(
				'images.primary.highRes',
				'images.primary.large',
				'images.variants.highRes',
				'images.variants.large',
				'itemInfo.byLineInfo',
				'itemInfo.classifications',
				'itemInfo.contentInfo',
				'itemInfo.contentRating',
				'itemInfo.externalIds',
				'itemInfo.features',
				'itemInfo.manufactureInfo',
				'itemInfo.productInfo',
				'itemInfo.technicalInfo',
				'itemInfo.title',
				'itemInfo.tradeInInfo',
				'offersV2.listings.availability',
				'offersV2.listings.condition',
				'offersV2.listings.dealDetails',
				'offersV2.listings.isBuyBoxWinner',
				'offersV2.listings.loyaltyPoints',
				'offersV2.listings.merchantInfo',
				'offersV2.listings.price',
				'offersV2.listings.type',
				'browseNodeInfo.browseNodes'
			),
		);

		$response = wp_remote_post(
			'https://creatorsapi.amazon/catalog/v1/searchItems',
			array(
				'headers' => array(
					'Content-Type'  => 'application/json',
					'x-marketplace' => 'www.amazon.com',
					'Authorization' => "Bearer {$accessToken}, Version 3.1",
				),
				'body'    => wp_json_encode( $payload ),
				'timeout' => 30,
			)
		);

		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();

			if ( stripos( $error_message, 'Operation timed out' ) !== false ) {
				$error_message = \esc_html__( 'The Creators API request timed out before a response was received. This usually happens due to a slow network connection, temporary server issues, or high response time from the API provider. Please try again in a moment.', 'auto-amazon-affiliate-for-woocommerce' );
			}

			throw new \Exception( \esc_html__( 'Creators API request failed: ', 'auto-amazon-affiliate-for-woocommerce' ) . \esc_html( $error_message ) );
		}

		$body_raw      = wp_remote_retrieve_body( $response );
		$response_code = wp_remote_retrieve_response_code( $response );
		$body = json_decode($body_raw, true);

		// print_r($body_raw); // Debugging line to inspect the response body
		// exit;

		if ( $response_code !== 200 ) {
			$message = isset( $body['message'] ) ? \esc_html( $body['message'] ) : \esc_html__( 'Failed to fetch product data from Amazon Creators API.', 'auto-amazon-affiliate-for-woocommerce' );

			throw new \Exception( \esc_html( $message ), \esc_html( $response_code ) );
		}

		return $body;

		/*$is_v2 = (empty($this->credentialVersion) || stripos($this->credentialVersion, 'v3') === false);
		
		$partnerTag = isset($this->settings['main_aff_id']) ? $this->settings['main_aff_id'] : '';
		
		// Map partnerTag from AffiliateID list based on the marketplace key
		if (isset($this->settings['AffiliateID']) && is_array($this->settings['AffiliateID'])) {
			if (isset($this->settings['AffiliateID'][$this->country])) {
				$partnerTag = $this->settings['AffiliateID'][$this->country];
			} else if (isset($this->settings['AffiliateID'][$partnerTag])) {
				// Sometimes main_aff_id is used as a key into the AffiliateID array
				$partnerTag = $this->settings['AffiliateID'][$partnerTag];
			}
		}
		
		if ($partnerTag === 'com') {
			return array(
				'status' => 'invalid',
				'msg' => 'Invalid Associate Tag (partnerTag) detected. "com" is not a valid tag. Please check your WooZone Amazon Settings.',
				'amz_code' => 'InvalidPartnerTag',
				'nb_amz_req' => 1,
				'last_request' => array('partnerTag' => $partnerTag),
				'last_response' => 'The partnerTag must be a valid Store ID (e.g., yourname-20).'
			);
		}

		if (!$token) {
			return array(
				'status' => 'invalid',
				'msg' => 'Could not obtain access token.',
				'amz_code' => 'AuthError',
				'nb_amz_req' => 1,
				'last_request' => $this->last_request,
				'last_response' => $this->last_response
			);
		}

		$client = new \WooZoneVendor\GuzzleHttp\Client();
		try {
			$options = [
				'headers' => [
					'Authorization' => 'Bearer ' . $token . ($is_v2 ? ', Version 2.1' : ''),
					'x-marketplace' => $this->getMarketplaceDomain($this->country),
					'Accept' => 'application/json',
					'Content-Type' => 'application/json',
				]
			];

			if ($method === 'POST') {
				$options['json'] = $data;
			} else {
				$options['query'] = $data;
			}

			error_log('WooZone Creators API Outgoing Request: ' . json_encode($options));
			$this->last_request = array(
				'url' => $this->api_endpoint . $endpoint,
				'method' => $method,
				'options' => $options
			);

			$response = $client->request($method, $this->api_endpoint . $endpoint, $options);
			$body_raw = (string)$response->getBody();
			$this->last_response = $body_raw;
			
			error_log('WooZone Creators API Raw Response: ' . $body_raw);
			$body = json_decode($body_raw, true);

			// var_dump('<pre>', $this->last_request, $body, '</pre>'); die . PHP_EOL;

			return $body;
		} catch (\WooZoneVendor\GuzzleHttp\Exception\RequestException $e) {
			$msg = $e->getMessage();
			$amz_code = 'ApiError';
			if ($e->hasResponse()) {
				$resp_body = (string)$e->getResponse()->getBody();
				$this->last_response = $resp_body;
				$resp = json_decode($resp_body, true);
				if (isset($resp['errors'][0])) {
					$msg = $resp['errors'][0]['message'];
					$amz_code = $resp['errors'][0]['code'];
				}
			} else {
				$this->last_response = $e->getMessage();
			}
			return array(
				'status' => 'invalid',
				'msg' => $msg,
				'amz_code' => $amz_code,
				'nb_amz_req' => 1,
				'last_request' => $this->last_request,
				'last_response' => $this->last_response
			);
		} catch (\Exception $e) {
			return array(
				'status' => 'invalid',
				'msg' => $e->getMessage(),
				'amz_code' => 'UnknownError',
				'nb_amz_req' => 1,
				'last_request' => $this->last_request,
				'last_response' => $e->getMessage()
			);
		}*/
	}

	// Mocking PA-API 5.0 search method
	public function search($pms=array())
	{
		$therequest = array_replace_recursive($this->requestConfig, (array)$pms);
		if (isset($therequest['optionalParameters'])) {
			$therequest = array_replace_recursive($therequest, $therequest['optionalParameters']);
			unset($therequest['optionalParameters']);
		}
		$this->requestConfig = $therequest;
		
		// Map PA-API 5.0 Request to Creators API request
		$data = array(
			'partnerTag' => $this->getPartnerTag(),
			'partnerType' => 'Associates',
			'marketplace' => $this->getMarketplaceDomain($this->country),
			'keywords' => isset($therequest['Keywords']) ? $therequest['Keywords'] : '',
			'searchIndex' => isset($therequest['SearchIndex']) ? $therequest['SearchIndex'] : 'All',
			'itemCount' => 10,
			'resources' => array(
				'itemInfo.title',
				'itemInfo.features',
				'itemInfo.byLineInfo',
				'itemInfo.classifications',
				'images.primary.large',
				'images.primary.small',
				'images.variants.large',
				'offersV2.listings.price',
				'browseNodeInfo.browseNodes'
			)
		);

		if (isset($therequest['ItemPage'])) {
			$data['itemPage'] = (int)$therequest['ItemPage'];
		}

		if (isset($therequest['MinPrice'])) {
			$data['minPrice'] = (float)($therequest['MinPrice'] / 100);
		}
		if (isset($therequest['MaxPrice'])) {
			$data['maxPrice'] = (float)($therequest['MaxPrice'] / 100);
		}
		if (isset($therequest['Condition'])) {
			$data['condition'] = $therequest['Condition'];
		}
		if (isset($therequest['BrowseNodeId'])) {
			$data['browseNodeId'] = $therequest['BrowseNodeId'];
		}
		if (isset($therequest['Sort'])) {
			$sortMap = array(
				'Price:HighToLow' => 'PriceHighToLow',
				'Price:LowToHigh' => 'PriceLowToHigh',
			);
			$data['sortBy'] = isset($sortMap[$therequest['Sort']]) ? $sortMap[$therequest['Sort']] : $therequest['Sort'];
		}

		$response = $this->makeRequest('/searchItems', $data);

		return $this->requestResponseParse('SearchItems', $response['searchResult']);
	}

	public function lookup($pms=array())
	{
		$therequest = array_replace_recursive($this->requestConfig, (array)$pms);
		if (isset($therequest['optionalParameters'])) {
			$therequest = array_replace_recursive($therequest, $therequest['optionalParameters']);
			unset($therequest['optionalParameters']);
		}
		$this->requestConfig = $therequest;

		$itemIds = isset($therequest['ItemIds']) ? $therequest['ItemIds'] : (isset($therequest['ItemId']) ? $therequest['ItemId'] : array());

		$data = array(
			'partnerTag' => $this->getPartnerTag(),
			'partnerType' => 'Associates',
			'marketplace' => $this->getMarketplaceDomain($this->country),
			'itemIds' => is_array($itemIds) ? $itemIds : explode(',', $itemIds),
			'resources' => array(
				'itemInfo.title',
				'itemInfo.features',
				'itemInfo.byLineInfo',
				'itemInfo.classifications',
				'images.primary.large',
				'images.primary.small',
				'images.variants.large',
				'offersV2.listings.price',
				'browseNodeInfo.browseNodes'
			)
		);

		$response = $this->makeRequest('/getItems', $data);
		return $this->requestResponseParse('GetItems', $response);
	}

	public function getVariations($pms=array())
	{
		$therequest = array_replace_recursive($this->requestConfig, (array)$pms);
		if (isset($therequest['optionalParameters'])) {
			$therequest = array_replace_recursive($therequest, $therequest['optionalParameters']);
			unset($therequest['optionalParameters']);
		}
		$this->requestConfig = $therequest;

		$data = array(
			'partnerTag' => $this->getPartnerTag(),
			'partnerType' => 'Associates',
			'marketplace' => $this->getMarketplaceDomain($this->country),
			'asin' => isset($therequest['ASIN']) ? $therequest['ASIN'] : '',
			'resources' => array(
				'itemInfo.title',
				'itemInfo.features',
				'itemInfo.byLineInfo',
				'itemInfo.classifications',
				'images.primary.large',
				'images.primary.small',
				'images.variants.large',
				'offersV2.listings.price',
				'browseNodeInfo.browseNodes'
			)
		);

		$response = $this->makeRequest('/getVariations', $data);
		return $this->requestResponseParse('GetVariations', $response);
	}

	public function browseNodeLookup($pms=array())
	{
		$therequest = array_replace_recursive($this->requestConfig, (array)$pms);
		if (isset($therequest['optionalParameters'])) {
			$therequest = array_replace_recursive($therequest, $therequest['optionalParameters']);
			unset($therequest['optionalParameters']);
		}
		$this->requestConfig = $therequest;

		$nodeIds = isset($therequest['BrowseNodeIds']) ? $therequest['BrowseNodeIds'] : (isset($therequest['BrowseNodeId']) ? $therequest['BrowseNodeId'] : array());

		$data = array(
			'partnerTag' => $this->getPartnerTag(),
			'partnerType' => 'Associates',
			'marketplace' => $this->getMarketplaceDomain($this->country),
			'browseNodeIds' => (array)$nodeIds,
			'resources' => array(
				'browseNodes.ancestor',
				'browseNodes.children'
			)
		);

		$response = $this->makeRequest('/getBrowseNodes', $data);
		return $this->requestResponseParse('GetBrowseNodes', $response);
	}

	public function getBrowseNodes($params) {
		return $this->browseNodeLookup($params);
	}

	public function getItems($params) {
		return $this->lookup($params);
	}

	public function searchItems($params) {
		return $this->search($params);
	}

	protected function requestResponseParse($method, $response)
	{
		if (isset($response['status']) && $response['status'] === 'invalid') {
			return $response;
		}

		$retnew = array();
		$items = array();

		switch ($method) {
			case 'SearchItems':
			case 'GetItems':
			case 'GetVariations':
				$items = isset($response['items']) ? $response['items'] : array();
				break;
			case 'GetBrowseNodes':
				$items = isset($response['browseNodes']) ? $response['browseNodes'] : array();
				break;
		}

		$newitems = array();
		foreach ($items as $item) {
			$curitem = $this->mapItem($item, $method);
			$newitems[] = $curitem;
		}

		if (count($newitems) === 1 && $method !== 'SearchItems') {
			$newitems = $newitems[0];
		}

		switch ($method) {
			case 'SearchItems':
				$retnew['Items'] = array(
					'Item' => $newitems,
					'TotalResults' => isset($response['totalResultCount']) ? $response['totalResultCount'] : count($newitems),
					'TotalPages' => isset($response['totalResultCount']) ? ceil($response['totalResultCount'] / 10) : 1,
				);
				$retnew['Items']['Request']['IsValid'] = 'True';
				break;
			case 'GetItems':
				$retnew['Items'] = array(
					'Item' => $newitems,
				);
				$retnew['Items']['Request']['IsValid'] = 'True';
				break;
			case 'GetVariations':
				$retnew['Variations'] = array(
					'Item' => $newitems,
				);
				$retnew['Variations']['Request']['IsValid'] = 'True';
				break;
			case 'GetBrowseNodes':
				$retnew['BrowseNodes'] = array(
					'BrowseNode' => $newitems,
				);
				$retnew['BrowseNodes']['Request']['IsValid'] = 'True';
				break;
		}

		$retnew['last_request'] = $this->last_request;
		$retnew['last_response'] = $this->last_response;
		$retnew['nb_amz_req'] = 1;

		return $retnew;
	}

	private function mapItem($item, $method)
	{
		if ($method === 'GetBrowseNodes') {
			return array(
				'BrowseNodeId' => isset($item['id']) ? $item['id'] : '',
				'Name' => isset($item['displayName']) ? $item['displayName'] : '',
			);
		}

		$mapped = array(
			'ASIN' => isset($item['asin']) ? $item['asin'] : '',
			'ParentASIN' => isset($item['itemInfo']['parentAsin']) ? $item['itemInfo']['parentAsin'] : '',
			'DetailPageURL' => isset($item['detailPageUrl']) ? $item['detailPageUrl'] : '',
			'ItemAttributes' => array(
				'Title' => isset($item['itemInfo']['title']['displayValue']) ? $item['itemInfo']['title']['displayValue'] : '',
				'Feature' => isset($item['itemInfo']['features']['displayValues']) ? $item['itemInfo']['features']['displayValues'] : array(),
				'Brand' => isset($item['itemInfo']['byLineInfo']['brand']['displayValue']) ? $item['itemInfo']['byLineInfo']['brand']['displayValue'] : '',
				'Manufacturer' => isset($item['itemInfo']['byLineInfo']['manufacturer']['displayValue']) ? $item['itemInfo']['byLineInfo']['manufacturer']['displayValue'] : '',
				'Binding' => isset($item['itemInfo']['classifications']['binding']['displayValue']) ? $item['itemInfo']['classifications']['binding']['displayValue'] : '',
			),
		);

		// Images
		if (isset($item['images']['primary']['large'])) {
			$mapped['LargeImage']['URL'] = $item['images']['primary']['large']['url'];
		}
		if (isset($item['images']['primary']['small'])) {
			$mapped['SmallImage']['URL'] = $item['images']['primary']['small']['url'];
		}

		// Gallery
		if (isset($item['images']['variants'])) {
			$mapped['ImageSets']['ImageSet'] = array();
			foreach ($item['images']['variants'] as $variant) {
				$mapped['ImageSets']['ImageSet'][] = array(
					'LargeImage' => array('URL' => $variant['large']['url']),
					'SmallImage' => array('URL' => $variant['small']['url']),
				);
			}
		}

		// Offers (v2)
		if (isset($item['offersV2']['listings'][0])) {
			$listing = $item['offersV2']['listings'][0];
			$amount = (float)$listing['price']['amount'];
			// Convert to minor units (multiplied by 100)
			$minorAmount = number_format($amount * 100, 2, '.', '');
			$minorAmount = number_format($minorAmount, 0, '.', '');

			$priceArr = array(
				'Amount' => $minorAmount,
				'CurrencyCode' => $listing['price']['currency'],
				'FormattedPrice' => $listing['price']['displayAmount'],
			);
			$mapped['Offers'] = array(
				'TotalOffers' => count($item['offersV2']['listings']),
				'Offer' => array(
					'OfferListing' => array(
						'Price' => $priceArr
					)
				)
			);
			$mapped['OfferSummary']['LowestNewPrice'] = $priceArr;
		}
		// Fallback for old Offers
		else if (isset($item['offers']['listings'][0])) {
			$listing = $item['offers']['listings'][0];
			$amount = (float)$listing['price']['amount'];
			// Convert to minor units (multiplied by 100)
			$minorAmount = number_format($amount * 100, 2, '.', '');
			$minorAmount = number_format($minorAmount, 0, '.', '');

			$priceArr = array(
				'Amount' => $minorAmount,
				'CurrencyCode' => $listing['price']['currency'],
				'FormattedPrice' => $listing['price']['displayAmount'],
			);
			$mapped['Offers'] = array(
				'TotalOffers' => count($item['offers']['listings']),
				'Offer' => array(
					'OfferListing' => array(
						'Price' => $priceArr
					)
				)
			);
			$mapped['OfferSummary']['LowestNewPrice'] = $priceArr;
		}

		// BrowseNodes
		if (isset($item['browseNodeInfo']['browseNodes'])) {
			$nodes = array();
			foreach ($item['browseNodeInfo']['browseNodes'] as $node) {
				$nodes[] = array(
					'BrowseNodeId' => $node['id'],
					'Name' => $node['displayName'],
				);
			}
			$mapped['BrowseNodes']['BrowseNode'] = $nodes;
		}

		return $mapped;
	}

	public function check_amazon($retType = 'die', $pms = array())
	{
		$rsp = $this->search(array('Keywords' => 'Kindle', 'ItemPage' => 1));
		$status = 'valid';
		$msg = 'Connection successful.';

		if (isset($rsp['status']) && $rsp['status'] === 'invalid') {
			$status = 'invalid';
			$msg = $rsp['msg'];
		}

		$ret = array('status' => $status, 'msg' => $msg);
		if ($retType === 'return') return $ret;
		die(json_encode($ret));
	}
}
}
