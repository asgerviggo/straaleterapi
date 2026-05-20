
<style scoped lang="scss">
/* ── Single card ── */
.card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  margin: 1rem;
  width: 32rem;
  height: 21rem;
  border: 1px #21557f solid;
  border-radius: 15px;
  background: #ffffff;
}

/* BG image */
.card__bg {
  position: absolute;
  inset: 0;
  background-image: var(--bg);
  background-size: cover;
  background-position: center;
}
.background {
  width: 90%;
  height: 90%;
  margin: 5%;
  position: relative;
}

/* Stagger card entrance */
.card--0 { animation: cardIn 0.7s 0.2s ease both; }
.card--1 { animation: cardIn 0.7s 0.35s ease both; }
.card--2 { animation: cardIn 0.7s 0.5s ease both; }

@keyframes cardIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

</style>

<template>
  <NuxtLink :to="card.url">
    <div class="card" :style="{ '--bg': `url(${card.image})` }">
      <!-- Background image layer -->
      <div class="background">
        <div class="card__bg" />
      </div>

      <!-- Content -->
      <!-- <div class="card__body"> -->

        <!-- <div class="card__bottom"> -->
          <!-- <div class="card__cta"> -->
            <!-- <span>Enter</span> -->
            <!-- <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"> -->
              <!-- <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/> -->
            <!-- </svg> -->
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->

      <!-- Hover line accent -->
      <div class="card__line" :style="{ background: card.accent }" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
type Card = {
  id: string,
  title: string,
  url: string,
  image: string,
}
const props = defineProps<{
  card: Card
}>()
</script>
