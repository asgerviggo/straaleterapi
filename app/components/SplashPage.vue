<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

@keyframes splashIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Cards grid ── */
.card-holder {
  height: 100vh;
  background-image:
    conic-gradient(from 0.75turn at 100% 95%, #21557f 0deg, transparent 0.7%, #21557f 360deg, transparent 100%),
    conic-gradient(from 0.25turn at 0% 5%, #21557f 0deg, transparent 0.7%, #21557f 360deg, transparent 100%);
  background-repeat: no-repeat;
  //justify-content: space-around;
  //transition: all 0.3s;
  user-select: none;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .card-holder {
    flex-direction: column;
  }
  .card {
    min-height: 300px;
  }
}
</style>

<template>
  <main class="row center card-holder">
    <template
      v-for="(card, i) in cards"
      :key="card.id"
    >
      <Card :card="card" />
    </template>
  </main>
</template>

<script setup>
const hovered = ref(null)

const cards = [
  {
    id: 'aim',
    title: 'AIM@CANCER',
    path: 'aim',
    image: '/aim.jpg',
  },
  {
    id: 'dccc',
    title: 'DCCC-RT',
    path: 'dccc',
    image: '/dccc.jpg',
  },
]
</script>
