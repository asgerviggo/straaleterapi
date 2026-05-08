<style scoped lang="scss">
  @use '~/assets/css/colors';
  @use '~/assets/css/util';

  footer {
    @extend .col;
    background: colors.$blue;
    color: colors.$white;
    a {
      color: colors.$white;
    }
    display: flex;
    flex-direction: column;
  }
  .column {
    flex: 1;
    margin: 2rem;
    text-align: center;

    span {
      margin: 0.2rem 0;
      font-size: 1.15rem;
      font-weight: 200;
    }
  }

  .contact {
    margin-bottom: 1rem;
  }
  .logos {
    flex: 1;
    align-content: end;
  }
  .left {
    text-align: left;
  }
</style>

<template>
  <footer>
    <div class="row">
      <div class="column left col">
        <span class="current-domain">DCCC stråleterapi</span>
        <a rel="noopener" href="/om-os/tilgaengelighedserklaering/" target="_blank" title="Tilgængelighedserklæring - webtilgængelighed">Tilgængelighedserklæring - webtilgængelighed</a>
      </div>
      <div class="column col">
          <span>Nationalt forskningscenter for stråleterapi</span>
          <span>Støttet af Kræftens Bekæmpelse</span>
          <span>En del af Danish Comprehensive Cancer Center</span>
          <span>Mere forskning - bedre behandling - færre bivirkninger</span>
      </div>
      <div class="column col">
        <span class="contact">Kontakt os på:</span>
        <a rel="noopener" href="mailto:mail@straaleterapi.dk" target="_blank">mail@straaleterapi.dk</a>
        <div class="logos">
          <span>Følg med: </span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="latest-update">Latest update</span>
      <span>Website by Asger Viggo Korreman Nielsen</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
