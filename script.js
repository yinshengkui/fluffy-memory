
  function addFloatingDecor() {
    const welcome = $('#screen-welcome');
    const items = [
      { html: SVG.butterfly(), left: '8%', top: '18%', size: 70, delay: '0s' },
      { html: SVG.flower(), left: '12%', top: '72%', size: 60, delay: '1s' },
      { html: SVG.apple(), left: '82%', top: '68%', size: 60, delay: '2s' },
      { html: SVG.balloon(), left: '80%', top: '18%', size: 70, delay: '1.5s' }
    ];
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'float-element';
      div.style.left = item.left;
      div.style.top = item.top;
      div.style.width = item.size + 'px';
      div.style.height = item.size + 'px';
      div.style.animationDelay = item.delay;
      div.innerHTML = item.html;
      welcome.appendChild(div);
    });
  }

  function installSun() {
    document.querySelectorAll('.countryside-bg').forEach(bg => {
      const sun = document.createElement('div');
      sun.className = 'sun';
      bg.appendChild(sun);
    });
  }

  function boot() {
    installSun();
    renderPiggies();
    addFloatingDecor();
    setupWelcome();
    setupIntro();
    setupRoundActions();
    setupReplay();
    showScreen('welcome');
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
