<style scoped lang="scss">
  @use '~/assets/css/colors';
  @use '~/assets/css/util';

  footer {
    background: colors.$blue;
    color: colors.$white;
    font-family: 'DM Sans', sans-serif;
    a {
      color: colors.$white;
    }
    span {
      margin: 0.2rem 0;
      font-size: 1.14rem;
      font-weight: 200;
    }
  }

  .center {
    flex: 1;
  }
  .column {
    margin: 2rem;
    text-align: center;

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
  .title {
    font-size: 1.3rem;
    font-weight: 800;
  }
  .slogan {
    margin-top: 2rem;
  }
</style>

<template>
  <footer class="col">
    <div class="row">
      <div v-if="content.left" class="column left col">
        <span class="current-domain">{{ content.left.domain }}</span>
        <a target="_blank"
          rel="noopener"
          :href="content.left.availability.url"
          :title="content.left.availability.title">
            {{ content.left.availability.title }}
        </a>
      </div>
      <div class="column col">
        <span class="title">{{ content.center.title }}</span>
        <template v-for="sub in content.center.subtitles"> 
          <span>{{ sub }}</span>
        </template>
        <span class="slogan">{{ content.center.slogan }}</span>
      </div>
      <div v-if="content.right" class="column col">
        <span class="contact">{{ content.right.contact.title }}</span>
        <a target="_blank"
          rel="noopener"
          :href="`mailto:${content.right.contact.mail}`"
          :title="content.right.contact.mail">
            {{ content.right.contact.mail }}
        </a>
        <div class="logos">
          <span>{{ content.right.socials.title }}</span>
          <template v-for="social in content.right.socials.places">
            <!-- logo here -->
          </template>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="content.bottom">
      <span class="latest-update">Latest update: </span>
      <span> Date of update </span>
      <span>Website by Asger Viggo Korreman Nielsen</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = defineProps<{
  lang: string
}>()

type Url = string;
type Mail = string;
type Logo = string;
type FooterContent = {
  left?: {
    domain: string
    availability: {
      title: string,
      url: Url,
    },
  },
  center: {
    title: string,
    subtitles: string[],
    slogan: string,
  },
  right?: {
    contact: {
      title: string,
      mail: Mail,
    }
    socials: {
      title: string,
      places: {
        url: Url,
        logo: Logo,
      }[]
    }
  },
  bottom?: {
    update: {
      title: string,
      date: Date,
    }
    madeby: {
      title: string,
      name: string[],
    }
  }
  
}
const input: Record<FooterContent> = {
  dk: {
    left: {
      domain: 'DCCC Stråleterapi',
      availability: {
        title: 'Tilgængelighedserklæring - webtilgængelighed',
        url: '/om-os/tilgaengelighedserklaering/',
      },
    },
    center: {
      title: 'Nationalt Forskningscenter for Stråleterapi',
      subtitles: [
        'Støttet af Kræftens Bekæmpelse',
        'En del af Danish Comprehensive Cancer Center',
      ],
      slogan: 'Mere forskning - Bedre behandling - Færre bivirkninger',
    },
    right: {
      contact: {
        title: 'Kontakt os på:',
        mail: 'mail@straaleterapi.dk',
      },
      socials: {
        title: 'Følg med:',
        places: [],
      }
    },
  },
  en: {
    left: {
      domain: 'DCCC Radiotherapy',
      availability: {
        title: 'Availability declaration',
        url: '/om-os/tilgaengelighedserklaering/',
      },
    },
    center: {
      title: 'Nationalt Forskningscenter for Stråleterapi',
      subtitles: [
        'Støttet af Kræftens Bekæmpelse',
        'En del af Danish Comprehensive Cancer Center',
      ],
      slogan: 'Mere forskning - Bedre behandling - Færre bivirkninger',
    },
    right: {
      contact: {
        title: 'Kontakt os på:',
        mail: 'mail@straaleterapi.dk',
      },
      socials: {
        title: 'Følg med:',
        places: [],
      }
    },
  },
}
const content = input[props.lang];
</script>
