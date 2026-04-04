// ============================================
// Piggy's Letter Adventure - Main Game Script
// ============================================

(function () {
  'use strict';

  // ---- SVG Art Library ----
  const SVG = {
    piggyMain: () => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Body -->
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="#FFB6C1"/>
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="none" stroke="#E88DA0" stroke-width="2"/>
        <!-- Head -->
        <circle cx="100" cy="72" r="42" fill="#FFB6C1"/>
        <circle cx="100" cy="72" r="42" fill="none" stroke="#E88DA0" stroke-width="2"/>
        <!-- Ears -->
        <ellipse cx="68" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(-15,68,40)"/>
        <ellipse cx="68" cy="40" rx="8" ry="12" fill="#FF87A0" transform="rotate(-15,68,40)"/>
        <ellipse cx="132" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(15,132,40)"/>
        <ellipse cx="132" cy="40" rx="8" ry="12" fill="#FF87A0" transform="rotate(15,132,40)"/>
        <!-- Eyes -->
        <circle cx="85" cy="68" r="6" fill="#5D4037"/>
        <circle cx="115" cy="68" r="6" fill="#5D4037"/>
        <circle cx="87" cy="66" r="2" fill="white"/>
        <circle cx="117" cy="66" r="2" fill="white"/>
        <!-- Snout -->
        <ellipse cx="100" cy="85" rx="16" ry="12" fill="#FF87A0"/>
        <circle cx="94" cy="85" r="3" fill="#E05580"/>
        <circle cx="106" cy="85" r="3" fill="#E05580"/>
        <!-- Smile -->
        <path d="M88 95 Q100 108 112 95" fill="none" stroke="#E05580" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Cheeks -->
        <circle cx="72" cy="82" r="8" fill="#FF87A0" opacity="0.4"/>
        <circle cx="128" cy="82" r="8" fill="#FF87A0" opacity="0.4"/>
        <!-- Arms -->
        <ellipse cx="52" cy="135" rx="12" ry="25" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(15,52,135)"/>
        <ellipse cx="148" cy="135" rx="12" ry="25" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(-15,148,135)"/>
        <!-- Legs -->
        <ellipse cx="78" cy="175" rx="14" ry="12" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2"/>
        <ellipse cx="122" cy="175" rx="14" ry="12" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2"/>
        <!-- Shoes -->
        <ellipse cx="78" cy="182" rx="16" ry="8" fill="#E05580"/>
        <ellipse cx="122" cy="182" rx="16" ry="8" fill="#E05580"/>
        <!-- Dress -->
        <path d="M65 120 Q100 100 135 120 L140 155 Q100 165 60 155 Z" fill="#FF5252" opacity="0.8"/>
        <!-- Tail -->
        <path d="M155 130 Q170 120 165 105 Q160 95 170 90" fill="none" stroke="#FFB6C1" stroke-width="4" stroke-linecap="round"/>
      </svg>`,

    piggySmall: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="45" r="25" fill="#FFB6C1"/>
        <ellipse cx="38" cy="28" rx="8" ry="12" fill="#FFB6C1" stroke="#E88DA0" stroke-width="1.5" transform="rotate(-15,38,28)"/>
        <ellipse cx="38" cy="28" rx="5" ry="7" fill="#FF87A0" transform="rotate(-15,38,28)"/>
        <ellipse cx="62" cy="28" rx="8" ry="12" fill="#FFB6C1" stroke="#E88DA0" stroke-width="1.5" transform="rotate(15,62,28)"/>
        <ellipse cx="62" cy="28" rx="5" ry="7" fill="#FF87A0" transform="rotate(15,62,28)"/>
        <circle cx="42" cy="42" r="3.5" fill="#5D4037"/>
        <circle cx="58" cy="42" r="3.5" fill="#5D4037"/>
        <circle cx="43" cy="41" r="1.2" fill="white"/>
        <circle cx="59" cy="41" r="1.2" fill="white"/>
        <ellipse cx="50" cy="52" rx="10" ry="7" fill="#FF87A0"/>
        <circle cx="46" cy="52" r="2" fill="#E05580"/>
        <circle cx="54" cy="52" r="2" fill="#E05580"/>
        <path d="M44 58 Q50 64 56 58" fill="none" stroke="#E05580" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="50" cy="78" rx="22" ry="18" fill="#FFB6C1"/>
        <path d="M35 72 Q50 65 65 72 L68 88 Q50 92 32 88 Z" fill="#FF5252" opacity="0.8"/>
        <ellipse cx="42" cy="94" rx="8" ry="5" fill="#E05580"/>
        <ellipse cx="58" cy="94" rx="8" ry="5" fill="#E05580"/>
      </svg>`,

    piggyCelebrate: () => `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="50" fill="#FFB6C1"/>
        <circle cx="100" cy="72" r="42" fill="#FFB6C1"/>
        <ellipse cx="68" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(-15,68,40)"/>
        <ellipse cx="68" cy="40" rx="8" ry="12" fill="#FF87A0" transform="rotate(-15,68,40)"/>
        <ellipse cx="132" cy="40" rx="14" ry="20" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(15,132,40)"/>
        <ellipse cx="132" cy="40" rx="8" ry="12" fill="#FF87A0" transform="rotate(15,132,40)"/>
        <!-- Happy closed eyes -->
        <path d="M78 65 Q85 58 92 65" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
        <path d="M108 65 Q115 58 122 65" fill="none" stroke="#5D4037" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="100" cy="85" rx="16" ry="12" fill="#FF87A0"/>
        <circle cx="94" cy="85" r="3" fill="#E05580"/>
        <circle cx="106" cy="85" r="3" fill="#E05580"/>
        <!-- Big smile -->
        <path d="M82 93 Q100 115 118 93" fill="none" stroke="#E05580" stroke-width="3" stroke-linecap="round"/>
        <circle cx="72" cy="82" r="10" fill="#FF87A0" opacity="0.5"/>
        <circle cx="128" cy="82" r="10" fill="#FF87A0" opacity="0.5"/>
        <!-- Arms up! -->
        <ellipse cx="42" cy="110" rx="12" ry="25" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(40,42,110)"/>
        <ellipse cx="158" cy="110" rx="12" ry="25" fill="#FFB6C1" stroke="#E88DA0" stroke-width="2" transform="rotate(-40,158,110)"/>
        <ellipse cx="78" cy="175" rx="14" ry="12" fill="#FFB6C1"/>
        <ellipse cx="122" cy="175" rx="14" ry="12" fill="#FFB6C1"/>
        <ellipse cx="78" cy="182" rx="16" ry="8" fill="#E05580"/>
        <ellipse cx="122" cy="182" rx="16" ry="8" fill="#E05580"/>
        <path d="M65 120 Q100 100 135 120 L140 155 Q100 165 60 155 Z" fill="#FF5252" opacity="0.8"/>
        <!-- Stars around -->
        <text x="30" y="35" font-size="20">⭐</text>
        <text x="155" y="30" font-size="18">✨</text>
        <text x="20" y="100" font-size="16">🌟</text>
        <text x="170" y="95" font-size="16">⭐</text>
      </svg>`,

    apple: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="58" rx="32" ry="35" fill="#EF5350"/>
        <ellipse cx="50" cy="58" rx="32" ry="35" fill="none" stroke="#C62828" stroke-width="2"/>
        <ellipse cx="38" cy="52" rx="8" ry="12" fill="#EF9A9A" opacity="0.5"/>
        <path d="M50 25 Q55 15 60 20 Q55 28 50 30 Z" fill="#4CAF50"/>
        <line x1="50" y1="25" x2="50" y2="38" stroke="#795548" stroke-width="3" stroke-linecap="round"/>
        <path d="M50 28 Q60 18 65 22" fill="none" stroke="#4CAF50" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

    butterfly: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Upper wings -->
        <ellipse cx="35" cy="38" rx="25" ry="22" fill="#CE93D8" stroke="#AB47BC" stroke-width="2" transform="rotate(-15,35,38)"/>
        <ellipse cx="65" cy="38" rx="25" ry="22" fill="#CE93D8" stroke="#AB47BC" stroke-width="2" transform="rotate(15,65,38)"/>
        <!-- Lower wings -->
        <ellipse cx="32" cy="60" rx="18" ry="16" fill="#F48FB1" stroke="#EC407A" stroke-width="2" transform="rotate(-10,32,60)"/>
        <ellipse cx="68" cy="60" rx="18" ry="16" fill="#F48FB1" stroke="#EC407A" stroke-width="2" transform="rotate(10,68,60)"/>
        <!-- Wing spots -->
        <circle cx="30" cy="35" r="6" fill="#E1BEE7"/>
        <circle cx="70" cy="35" r="6" fill="#E1BEE7"/>
        <circle cx="32" cy="58" r="4" fill="#F8BBD0"/>
        <circle cx="68" cy="58" r="4" fill="#F8BBD0"/>
        <!-- Body -->
        <ellipse cx="50" cy="50" rx="5" ry="22" fill="#5D4037"/>
        <!-- Head -->
        <circle cx="50" cy="26" r="5" fill="#5D4037"/>
        <!-- Antennae -->
        <path d="M48 22 Q42 10 38 8" fill="none" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
        <path d="M52 22 Q58 10 62 8" fill="none" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
        <circle cx="38" cy="8" r="2.5" fill="#FFD54F"/>
        <circle cx="62" cy="8" r="2.5" fill="#FFD54F"/>
        <!-- Eyes -->
        <circle cx="48" cy="25" r="1.5" fill="white"/>
        <circle cx="52" cy="25" r="1.5" fill="white"/>
      </svg>`,

    cat: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Body -->
        <ellipse cx="50" cy="70" rx="28" ry="25" fill="#FFB74D"/>
        <ellipse cx="50" cy="70" rx="28" ry="25" fill="none" stroke="#F57C00" stroke-width="2"/>
        <!-- Head -->
        <circle cx="50" cy="38" r="22" fill="#FFB74D" stroke="#F57C00" stroke-width="2"/>
        <!-- Ears -->
        <polygon points="32,22 28,6 42,18" fill="#FFB74D" stroke="#F57C00" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="35,20 31,10 41,18" fill="#FF8A65"/>
        <polygon points="68,22 72,6 58,18" fill="#FFB74D" stroke="#F57C00" stroke-width="2" stroke-linejoin="round"/>
        <polygon points="65,20 69,10 59,18" fill="#FF8A65"/>
        <!-- Eyes -->
        <ellipse cx="42" cy="36" rx="4" ry="5" fill="#4CAF50"/>
        <ellipse cx="42" cy="36" rx="2" ry="5" fill="#2E7D32"/>
        <ellipse cx="58" cy="36" rx="4" ry="5" fill="#4CAF50"/>
        <ellipse cx="58" cy="36" rx="2" ry="5" fill="#2E7D32"/>
        <!-- Nose -->
        <polygon points="50,42 47,45 53,45" fill="#FF7043"/>
        <!-- Mouth -->
        <path d="M47 47 Q50 51 53 47" fill="none" stroke="#E65100" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="30" y1="42" x2="42" y2="44" stroke="#8D6E63" stroke-width="1.2"/>
        <line x1="30" y1="46" x2="42" y2="46" stroke="#8D6E63" stroke-width="1.2"/>
        <line x1="58" y1="44" x2="70" y2="42" stroke="#8D6E63" stroke-width="1.2"/>
        <line x1="58" y1="46" x2="70" y2="46" stroke="#8D6E63" stroke-width="1.2"/>
        <!-- Paws -->
        <ellipse cx="36" cy="90" rx="10" ry="6" fill="#FFB74D" stroke="#F57C00" stroke-width="1.5"/>
        <ellipse cx="64" cy="90" rx="10" ry="6" fill="#FFB74D" stroke="#F57C00" stroke-width="1.5"/>
        <!-- Tail -->
        <path d="M78 70 Q90 55 85 40 Q82 32 88 28" fill="none" stroke="#FFB74D" stroke-width="6" stroke-linecap="round"/>
        <path d="M78 70 Q90 55 85 40 Q82 32 88 28" fill="none" stroke="#F57C00" stroke-width="2" stroke-linecap="round"/>
        <!-- Stripes -->
        <path d="M38 30 L42 28" stroke="#F57C00" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M58 30 L62 28" stroke="#F57C00" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,

    // Distractors
    dog: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="65" rx="26" ry="28" fill="#D7CCC8"/>
        <circle cx="50" cy="38" r="22" fill="#D7CCC8" stroke="#A1887F" stroke-width="2"/>
        <ellipse cx="30" cy="30" rx="12" ry="16" fill="#A1887F" transform="rotate(-20,30,30)"/>
        <ellipse cx="70" cy="30" rx="12" ry="16" fill="#A1887F" transform="rotate(20,70,30)"/>
        <circle cx="42" cy="36" r="4" fill="#5D4037"/>
        <circle cx="58" cy="36" r="4" fill="#5D4037"/>
        <circle cx="43" cy="35" r="1.5" fill="white"/>
        <circle cx="59" cy="35" r="1.5" fill="white"/>
        <ellipse cx="50" cy="46" rx="7" ry="5" fill="#5D4037"/>
        <path d="M44 50 Q50 56 56 50" fill="none" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
        <path d="M78 60 Q92 48 88 35" fill="none" stroke="#D7CCC8" stroke-width="6" stroke-linecap="round"/>
      </svg>`,

    flower: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="55" x2="50" y2="95" stroke="#4CAF50" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="38" cy="80" rx="14" ry="6" fill="#66BB6A" transform="rotate(-30,38,80)"/>
        <ellipse cx="62" cy="75" rx="12" ry="5" fill="#66BB6A" transform="rotate(25,62,75)"/>
        <circle cx="50" cy="40" r="10" fill="#FFD54F"/>
        <ellipse cx="50" cy="22" rx="10" ry="12" fill="#FF7043"/>
        <ellipse cx="50" cy="58" rx="10" ry="12" fill="#FF7043"/>
        <ellipse cx="32" cy="33" rx="10" ry="12" fill="#FF8A65" transform="rotate(60,32,33)"/>
        <ellipse cx="68" cy="33" rx="10" ry="12" fill="#FF8A65" transform="rotate(-60,68,33)"/>
        <ellipse cx="32" cy="47" rx="10" ry="12" fill="#FF7043" transform="rotate(-60,32,47)"/>
        <ellipse cx="68" cy="47" rx="10" ry="12" fill="#FF7043" transform="rotate(60,68,47)"/>
        <circle cx="50" cy="40" r="10" fill="#FFD54F"/>
      </svg>`,

    fish: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="48" cy="50" rx="30" ry="20" fill="#42A5F5"/>
        <polygon points="78,50 95,35 95,65" fill="#42A5F5"/>
        <polygon points="78,50 95,35 95,65" fill="none" stroke="#1E88E5" stroke-width="2"/>
        <ellipse cx="48" cy="50" rx="30" ry="20" fill="none" stroke="#1E88E5" stroke-width="2"/>
        <circle cx="35" cy="46" r="4" fill="white"/>
        <circle cx="35" cy="46" r="2" fill="#1A237E"/>
        <path d="M40 55 Q45 58 50 55" fill="none" stroke="#1E88E5" stroke-width="1.5" stroke-linecap="round"/>
        <ellipse cx="52" cy="38" rx="5" ry="3" fill="#90CAF9"/>
      </svg>`,

    star: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,8 61,35 90,38 68,58 75,88 50,73 25,88 32,58 10,38 39,35" fill="#FFD54F" stroke="#FFA000" stroke-width="2"/>
        <polygon points="50,18 57,35 75,37 62,50 66,68 50,60 34,68 38,50 25,37 43,35" fill="#FFEB3B" opacity="0.6"/>
      </svg>`,

    balloon: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="40" rx="24" ry="30" fill="#EF5350"/>
        <ellipse cx="42" cy="32" rx="6" ry="10" fill="#EF9A9A" opacity="0.5"/>
        <polygon points="44,68 50,70 56,68 53,72 47,72" fill="#C62828"/>
        <path d="M50 72 Q45 82 50 95 Q55 82 50 72" fill="none" stroke="#9E9E9E" stroke-width="1.5"/>
      </svg>`,

    tree: () => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="44" y="60" width="12" height="35" fill="#8D6E63" rx="3"/>
        <circle cx="50" cy="38" r="30" fill="#66BB6A"/>
        <circle cx="35" cy="45" r="18" fill="#4CAF50"/>
        <circle cx="65" cy="45" r="18" fill="#4CAF50"/>
        <circle cx="50" cy="28" r="20" fill="#81C784"/>
        <circle cx="38" cy="35" r="5" fill="#A5D6A7" opacity="0.6"/>
      </svg>`,
  };

  // ---- Game Data ----
  const ROUNDS = [
    {
      letter: 'A',
      word: 'Apple',
      illustration: 'apple',
      prompt: 'Which one starts with A?',
      options: [
        { id: 'apple', label: 'Apple', icon: 'apple', correct: true },
        { id: 'fish', label: 'Fish', icon: 'fish', correct: false },
        { id: 'star', label: 'Star', icon: 'star', correct: false },
        { id: 'tree', label: 'Tree', icon: 'tree', correct: false },
      ],
      celebrateMsg: 'A is for Apple!',
    },
    {
      letter: 'B',
      word: 'Butterfly',
      illustration: 'butterfly',
      prompt: 'Which one starts with B?',
      options: [
        { id: 'flower', label: 'Flower', icon: 'flower', correct: false },
        { id: 'butterfly', label: 'Butterfly', icon: 'butterfly', correct: true },
        { id: 'dog', label: 'Dog', icon: 'dog', correct: false },
        { id: 'apple', label: 'Apple', icon: 'apple', correct: false },
      ],
      celebrateMsg: 'B is for Butterfly!',
    },
    {
      letter: 'C',
      word: 'Cat',
      illustration: 'cat',
      prompt: 'Which one starts with C?',
      options: [
        { id: 'balloon', label: 'Balloon', icon: 'balloon', correct: false },
        { id: 'fish', label: 'Fish', icon: 'fish', correct: false },
        { id: 'cat', label: 'Cat', icon: 'cat', correct: true },
        { id: 'flower', label: 'Flower', icon: 'flower', correct: false },
      ],
      celebrateMsg: 'C is for Cat!',
    },
  ];

  const INTRO_TEXTS = [
    "Hello! I'm Pinky the pig! 🐷",
    "Today we're going on a letter adventure in the countryside!",
    "Let's learn letters A, B, and C together!",
  ];

  // ---- Audio (Web Audio API - simple tones) ----
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, duration, type = 'sine', volume = 0.15) {
    if (!audioCtx) return;
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
    } catch (e) { /* audio not critical */ }
  }

  function playCorrect() {
    playTone(523, 0.15); // C5
    setTimeout(() => playTone(659, 0.15), 100); // E5
    setTimeout(() => playTone(784, 0.3), 200); // G5
  }

  function playWrong() {
    playTone(220, 0.25, 'triangle', 0.1);
  }

  function playCelebrate() {
    const notes = [523, 587, 659, 698, 784, 880, 988, 1047];
    notes.forEach((n, i) => setTimeout(() => playTone(n, 0.2, 'sine', 0.1), i * 80));
  }

  function playClick() {
    playTone(440, 0.08, 'sine', 0.08);
  }

  // ---- State ----
  let currentRound = 0;
  let currentIntroStep = 0;
  let starsEarned = [];

  // ---- DOM Helpers ----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function showScreen(id) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    $(`#screen-${id}`).classList.add('active');
  }

  function showPhase(id) {
    $$('.phase').forEach(p => p.classList.add('hidden'));
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

  // ---- Confetti ----
  function spawnConfetti(count = 30) {
    const colors = ['#FF5252', '#FFD54F', '#4CAF50', '#42A5F5', '#CE93D8', '#FF87A0', '#FFB74D'];
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.className = 'confetti';
      div.style.left = Math.random() * 100 + 'vw';
      div.style.background = colors[Math.floor(Math.random() * colors.length)];
      div.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      div.style.animationDelay = Math.random() * 0.5 + 's';
      div.style.width = (8 + Math.random() * 10) + 'px';
      div.style.height = (8 + Math.random() * 10) + 'px';
      div.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(div);
      setTimeout(() => div.remove(), 4000);
    }
  }

  // ---- Setup Piggy SVGs ----
  function renderPiggies() {
    setHTML('#welcome-piggy', SVG.piggyMain());
    setHTML('#intro-piggy', SVG.piggySmall());
    setHTML('#celebrate-piggy', SVG.piggyCelebrate());
  }

  // ---- Progress Bar ----
  function updateProgress() {
    const pct = (currentRound / ROUNDS.length) * 100;
    $('#progress-fill').style.width = pct + '%';

    let starsHTML = '';
    for (let i = 0; i < ROUNDS.length; i++) {
      const earned = starsEarned[i] ? 'earned' : '';
      starsHTML += `<span class="progress-star ${earned}">⭐</span>`;
    }
    setHTML('#progress-stars', starsHTML);
  }

  // ---- Welcome Screen ----
  function setupWelcome() {
    renderPiggies();
    $('#btn-start').addEventListener('click', () => {
      initAudio();
      playClick();
      currentIntroStep = 0;
      showIntroStep();
      showScreen('intro');
    });
  }

  // ---- Intro Screen ----
  function showIntroStep() {
    setText('#intro-text', INTRO_TEXTS[currentIntroStep]);
    // Animate text in
    const el = $('#intro-text');
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.4s, transform 0.4s';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    });
  }

  function setupIntro() {
    $('#btn-intro-next').addEventListener('click', () => {
      playClick();
      currentIntroStep++;
      if (currentIntroStep >= INTRO_TEXTS.length) {
        currentRound = 0;
        starsEarned = [];
        startRound();
      } else {
        showIntroStep();
      }
    });
  }

  // ---- Round Logic ----
  function startRound() {
    if (currentRound >= ROUNDS.length) {
      showFinal();
      return;
    }
    const round = ROUNDS[currentRound];
    updateProgress();

    // Reveal phase
    setText('#letter-display', round.letter);
    setHTML('#letter-word', `${round.letter} is for <strong>${round.word}</strong>`);
    setHTML('#round-illustration', SVG[round.illustration]());

    showScreen('round');
    showPhase('reveal');
  }

  function setupRound() {
    // Reveal -> Pick
    $('#btn-reveal-next').addEventListener('click', () => {
      playClick();
      setupPick();
      showPhase('pick');
    });

    // Celebrate -> next
    $('#btn-celebrate-next').addEventListener('click', () => {
      playClick();
      currentRound++;
      if (currentRound >= ROUNDS.length) {
        showFinal();
      } else {
        startRound();
      }
    });

    // Trace done
    $('#btn-trace-done').addEventListener('click', () => {
      playClick();
      showCelebrate();
    });
  }

  function setupPick() {
    const round = ROUNDS[currentRound];
    setText('#pick-prompt', round.prompt);

    // Shuffle options
    const shuffled = [...round.options].sort(() => Math.random() - 0.5);

    const grid = $('#pick-grid');
    grid.innerHTML = '';

    shuffled.forEach(opt => {
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
    if (card.classList.contains('correct') || card.classList.contains('wrong')) return;

    if (opt.correct) {
      card.classList.add('correct');
      playCorrect();

      // Disable other cards
      $$('.pick-card').forEach(c => {
        c.style.pointerEvents = 'none';
      });

      // Earn star
      starsEarned[currentRound] = true;
      updateProgress();

      // Move to trace after delay
      setTimeout(() => {
        setupTrace();
        showPhase('trace');
      }, 1000);
    } else {
      card.classList.add('wrong');
      playWrong();
      // Reset after animation
      setTimeout(() => card.classList.remove('wrong'), 500);
    }
  }

  // ---- Trace Phase ----
  function setupTrace() {
    const round = ROUNDS[currentRound];
    setText('#trace-guide', round.letter);

    const canvas = $('#trace-canvas');
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.strokeStyle = '#E05580';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let drawing = false;
    let lastX = 0, lastY = 0;

    function getPos(e) {
      const canvasRect = canvas.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      return {
        x: touch.clientX - canvasRect.left,
        y: touch.clientY - canvasRect.top,
      };
    }

    function startDraw(e) {
      e.preventDefault();
      drawing = true;
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
    }

    function moveDraw(e) {
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
    }

    // Remove old listeners by replacing canvas event handling
    const newCanvas = canvas.cloneNode(true);
    canvas.parentElement.replaceChild(newCanvas, canvas);
    newCanvas.id = 'trace-canvas';
    const newCtx = newCanvas.getContext('2d');
    newCtx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    newCtx.strokeStyle = '#E05580';
    newCtx.lineWidth = 8;
    newCtx.lineCap = 'round';
    newCtx.lineJoin = 'round';

    // Re-bind getPos to new canvas
    function getNewPos(e) {
      const canvasRect = newCanvas.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      return {
        x: touch.clientX - canvasRect.left,
        y: touch.clientY - canvasRect.top,
      };
    }

    let d = false, lx = 0, ly = 0;

    newCanvas.addEventListener('mousedown', (e) => {
      e.preventDefault(); d = true;
      const p = getNewPos(e); lx = p.x; ly = p.y;
    });
    newCanvas.addEventListener('mousemove', (e) => {
      e.preventDefault(); if (!d) return;
      const p = getNewPos(e);
      newCtx.beginPath(); newCtx.moveTo(lx, ly); newCtx.lineTo(p.x, p.y); newCtx.stroke();
      lx = p.x; ly = p.y;
    });
    newCanvas.addEventListener('mouseup', (e) => { e.preventDefault(); d = false; });
    newCanvas.addEventListener('mouseleave', () => { d = false; });

    newCanvas.addEventListener('touchstart', (e) => {
      e.preventDefault(); d = true;
      const p = getNewPos(e); lx = p.x; ly = p.y;
    }, { passive: false });
    newCanvas.addEventListener('touchmove', (e) => {
      e.preventDefault(); if (!d) return;
      const p = getNewPos(e);
      newCtx.beginPath(); newCtx.moveTo(lx, ly); newCtx.lineTo(p.x, p.y); newCtx.stroke();
      lx = p.x; ly = p.y;
    }, { passive: false });
    newCanvas.addEventListener('touchend', (e) => { e.preventDefault(); d = false; }, { passive: false });
  }

  // ---- Celebrate Phase ----
  function showCelebrate() {
    const round = ROUNDS[currentRound];
    setText('#celebrate-text', round.celebrateMsg);
    setHTML('#star-burst', '⭐ 🌟 ⭐');
    setHTML('#celebrate-piggy', SVG.piggyCelebrate());
    showPhase('celebrate');
    playCelebrate();
    spawnConfetti(40);

    // Change button text for last round
    if (currentRound >= ROUNDS.length - 1) {
      setText('#btn-celebrate-next', 'See Results!');
    } else {
      setText('#btn-celebrate-next', 'Next Round');
    }
  }

  // ---- Final Screen ----
  function showFinal() {
    showScreen('final');
    playCelebrate();
    spawnConfetti(60);

    setHTML('#trophy-area', '🏆');
    const earned = starsEarned.filter(Boolean).length;
    setText('#final-subtitle', `You learned ${earned} letters today!`);

    let starsHTML = '';
    for (let i = 0; i < ROUNDS.length; i++) {
      starsHTML += `<span class="final-star">${starsEarned[i] ? '⭐' : '☆'}</span>`;
    }
    setHTML('#final-stars', starsHTML);

    $('#btn-replay').addEventListener('click', () => {
      playClick();
      currentRound = 0;
      starsEarned = [];
      currentIntroStep = 0;
      showIntroStep();
      showScreen('intro');
    });
  }

  // ---- Floating decorations ----
  function addFloatingElements(screenId) {
    const screen = $(`#screen-${screenId}`);
    if (!screen) return;
    const items = ['🌸', '🌼', '🦋', '🌻', '🍃'];
    for (let i = 0; i < 5; i++) {
      const el = document.createElement('div');
      el.className = 'float-element';
      el.textContent = items[i % items.length];
      el.style.fontSize = (20 + Math.random() * 20) + 'px';
      el.style.left = (5 + Math.random() * 80) + '%';
      el.style.top = (50 + Math.random() * 30) + '%';
      el.style.animationDelay = (Math.random() * 2) + 's';
      el.style.opacity = 0.6;
      screen.appendChild(el);
    }
  }

  // ---- Init ----
  function init() {
    setupWelcome();
    setupIntro();
    setupRound();
    addFloatingElements('welcome');
    addFloatingElements('final');

    // Try to init audio on first interaction
    document.addEventListener('touchstart', initAudio, { once: true });
    document.addEventListener('click', initAudio, { once: true });
  }

  // Start when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
