var delayScripts = [];
var waitLoadCount = 0;
if (location.hostname != 'help.devcoinx.top') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WT6N5R6W6Z');

  (function () {
    var gaUrl = 'https://www.googletagmanager.com/gtag/js?id=G-WT6N5R6W6Z';

    function initGTMOnEvent(e) {
      document.removeEventListener(event.type, initGTMOnEvent);
      initGTM();
    }

    function initGTM() {
      if (window.gtmDidInit) {
        return;
      }
      window.gtmDidInit = true;
      var script = document.createElement('script');
      script.async = true;
      script.src = gaUrl;
      document.head.appendChild(script);
    }

    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initGTM, 3500);
      });
      document.addEventListener('scroll', initGTMOnEvent);
      document.addEventListener('mousemove', initGTMOnEvent);
      document.addEventListener('touchstart', initGTMOnEvent);
    } else {
      delayScripts.push({
        src: gaUrl
      });
    }
  })();
}

if (localStorage.getItem('DARK') === '1') {
  document.documentElement.classList.add('dark-theme')
}
