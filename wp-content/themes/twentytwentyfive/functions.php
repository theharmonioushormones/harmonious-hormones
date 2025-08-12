<?php
// Add meta tags from meta-tags.php into the <head>
function hh_add_meta_tags() {
    include get_template_directory() . '/meta-tags.php';
}
add_action('wp_head', 'hh_add_meta_tags');
