<?php
// meta-tags.php

if (is_single()) {
    global $post;
    $post_slug = $post->post_name;

    $meta_data = [
        'my-story' => [
            'title'       => "You Can’t Just Ignore It — My Fibroid and Myomectomy Journey",
            'description' => "A personal story about living with fibroids, undergoing a myomectomy, and learning to listen to my body."
        ],
        'cycle-and-diet' => [
            'title'       => "Cycle and Diet — Supporting Hormones Through Nutrition",
            'description' => "How your diet can support each phase of your menstrual cycle for better hormonal balance."
        ],
        'cycle-and-workout' => [
            'title'       => "Cycle and Workout — Exercising With Your Hormones",
            'description' => "Matching your workouts to your menstrual cycle phases for optimal energy and recovery."
        ],
        'know-your-hormones' => [
            'title'       => "Know Your Hormones — Understanding the Key Players",
            'description' => "A guide to the main hormones in the menstrual cycle and their effects on your body."
        ],
        'hormonal-imbalance' => [
            'title'       => "Hormonal Imbalance — Causes and Solutions",
            'description' => "Understanding why hormonal imbalances happen and ways to restore harmony."
        ],
        'fibroids' => [
            'title'       => "Fibroids — What They Are and Your Healing Options",
            'description' => "An overview of fibroids, their causes, and treatment options for healing."
        ]
    ];

    if (array_key_exists($post_slug, $meta_data)) {
        $title = $meta_data[$post_slug]['title'];
        $description = $meta_data[$post_slug]['description'];
        ?>
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="article">
        <meta property="og:title" content="<?php echo esc_attr($title); ?>">
        <meta property="og:description" content="<?php echo esc_attr($description); ?>">
        <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
        <meta property="og:site_name" content="Harmonious Hormones">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
        <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
        <?php
    }
}
?>
