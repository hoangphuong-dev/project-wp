<?php
/**
 * Function describe for envo magazine boxed
 * 
 * @package envo-magazine-boxed
 */


add_action( 'wp_enqueue_scripts', 'envo_magazine_boxed_enqueue_styles' );
function envo_magazine_boxed_enqueue_styles() {

    $parent_style = 'envo-magazine-stylesheet';

        wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css', array( 'bootstrap' ));
        wp_enqueue_style('envo-magazine-boxed-style',
                get_stylesheet_directory_uri() . '/style.css',
                array($parent_style),
                wp_get_theme()->get('Version')
        );


}

add_action( 'wp_body_open', 'envo_magazine_boxed_generate_head_tag', 1);

function envo_magazine_boxed_generate_head_tag() {
	?>
	<div class="envo-magazine-boxed">
	<?php
}

add_action( 'wp_footer', 'envo_magazine_boxed_generate_footer_tag', 999);

function envo_magazine_boxed_generate_footer_tag() {
	?>
	</div>
	<?php
}


