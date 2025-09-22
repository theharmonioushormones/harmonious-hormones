// assets/meta-disqus.js
// This script dynamically inserts meta tags and a Disqus thread
// based on the current page slug.

(function () {
  const slug = window.location.pathname
    .replace(/^\/|\/$/g, ''); // e.g. "fibroids", "pcos", "my-story"

  // ----- Meta Data for Each Page -----
  const metaData = {
    "": { // Home page
      title: "Harmonious Hormones",
      description:
        "A supportive blog and healing space for anyone navigating hormonal and reproductive health challenges like PCOS, fibroids, and irregular periods.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/06/f41b77c1-9de9-433e-9903-e2d863215f4d-1.jpg",
      url: "https://harmonious-hormones.com/",
      type: "website"
    },
    "fibroids": {
      title: "Understanding Fibroids – Symptoms, Management & Healing",
      description:
        "In-depth knowledge of fibroids, treatment options, and personal experiences to help women navigate this common condition.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/fibroid-thumbnail.jpg",
      url: "https://harmonious-hormones.com/fibroids/",
      type: "article"
    },
    "pcos": {
      title: "PCOS Awareness and Management",
      description:
        "Learn about PCOS, its causes, management strategies, and supportive lifestyle changes.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/pcos-thumbnail.jpg",
      url: "https://harmonious-hormones.com/pcos/",
      type: "article"
    },
    "pcos-diet": {
      title: "PCOS Diet Guide – Eat to Balance Your Hormones",
      description:
        "Diet strategies for PCOS to support hormone balance and reduce insulin resistance.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/pcos-diet-thumbnail.jpg",
      url: "https://harmonious-hormones.com/pcos-diet/",
      type: "article"
    },
    "her-story-pcos-journey": {
      title: "Her PCOS Story – A Personal Journey",
      description:
        "A heartfelt story of living with PCOS, finding treatment, and reclaiming health.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/pcos-story-thumbnail.jpg",
      url: "https://harmonious-hormones.com/her-story-pcos-journey/",
      type: "article"
    },
    "hormonal-imbalance": {
      title: "Hormonal Imbalance – Signs, Causes & Support",
      description:
        "Understand the symptoms and science behind hormonal imbalance and ways to support your body naturally.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/hormonal-imbalance-thumbnail.jpg",
      url: "https://harmonious-hormones.com/hormonal-imbalance/",
      type: "article"
    },
    "know-your-hormones": {
      title: "Know Your Hormones – Menstrual Phases Explained",
      description:
        "Learn about the hormones involved in each phase of your menstrual cycle.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/know-your-hormones-thumbnail.jpg",
      url: "https://harmonious-hormones.com/know-your-hormones/",
      type: "article"
    },
    "cycle-and-diet": {
      title: "Cycle and Diet – Eating with Your Hormonal Phases",
      description:
        "Nutrition tips tailored to each phase of your cycle for balanced hormones.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/cycle-diet-thumbnail.jpg",
      url: "https://harmonious-hormones.com/cycle-and-diet/",
      type: "article"
    },
    "cycle-and-workout": {
      title: "Cycle and Workout – Exercise for Each Phase",
      description:
        "Workout strategies to support energy and hormone changes throughout your cycle.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/cycle-workout-thumbnail.jpg",
      url: "https://harmonious-hormones.com/cycle-and-workout/",
      type: "article"
    },
    "my-story": {
      title: "“You Can’t Just Ignore It” — My Fibroid and Myomectomy Journey",
      description:
        "A personal story about living with fibroids, undergoing a myomectomy, and learning to listen to the body.",
      image: "https://harmonious-hormones.com/wp-content/uploads/2025/07/fibroid-myomectomy-thumbnail.jpg",
      url: "https://harmonious-hormones.com/my-story/",
      type: "article"
    }
  };

  const data = metaData[slug] || metaData[""];

  // Helper to inject meta tags
  function addMeta(property, content, isName = false) {
    const m = document.createElement('meta');
    if (isName) m.name = property;
    else m.setAttribute('property', property);
    m.content = content;
    document.head.appendChild(m);
  }

  // Insert Open Graph & Twitter tags
  addMeta('og:title', data.title);
  addMeta('og:description', data.description);
  addMeta('og:image', data.image);
  addMeta('og:url', data.url);
  addMeta('og:type', data.type);

  addMeta('twitter:card', 'summary_large_image', true);
  addMeta('twitter:title', data.title, true);
  addMeta('twitter:description', data.description, true);
  addMeta('twitter:image', data.image, true);
  addMeta('robots', 'max-image-preview:large', true);

  // ----- Disqus Lazy-Load -----
  var disqus_loaded = false;
  window.addEventListener('scroll', function () {
    var thread = document.getElementById('disqus_thread');
    if (!thread) return;
    if (!disqus_loaded && window.scrollY + window.innerHeight >= thread.offsetTop) {
      var d = document, s = d.createElement('script');
      s.src = 'https://harmonious-hormones.disqus.com/embed.js'; // replace with your Disqus shortname if different
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      disqus_loaded = true;
    }
  });
})();

