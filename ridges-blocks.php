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
  register_block_type( __DIR__ . '/build/tabs' );
	register_block_type( __DIR__ . '/build/home-hero' );
	register_block_type( __DIR__ . '/build/hero' );
	register_block_type( __DIR__ . '/build/focus-area-hero' );	
	register_block_type( __DIR__ . '/build/grid' );
	register_block_type( __DIR__ . '/build/grid-weighted' );
	register_block_type( __DIR__ . '/build/full-bleed-photo-banner' );
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/resource-preview' );
	register_block_type( __DIR__ . '/build/hike-preview' );
	register_block_type( __DIR__ . '/build/heading-with-button' );
	register_block_type( __DIR__ . '/build/text-with-icon' );
  // register_block_type( __DIR__ . '/build/tabs' );
  register_block_type( __DIR__ . '/build/hours-list', [
    'render_callback' => 'ridges_hours_render'
  ]);
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

function ridges_hours_render($attr, $content) {
    return '<div class="wp-block-ridges-hours-list">
        <dl class="">
          <dt class="sunday">Sunday</dt>
          <dd class="sunday">' . get_theme_mod('sunday_hours') . '</dd>
          <dt class="monday">Monday</dt>
          <dd class="monday">' . get_theme_mod('monday_hours') . '</dd>
          <dt class="tuesday">Tuesday</dt>
          <dd class="tuesday">' . get_theme_mod('tuesday_hours') . '</dd>
          <dt class="wednesday">Wednesday</dt>
          <dd class="wednesday">' . get_theme_mod('wednesday_hours') . '</dd>
          <dt class="thursday">Thursday</dt>
          <dd class="thursday">' . get_theme_mod('thursday_hours') . '</dd>
          <dt class="friday">Friday</dt>
          <dd class="friday">' . get_theme_mod('friday_hours') . '</dd>
          <dt class="saturday">Saturday</dt>
          <dd class="saturday">' . get_theme_mod('saturday_hours') . '</dd>
        </dl>
      </div>';
}  
