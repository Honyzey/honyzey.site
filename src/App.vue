<template>

  <div>

    <SplashScreen v-if="showSplash" @dismissed="hideSplash" />

    <div class="app-container" :class="{ 'app-visible': !showSplash }">

      <Header />

      <main class="content">

        <EpreuveE5 />

      </main>

      <Footer />

    </div>

  </div>


</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SplashScreen from './components/SplashScreen.vue';

import EpreuveE5 from './components/sections/EpreuveE5.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SplashScreen,
    EpreuveE5
  },

  data() {
    return {
      showSplash: true
    }
  },

  methods: {
    hideSplash() {
      this.showSplash = false;
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-visible {
  opacity: 1;
  transform: scale(1);
}

.content {
  flex: 1;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}

body.no-scroll {
  overflow: hidden;
}
</style>