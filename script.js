// ============================================
// Piggy's Letter Adventure - V1 Product Skeleton
// ============================================

(function () {
  'use strict';

  const STORAGE_KEYS = {
    progress: 'piggy-adventure-progress',
    settings: 'piggy-adventure-settings',
  };

  const DEFAULT_SETTINGS = {
    voice: true,
    sfx: true,
    bgm: false,
  };

  const DEFAULT_PROGRESS = {
    unlockedLevelCount: 1,
    completedLevels: {},
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function emojiIcon(emoji) {
    return `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="84" height="84" rx="24" fill="rgba(255,255,255,0.9)" stroke="#FFB6C1" stroke-width="4"/>
        <text x="50" y="63" text-anchor="middle" font-size="42">${emoji}</text>
      </svg>`;
  }

  const SVG = {
    piggyMain: () => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="#FFB6C1"/>
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="none" stroke="#E88DA0" stroke-width="2"/>
        <circle cx="100" cy="72" r="42" fill="#FFB6C1"/>
        <circle cx="100" cy="72" r="42" fill="none" stroke="#E88DA0" stroke-width="2"/>
        <ellipse cx="68" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(-15,68,40)"/>
        <ellipse cx="132" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(15,132,40)"/>
        <circle cx="85" cy="68" r="6" fill="#5D4037"/>
        <circle cx="115" cy="68" r="6" fill="#5D4037"/>
        <ellipse cx="100" cy="85" rx="16" ry="12" fill="#FF87A0"/>
        <path d="M88 95 Q100 108 112 95" fill="none" stroke="#E05580" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M65 120 Q100 100 135 120 L140 155 Q100 165 60 155 Z" fill="#FF5252" opacity="0.8"/>
      </svg>`,
    piggySmall: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="45" r="25" fill="#FFB6C1"/>
        <circle cx="42" cy="42" r="3.5" fill="#5D4037"/>
        <circle cx="58" cy="42" r="3.5" fill="#5D4037"/>
        <ellipse cx="50" cy="52" rx="10" ry="7" fill="#FF87A0"/>
        <path d="M44 58 Q50 64 56 58" fill="none" stroke="#E05580" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="50" cy="78" rx="22" ry="18" fill="#FFB6C1"/>
        <path d="M35 72 Q50 65 65 72 L68 88 Q50 92 32 88 Z" fill="#FF5252" opacity="0.8"/>
      </svg>`,
    piggyCelebrate: () => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="#FFB6C1"/>
        <circle cx="100" cy="72" r="42" fill="#FFB6C1"/>
        <path d="M78 65 Q85 58 92 65" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
        <path d="M108 65 Q115 58 122 65" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="100" cy="85" rx="16" ry="12" fill="#FF87A0"/>
        <path d="M82 93 Q100 115 118 93" fill="none" stroke="#E05580" stroke-width="3" stroke-linecap="round"/>
        <path d="M65 120 Q100 100 135 120 L140 155 Q100 165 60 155 Z" fill="#FF5252" opacity="0.8"/>
        <text x="30" y="35" font-size="20">⭐</text>
        <text x="155" y="30" font-size="18">✨</text>
      </svg>`,
    apple: () => emojiIcon('🍎'),
    butterfly: () => emojiIcon('🦋'),
    cat: () => emojiIcon('🐱'),
    dog: () => emojiIcon('🐶'),
    flower: () => emojiIcon('🌸'),
    fish: () => emojiIcon('🐟'),
    star: () => emojiIcon('⭐'),
    balloon: () => emojiIcon('🎈'),
    tree: () => emojiIcon('🌳'),
    elephant: () => emojiIcon('🐘'),
    grape: () => emojiIcon('🍇'),
    hat: () => emojiIcon('🎩'),
    icecream: () => emojiIcon('🍦'),
    jam: () => emojiIcon('🍓'),
    kite: () => emojiIcon('🪁'),
    lion: () => emojiIcon('🦁'),
    moon: () => emojiIcon('🌙'),
    nest: () => emojiIcon('🪺'),
    orange: () => emojiIcon('🍊'),
    pig: () => emojiIcon('🐷'),
    queen: () => emojiIcon('👑'),
    rainbow: () => emojiIcon('🌈'),
    sun: () => emojiIcon('☀️'),
    turtle: () => emojiIcon('🐢'),
    umbrella: () => emojiIcon('☂️'),
    violin: () => emojiIcon('🎻'),
    whale: () => emojiIcon('🐋'),
    xylophone: () => emojiIcon('🎼'),
    yacht: () => emojiIcon('🛥️'),
    zebra: () => emojiIcon('🦓'),
  };

  function toLabel(icon) {
    const map = {
      icecream: 'Ice Cream',
      xylophone: 'Xylophone',
      butterfly: 'Butterfly',
      elephant: 'Elephant',
      umbrella: 'Umbrella',
      violin: 'Violin',
      rainbow: 'Rainbow',
    };
    return map[icon] || icon.charAt(0).toUpperCase() + icon.slice(1);
  }

  function toChinese(word) {
    const map = {
      Apple: '苹果', Butterfly: '蝴蝶', Cat: '小猫', Dog: '小狗', Elephant: '大象', Fish: '小鱼',
      Grape: '葡萄', Hat: '帽子', 'Ice Cream': '冰淇淋', Jam: '果酱', Kite: '风筝', Lion: '狮子',
      Moon: '月亮', Nest: '鸟窝', Orange: '橙子', Pig: '小猪', Queen: '皇冠', Rainbow: '彩虹',
      Sun: '太阳', Turtle: '乌龟', Umbrella: '雨伞', Violin: '小提琴', Whale: '鲸鱼', Xylophone: '木琴',
      Yacht: '游艇', Zebra: '斑马'
    };
    return map[word] || word;
  }

  function buildRound(letter, word, illustration, distractors) {
    const options = [
      { id: illustration, label: word, icon: illustration, correct: true },
      ...distractors.map((icon) => ({ id: icon, label: toLabel(icon), icon, correct: false })),
    ];
    const zhWord = toChinese(word);
    return {
      letter,
      word,
      zhWord,
      illustration,
      prompt: `Which one starts with ${letter}?`,
      zhPrompt: `请找出 ${zhWord}。${word} 的中文是${zhWord}，${zhWord}的英文是 ${word}。`,
      celebrateMsg: `${letter} is for ${word}!`,
      revealVoice: `这是字母 ${letter}。${letter}，${letter}，${letter}。${word}。${word} 的中文是 ${zhWord}。${zhWord} 的英文是 ${word}。`,
      traceVoice: `请用手指或者鼠标，描一描字母 ${letter}。`,
      options,
    };
  }

  const LEVEL_GROUPS = [
    { id: 'letters-1', title: 'Level 1 · A-C', description: 'Meet A, B and C', rounds: [
      buildRound('A', 'Apple', 'apple', ['fish', 'star', 'tree']),
      buildRound('B', 'Butterfly', 'butterfly', ['flower', 'dog', 'apple']),
      buildRound('C', 'Cat', 'cat', ['balloon', 'fish', 'flower']),
    ]},
    { id: 'letters-2', title: 'Level 2 · D-F', description: 'Learn D, E and F', rounds: [
      buildRound('D', 'Dog', 'dog', ['cat', 'fish', 'tree']),
      buildRound('E', 'Elephant', 'elephant', ['apple', 'balloon', 'flower']),
      buildRound('F', 'Fish', 'fish', ['dog', 'star', 'tree']),
    ]},
    { id: 'letters-3', title: 'Level 3 · G-I', description: 'Learn G, H and I', rounds: [
      buildRound('G', 'Grape', 'grape', ['apple', 'fish', 'star']),
      buildRound('H', 'Hat', 'hat', ['cat', 'tree', 'flower']),
      buildRound('I', 'Ice Cream', 'icecream', ['balloon', 'dog', 'apple']),
    ]},
    { id: 'letters-4', title: 'Level 4 · J-L', description: 'Learn J, K and L', rounds: [
      buildRound('J', 'Jam', 'jam', ['flower', 'star', 'tree']),
      buildRound('K', 'Kite', 'kite', ['fish', 'apple', 'dog']),
      buildRound('L', 'Lion', 'lion', ['cat', 'grape', 'tree']),
    ]},
    { id: 'letters-5', title: 'Level 5 · M-O', description: 'Learn M, N and O', rounds: [
      buildRound('M', 'Moon', 'moon', ['apple', 'tree', 'star']),
      buildRound('N', 'Nest', 'nest', ['flower', 'dog', 'fish']),
      buildRound('O', 'Orange', 'orange', ['cat', 'grape', 'balloon']),
    ]},
    { id: 'letters-6', title: 'Level 6 · P-R', description: 'Learn P, Q and R', rounds: [
      buildRound('P', 'Pig', 'pig', ['cat', 'dog', 'tree']),
      buildRound('Q', 'Queen', 'queen', ['star', 'flower', 'balloon']),
      buildRound('R', 'Rainbow', 'rainbow', ['fish', 'moon', 'tree']),
    ]},
    { id: 'letters-7', title: 'Level 7 · S-U', description: 'Learn S, T and U', rounds: [
      buildRound('S', 'Sun', 'sun', ['moon', 'tree', 'dog']),
      buildRound('T', 'Turtle', 'turtle', ['fish', 'cat', 'star']),
      buildRound('U', 'Umbrella', 'umbrella', ['balloon', 'apple', 'flower']),
    ]},
    { id: 'letters-8', title: 'Level 8 · V-X', description: 'Learn V, W and X', rounds: [
      buildRound('V', 'Violin', 'violin', ['kite', 'balloon', 'star']),
      buildRound('W', 'Whale', 'whale', ['fish', 'cat', 'moon']),
      buildRound('X', 'Xylophone', 'xylophone', ['violin', 'kite', 'tree']),
    ]},
    { id: 'letters-9', title: 'Level 9 · Y-Z', description: 'Learn Y and Z', rounds: [
      buildRound('Y', 'Yacht', 'yacht', ['fish', 'umbrella', 'tree']),
      buildRound('Z', 'Zebra', 'zebra', ['cat', 'lion', 'dog']),
    ]},
  ];

  const INTRO_TEXTS = [
    '欢迎来到小猪字母冒险！',
    '我们会一边看字母，一边找图片，还可以描一描。',
    '准备好了吗？让我们开始今天的关卡吧！',
  ];

  let audioCtx = null;
  let settings = loadJson(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
  let progress = loadJson(STORAGE_KEYS.progress, DEFAULT_PROGRESS);
  let currentLevelIndex = 0;
  let currentRounds = LEVEL_GROUPS[0].rounds;
  let currentRound = 0;
  let currentIntroStep = 0;
  let starsEarned = [];
  let devResetApplied = false;

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? { ...fallback, ...JSON.parse(raw) } : { ...fallback };
    } catch (e) {
      return { ...fallback };
    }
  }

  function saveJson(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function maybeApplyDevReset() {
    const url = new URL(window.location.href);
    if (url.searchParams.get('reset') === '1' && !devResetApplied) {
      localStorage.removeItem(STORAGE_KEYS.progress);
      localStorage.removeItem(STORAGE_KEYS.settings);
      progress = { ...DEFAULT_PROGRESS };
      settings = { ...DEFAULT_SETTINGS };
      devResetApplied = true;
    }
  }

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, duration, type = 'sine', volume = 0.15) {
    if (!audioCtx || !settings.sfx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  function playCorrect() {
    playTone(523, 0.15);
    setTimeout(() => playTone(659, 0.15), 100);
    setTimeout(() => playTone(784, 0.3), 200);
  }

  function playWrong() {
    playTone(220, 0.25, 'triangle', 0.1);
  }

  function playCelebrate() {
    [523, 587, 659, 698, 784, 880].forEach((n, i) => setTimeout(() => playTone(n, 0.2, 'sine', 0.08), i * 80));
  }

  function playClick() {
    playTone(440, 0.08, 'sine', 0.08);
  }

  function showScreen(id) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $(`#screen-${id}`).classList.add('active');
  }

  function showPhase(id) {
    $$('.phase').forEach((p) => p.classList.add('hidden'));
    $(`#phase-${id}`).classList.remove('hidden');
  }

  function setHTML(sel, html) {
    const el = $(sel);
    if (el) el.innerHTML = html;
  }

  function setText(sel, text) {
    const el = $(sel);
    if (el) el.textContent = text;
  }

  function speak(text) {
    if (!settings.voice || !window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.95;
    utter.pitch = 1.05;
    window.speechSynthesis.speak(utter);
  }

  function speakForScreen(screen) {
    const level = LEVEL_GROUPS[currentLevelIndex];
    const round = currentRounds[currentRound];
    const messages = {
      welcome: '欢迎来到小猪字母冒险。点击开始冒险，或者先去选关。',
      levels: '请选择一个关卡。完成前面的关卡，就能解锁更多内容。',
      settings: '这里可以设置中文语音、音效和背景音乐。',
      intro: INTRO_TEXTS[currentIntroStep],
      reveal: round ? round.revealVoice : '',
      pick: round ? round.zhPrompt : '',
      trace: round ? round.traceVoice : '',
      celebrate: round ? `太棒了，${round.letter} 这一关完成了。` : '',
      final: level ? `恭喜你完成 ${level.title}。可以继续挑战新的关卡。` : '恭喜你完成当前关卡。',
    };
    speak(messages[screen]);
  }

  function spawnConfetti(count = 28) {
    const colors = ['#FF5252', '#FFD54F', '#4CAF50', '#42A5F5', '#CE93D8', '#FF87A0', '#FFB74D'];
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.className = 'confetti';
      div.style.left = Math.random() * 100 + 'vw';
      div.style.background = colors[Math.floor(Math.random() * colors.length)];
      div.style.animationDuration = (1.2 + Math.random() * 1.8) + 's';
      div.style.animationDelay = Math.random() * 0.3 + 's';
      div.style.width = (8 + Math.random() * 8) + 'px';
      div.style.height = (8 + Math.random() * 8) + 'px';
      document.body.appendChild(div);
      setTimeout(() => div.remove(), 3200);
    }
  }

  function renderPiggies() {
    setHTML('#welcome-piggy', SVG.piggyMain());
    setHTML('#intro-piggy', SVG.piggySmall());
    setHTML('#celebrate-piggy', SVG.piggyCelebrate());
  }

  function renderLevels() {
    const grid = $('#levels-grid');
    grid.innerHTML = '';
    LEVEL_GROUPS.forEach((level, index) => {
      const unlocked = index < progress.unlockedLevelCount;
      const completed = !!progress.completedLevels[level.id];
      const btn = document.createElement('button');
      btn.className = `level-card ${unlocked ? '' : 'locked'} ${completed ? 'completed' : ''}`;
      btn.disabled = !unlocked;
      btn.innerHTML = `
        <div class="level-card-top">
          <span class="level-card-badge">${completed ? '✅' : unlocked ? '🌟' : '🔒'}</span>
          <span class="level-card-tag">${level.rounds.length} rounds</span>
        </div>
        <h3>${level.title}</h3>
        <p>${level.description}</p>
      `;
      btn.addEventListener('click', () => startLevel(index));
      grid.appendChild(btn);
    });
  }

  function applySettingsToUI() {
    $('#toggle-voice').checked = settings.voice;
    $('#toggle-sfx').checked = settings.sfx;
    $('#toggle-bgm').checked = settings.bgm;
  }

  function saveSettingsFromUI() {
    settings = {
      voice: $('#toggle-voice').checked,
      sfx: $('#toggle-sfx').checked,
      bgm: $('#toggle-bgm').checked,
    };
    saveJson(STORAGE_KEYS.settings, settings);
  }

  function updateProgress() {
    const pct = (currentRound / currentRounds.length) * 100;
    $('#progress-fill').style.width = pct + '%';
    let starsHTML = '';
    for (let i = 0; i < currentRounds.length; i++) {
      starsHTML += `<span class="progress-star ${starsEarned[i] ? 'earned' : ''}">⭐</span>`;
    }
    setHTML('#progress-stars', starsHTML);
  }

  function startLevel(levelIndex) {
    initAudio();
    playClick();
    currentLevelIndex = levelIndex;
    currentRounds = LEVEL_GROUPS[levelIndex].rounds;
    currentRound = 0;
    currentIntroStep = 0;
    starsEarned = new Array(currentRounds.length).fill(false);
    setText('#current-level-label', LEVEL_GROUPS[levelIndex].title);
    updateProgress();
    showIntroStep();
    showScreen('intro');
    speakForScreen('intro');
  }

  function showIntroStep() {
    setText('#intro-text', INTRO_TEXTS[currentIntroStep]);
    setText('#intro-step-indicator', `Step ${currentIntroStep + 1} / ${INTRO_TEXTS.length}`);
    setText('#btn-intro-next', currentIntroStep >= INTRO_TEXTS.length - 1 ? 'Start Level' : 'Next');
  }

  function startRound() {
    if (currentRound >= currentRounds.length) {
      showFinal();
      return;
    }
    const round = currentRounds[currentRound];
    updateProgress();
    setText('#letter-display', round.letter);
    setHTML('#letter-word', `${round.letter} is for <strong>${round.word}</strong> · ${round.zhWord}`);
    setHTML('#round-illustration', SVG[round.illustration]());
    showScreen('round');
    showPhase('reveal');
    speakForScreen('reveal');
  }

  function setupPick() {
    const round = currentRounds[currentRound];
    setText('#pick-prompt', `${round.prompt} / ${round.word} = ${round.zhWord}`);
    speakForScreen('pick');
    const shuffled = [...round.options].sort(() => Math.random() - 0.5);
    const grid = $('#pick-grid');
    grid.innerHTML = '';
    shuffled.forEach((opt) => {
      const card = document.createElement('button');
      card.className = 'pick-card';
      card.setAttribute('aria-label', opt.label);
      card.innerHTML = `
        <div class="pick-card-icon">${SVG[opt.icon]()}</div>
        <span class="pick-card-label">${opt.label}</span>
      `;
      card.addEventListener('click', () => handlePick(card, opt));
      grid.appendChild(card);
    });
  }

  function handlePick(card, opt) {
    if (opt.correct) {
      card.classList.add('correct');
      playCorrect();
      speak('太棒了，你答对了。');
      $$('.pick-card').forEach((c) => { c.style.pointerEvents = 'none'; });
      starsEarned[currentRound] = true;
      updateProgress();
      setTimeout(() => {
        setupTrace();
        showPhase('trace');
        speakForScreen('trace');
      }, 900);
    } else {
      card.classList.add('wrong');
      playWrong();
      speak('再试一次。');
      setTimeout(() => card.classList.remove('wrong'), 500);
    }
  }

  function setupTrace() {
    const round = currentRounds[currentRound];
    const area = $('#trace-area');
    const status = $('#trace-status');
    const clearBtn = $('#btn-trace-clear');
    let hasDrawn = false;

    setText('#trace-guide', round.letter);
    setText('#trace-hint', `Trace ${round.letter} · ${round.word} · ${round.zhWord}`);
    setText('#trace-status', 'Waiting to trace...');

    const canvas = $('#trace-canvas');
    const rect = area.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    const newCanvas = canvas.cloneNode(true);
    canvas.parentElement.replaceChild(newCanvas, canvas);
    newCanvas.id = 'trace-canvas';

    const ctx = newCanvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#E05580';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    function updateTraceStatus(text) {
      setText('#trace-status', text);
    }

    function clearTrace() {
      ctx.clearRect(0, 0, rect.width, rect.height);
      hasDrawn = false;
      area.classList.remove('drawing');
      updateTraceStatus('Canvas cleared. Try tracing again!');
    }

    clearBtn.onclick = () => {
      playClick();
      clearTrace();
    };

    function getPos(e) {
      const canvasRect = newCanvas.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      return {
        x: touch.clientX - canvasRect.left,
        y: touch.clientY - canvasRect.top,
      };
    }

    function startDraw(e) {
      e.preventDefault();
      drawing = true;
      area.classList.add('drawing');
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
      if (!hasDrawn) {
        hasDrawn = true;
        updateTraceStatus('Great! Keep tracing ✨');
      }
    }

    function drawMove(e) {
      e.preventDefault();
      if (!drawing) return;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      lastX = pos.x;
      lastY = pos.y;
    }

    function endDraw(e) {
      if (e) e.preventDefault();
      drawing = false;
      area.classList.remove('drawing');
      if (hasDrawn) {
        updateTraceStatus('Nice tracing! Tap Done when ready.');
      }
    }

    newCanvas.addEventListener('mousedown', startDraw);
    newCanvas.addEventListener('mousemove', drawMove);
    newCanvas.addEventListener('mouseup', endDraw);
    newCanvas.addEventListener('mouseleave', endDraw);
    newCanvas.addEventListener('touchstart', startDraw, { passive: false });
    newCanvas.addEventListener('touchmove', drawMove, { passive: false });
    newCanvas.addEventListener('touchend', endDraw, { passive: false });
    newCanvas.addEventListener('touchcancel', endDraw, { passive: false });
  }

  function showCelebrate() {
    const round = currentRounds[currentRound];
    setText('#celebrate-text', round.celebrateMsg);
    setHTML('#star-burst', '⭐ 🌟 ⭐');
    setHTML('#celebrate-piggy', SVG.piggyCelebrate());
    showPhase('celebrate');
    speakForScreen('celebrate');
    playCelebrate();
    spawnConfetti(40);
    setText('#btn-celebrate-next', currentRound >= currentRounds.length - 1 ? 'See Results!' : 'Next Round');
  }

  function markLevelCompleted() {
    const level = LEVEL_GROUPS[currentLevelIndex];
    progress.completedLevels[level.id] = true;
    progress.unlockedLevelCount = Math.max(progress.unlockedLevelCount, currentLevelIndex + 2);
    saveJson(STORAGE_KEYS.progress, progress);
  }

  function showFinal() {
    markLevelCompleted();
    showScreen('final');
    playCelebrate();
    spawnConfetti(60);
    setHTML('#trophy-area', '🏆');
    const level = LEVEL_GROUPS[currentLevelIndex];
    const earned = starsEarned.filter(Boolean).length;
    setText('#final-subtitle', `You finished ${level.title} and earned ${earned} stars!`);
    let starsHTML = '';
    for (let i = 0; i < currentRounds.length; i++) {
      starsHTML += `<span class="final-star">${starsEarned[i] ? '⭐' : '☆'}</span>`;
    }
    setHTML('#final-stars', starsHTML);
    renderLevels();
    speakForScreen('final');
  }

  function goHome() {
    playClick();
    showScreen('welcome');
    speakForScreen('welcome');
  }

  function setupWelcome() {
    renderPiggies();
    $('#btn-start').addEventListener('click', () => startLevel(0));
    $('#btn-open-levels').addEventListener('click', () => {
      playClick();
      renderLevels();
      showScreen('levels');
      speakForScreen('levels');
    });
    $('#btn-open-settings').addEventListener('click', () => {
      playClick();
      applySettingsToUI();
      showScreen('settings');
      speakForScreen('settings');
    });
  }

  function setupLevels() {
    $('#btn-levels-back').addEventListener('click', goHome);
  }

  function setupSettings() {
    $('#btn-settings-back').addEventListener('click', goHome);
    $('#btn-settings-save').addEventListener('click', () => {
      playClick();
      saveSettingsFromUI();
      speak('设置已经保存。');
      goHome();
    });
  }

  function setupIntro() {
    $('#btn-intro-next').addEventListener('click', () => {
      playClick();
      if (currentIntroStep >= INTRO_TEXTS.length - 1) {
        currentRound = 0;
        startRound();
        return;
      }

      currentIntroStep += 1;
      showIntroStep();
      speakForScreen('intro');
    });
  }

  function setupRound() {
    $('#btn-reveal-next').addEventListener('click', () => {
      playClick();
      setupPick();
      showPhase('pick');
    });

    $('#btn-trace-done').addEventListener('click', () => {
      playClick();
      showCelebrate();
    });

    $('#btn-celebrate-next').addEventListener('click', () => {
      playClick();
      currentRound++;
      if (currentRound >= currentRounds.length) {
        showFinal();
      } else {
        startRound();
      }
    });

    $('#btn-round-home').addEventListener('click', goHome);
  }

  function setupFinal() {
    $('#btn-replay').addEventListener('click', () => startLevel(currentLevelIndex));
    $('#btn-back-to-levels').addEventListener('click', () => {
      playClick();
      renderLevels();
      showScreen('levels');
      speakForScreen('levels');
    });
  }

  function init() {
    maybeApplyDevReset();
    setupWelcome();
    setupLevels();
    setupSettings();
    setupIntro();
    setupRound();
    setupFinal();
    applySettingsToUI();
    renderLevels();
    document.addEventListener('touchstart', initAudio, { once: true });
    document.addEventListener('click', initAudio, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
