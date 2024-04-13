<?php
/**
 * Plugin Name:       Ridges Blocks
 * Description:       Custom native blocks developed for the Ridges Sanctuary website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Other Things
 * Author URI:        https://otherthin.gs/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ridges-blocks
 *
 * @package           ridges
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ridges_ridges_blocks_block_init() {
  // register_block_type( __DIR__ . '/build/tabs' );
	register_block_type( __DIR__ . '/build/grid' );
}
add_action( 'init', 'ridges_ridges_blocks_block_init' );


/**
 * Frontend assets
 * 
 */

function ridges_blocks_front_end_assets() {
  wp_enqueue_script( 'ridges-tabs-block', plugin_dir_url( __FILE__ ) . 'assets/tabs-frontend.js' );
}
add_action( 'enqueue_block_assets', 'ridges_blocks_front_end_assets' );


// Add block category for Ridges:
add_filter( 'block_categories_all' , function( $categories ) {
	$categories[] = array(
		'slug'  => 'ridges',
		'title' => 'Ridges Sanctuary Custom Blocks',
		'icon'	=> 'block-default'
	);
	return $categories;
} ); 
