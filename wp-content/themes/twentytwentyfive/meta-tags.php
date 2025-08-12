<?php
// meta-tags.php

if (is_single()) {
    global $post;
    $slug = $post->post_name;

    switch ($slug) {

        case 'my-story':
            echo '<title>My Story — Living with Hormonal Challenges</title>';
            echo '<meta name="description" content="My personal journey navigating hormonal health challenges and the lessons I have learned along the way.">';
            echo '<meta name="keywords" content="my story, hormonal health, personal journey, reproductive health, Harmonious Hormones">';
            break;

        case 'fibroids':
            echo '<title>“You Can’t Just Ignore It” — My Fibroid and Myomectomy Journey</title>';
            echo '<meta name="description" content="A personal story about living with fibroids, undergoing a myomectomy, and learning to listen to my body.">';
            echo '<meta name="keywords" content="fibroids, myomectomy, fibroid surgery, personal story, hormonal health, uterine health, Harmonious Hormones">';
            break;

        case 'cycle-and-diet':
            echo '<title>Cycle and Diet — How Food Supports Hormonal Health</title>';
            echo '<meta name="description" content="Learn how diet impacts your menstrual cycle and hormonal balance, with practical nutrition tips for each phase.">';
            echo '<meta name="keywords" content="cycle and diet, hormonal balance, menstrual health, nutrition, Harmonious Hormones">';
            break;

        case 'cycle-and-workout':
            echo '<title>Cycle and Workout — Exercising in Sync with Your Hormones</title>';
            echo '<meta name="description" content="Discover how to match your workouts to your menstrual cycle phases for better energy, recovery, and hormonal health.">';
            echo '<meta name="keywords" content="cycle and workout, menstrual phases, exercise, hormonal health, Harmonious Hormones">';
            break;

        case 'know-your-hormones':
            echo '<title>Know Your Hormones — Understanding the Chemicals That Drive Your Cycle</title>';
            echo '<meta name="description" content="A beginner-friendly guide to estrogen, progesterone, testosterone, and other key hormones that influence your menstrual cycle.">';
            echo '<meta name="keywords" content="know your hormones, estrogen, progesterone, testosterone, menstrual cycle, Harmonious Hormones">';
            break;

        case 'hormonal-imbalance':
            echo '<title>Hormonal Imbalance — What It Means and How to Address It</title>';
            echo '<meta name="description" content="Understand what hormonal imbalance is, its symptoms, and natural ways to restore balance.">';
            echo '<meta name="keywords" content="hormonal imbalance, menstrual health, hormonal health, reproductive health, Harmonious Hormones">';
            break;
    }
}
?>
