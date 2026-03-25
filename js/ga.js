/**
 * Google Analytics 4 — replace with your Measurement ID from GA4 Admin (Data streams).
 */
(function () {
  var id = 'G-4JY5TQ48PX';

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
})();
