<template>

  <div class="app-container">

    <Header/>

    <main class="content">

      <h1>Mon portfolio</h1>

    </main>

    <Footer/>

  </div>
 
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}
</style>