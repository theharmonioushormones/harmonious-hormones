document.addEventListener("DOMContentLoaded", function () {
  const head = document.head;
  const domain = 'https://harmonious-hormones.com';

  // ===== Google Analytics 4 (GA4) =====
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HBEDZTK7HB"; // replace with your GA4 ID
  head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-HBEDZTK7HB'); // replace with your GA4 ID

  // ===== Dynamic Meta Tags =====
  const metas = {
    '': {  // homepage (empty slug)
      description: 'Welcome to Harmonious Hormones — your guide to hormonal and reproductive health.',
      title: 'Harmonious Hormones'
    },
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
  if (slug === '/') slug = '';

  // Inject meta tags dynamically
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

  // ===== Disqus comment injection & lazy load =====
  const disqusShortname = 'harmonious-hormones';
  const mainContent = document.querySelector('main') || document.body;

  if (!document.getElementById('disqus_thread')) {
    const commentWrapper = document.createElement('div');
    commentWrapper.innerHTML = `
      <p class="has-text-align-center has-medium-font-size">
        Your opinion and views matter :) ...click on the below Icon to share
      </p>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the 
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    `;
    mainContent.insertAdjacentElement('afterend', commentWrapper);

    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = slug || 'homepage';
    };

    let disqusLoaded = false;
    window.addEventListener('scroll', function onScroll() {
      const thread = document.getElementById('disqus_thread');
      if (!disqusLoaded && thread && window.scrollY + window.innerHeight >= thread.offsetTop - 200) {
        const d = document, s = d.createElement('script');
        s.src = 'https://' + disqusShortname + '.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        disqusLoaded = true;
        window.removeEventListener('scroll', onScroll);
      }
    });
  }
});
