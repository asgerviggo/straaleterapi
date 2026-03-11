<template>
  <div class="splash">
    <!-- Ambient background -->
    <div class="ambient" />

    <!-- Header -->
    <header class="header">
      <div class="wordmark">ACME</div>
      <nav class="nav">
        <span>Est. 2024</span>
      </nav>
    </header>

    <!-- Hero text -->
    <section class="hero">
      <p class="eyebrow">Welcome</p>
      <h1 class="hero-title">
        Choose your<br /><em>destination.</em>
      </h1>
    </section>

    <!-- Cards -->
    <main class="cards-grid">
      <a
        v-for="(card, i) in cards"
        :key="card.id"
        :href="`https://${card.subdomain}.acme.com`"
        class="card"
        :class="`card--${i}`"
        :style="{ '--bg': `url(${card.image})` }"
        @mouseenter="hovered = card.id"
        @mouseleave="hovered = null"
      >
        <!-- Background image layer -->
        <div class="card__bg" />

        <!-- Grain overlay -->
        <div class="card__grain" />

        <!-- Color tint -->
        <div class="card__tint" :style="{ background: card.tint }" />

        <!-- Content -->
        <div class="card__body">
          <div class="card__top">
            <span class="card__index">0{{ i + 1 }}</span>
            <span class="card__subdomain">{{ card.subdomain }}.acme.com</span>
          </div>

          <div class="card__bottom">
            <p class="card__label">{{ card.label }}</p>
            <h2 class="card__title">{{ card.title }}</h2>
            <p class="card__desc">{{ card.description }}</p>
            <div class="card__cta">
              <span>Enter</span>
              <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Hover line accent -->
        <div class="card__line" :style="{ background: card.accent }" />
      </a>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <span>© 2024 Acme Inc.</span>
      <span class="footer-dot" />
      <span>All rights reserved</span>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref(null)

const cards = [
  {
    id: 'dccc',
    subdomain: 'dccc',
    label: 'DCCC label',
    title: 'DCCC',
    description: 'Description of DCCC',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    tint: 'linear-gradient(160deg, rgba(10,8,6,0.35) 0%, rgba(10,8,6,0.82) 100%)',
    accent: '#E8C97A',
  },
  {
    id: 'bigart',
    subdomain: 'bigart',
    label: 'BIGART label',
    title: 'BIGART',
    description: 'Description of BIGART',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80',
    tint: 'linear-gradient(160deg, rgba(6,10,14,0.3) 0%, rgba(6,10,14,0.85) 100%)',
    accent: '#7AB8E8',
  },
  {
    id: 'desire',
    subdomain: 'desire',
    label: 'DESIRE label',
    title: 'DESIRE',
    description: 'Description of DESIRE',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80',
    tint: 'linear-gradient(160deg, rgba(8,6,14,0.3) 0%, rgba(8,6,14,0.85) 100%)',
    accent: '#B07AE8',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

/* ── Reset & base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.splash {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', sans-serif;
  --bg: #FFFFFF;
  --surface: #141414;
  --border: rgba(255,255,255,0.08);
  --text: #F0EDE8;
  --muted: rgba(240,237,232,0.45);

  min-height: 100dvh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  display: flex;
  flex-direction: column;
  padding: 0 clamp(1.5rem, 4vw, 3.5rem);
  overflow-x: hidden;
  animation: splashIn 0.6s ease both;
}

@keyframes splashIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Ambient glow ── */
.ambient {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 20% 60%, rgba(232,201,122,0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 50% at 80% 30%, rgba(122,184,232,0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── Header ── */
.header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid var(--border);
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.3em;
  color: var(--text);
}

.nav {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ── Hero ── */
.hero {
  position: relative;
  z-index: 10;
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem);
}

.eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.hero-title em {
  font-style: italic;
  color: rgba(240,237,232,0.7);
}

/* ── Cards grid ── */
.cards-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5px;
  flex: 1;
  border: 1px solid var(--border);
  overflow: hidden;
  border-radius: 2px;
  margin-bottom: 1.5px;
}

/* ── Single card ── */
.card {
  position: relative;
  display: block;
  text-decoration: none;
  color: var(--text);
  min-height: clamp(360px, 52vh, 600px);
  overflow: hidden;
  cursor: pointer;
  outline: none;
}

/* BG image */
.card__bg {
  position: absolute;
  inset: 0;
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
  transform: scale(1.06);
  transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.card:hover .card__bg,
.card:focus-visible .card__bg {
  transform: scale(1.0);
}

/* Grain */
.card__grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
  opacity: 0.4;
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* Tint */
.card__tint {
  position: absolute;
  inset: 0;
  transition: opacity 0.5s ease;
}

/* Content */
.card__body {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem;
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card__index {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(240,237,232,0.4);
  letter-spacing: 0.05em;
}

.card__subdomain {
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(240,237,232,0.5);
  background: rgba(0,0,0,0.3);
  padding: 0.3em 0.7em;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 2px;
  backdrop-filter: blur(8px);
  transition: background 0.3s ease, color 0.3s ease;
}

.card:hover .card__subdomain {
  background: rgba(255,255,255,0.12);
  color: rgba(240,237,232,0.9);
}

.card__bottom {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.card__label {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(240,237,232,0.5);
}

.card__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.card__desc {
  font-size: 0.78rem;
  line-height: 1.65;
  color: rgba(240,237,232,0.6);
  max-width: 28ch;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
}

.card:hover .card__desc,
.card:focus-visible .card__desc {
  opacity: 1;
  transform: translateY(0);
}

/* CTA */
.card__cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(240,237,232,0.5);
  margin-top: 0.5rem;
  transition: color 0.3s ease, gap 0.3s ease;
}

.card:hover .card__cta,
.card:focus-visible .card__cta {
  color: var(--text);
  gap: 0.75rem;
}

.cta-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.card:hover .cta-arrow,
.card:focus-visible .cta-arrow {
  transform: translateX(4px);
}

/* Accent line */
.card__line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card:hover .card__line,
.card:focus-visible .card__line {
  transform: scaleX(1);
}

/* Stagger card entrance */
.card--0 { animation: cardIn 0.7s 0.2s ease both; }
.card--1 { animation: cardIn 0.7s 0.35s ease both; }
.card--2 { animation: cardIn 0.7s 0.5s ease both; }

@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Footer ── */
.footer {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 0;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.footer-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--muted);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .card {
    min-height: 300px;
  }
  .card__desc {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.6rem;
  }
}
</style>
