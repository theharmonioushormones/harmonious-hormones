document.addEventListener("DOMContentLoaded", function () {
  const head = document.head;

  const domain = 'https://harmonious-hormones.com';

  const metas = {
    'my-story': {
      description: 'My personal journey with fibroids, from diagnosis to treatment and healing.',
      title: 'My Story'
    },
    'cycle-and-diet': {
      description: 'Learn how diet and nutrition influence your menstrual cycle and hormonal health.',
      title: 'Cycle and Diet'
    },
    'cycle-and-workouts': {
      description: 'Discover the best workouts for each phase of your menstrual cycle.',
      title: 'Cycle and Workouts'
    },
    'know-your-hormones': {
      description: 'Understand the key hormones in your body and their role in health and well-being.',
      title: 'Know Your Hormones'
    },
    'hormonal-imbalance': {
      description: 'What causes hormonal imbalance, its symptoms, and how to restore balance naturally.',
      title: 'Hormonal Imbalance'
    },
    'fibroids': {
      description: 'Everything you need to know about fibroids, from symptoms to treatment options.',
      title: 'Fibroids'
    }
  };

  // Get slug from URL path (last part of pathname without trailing slash)
  let slug = location.pathname.replace(/\/$/, '').split('/').pop();

  if (metas[slug]) {
    const meta = metas[slug];

    function addMeta(attrName, attrValue, content) {
      let selector = attrName === 'name' ? `meta[name="${attrValue}"]` : `meta[property="${attrValue}"]`;
      let el = head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        head.appendChild(el);
      }
      el.setAttribute('content', content);
    }

    addMeta('name', 'description', meta.description);
    addMeta('property', 'og:type', 'article');
    addMeta('property', 'og:title', meta.title);
    addMeta('property', 'og:description', meta.description);
    addMeta('property', 'og:url', domain + location.pathname);
    addMeta('property', 'og:site_name', 'Harmonious Hormones');
    addMeta('name', 'twitter:card', 'summary');
    addMeta('name', 'twitter:title', meta.title);
    addMeta('name', 'twitter:description', meta.description);
  }
});
