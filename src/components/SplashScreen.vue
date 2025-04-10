<template>
  <div class="splash-container" :class="{ 'splash-exit': exitStarted }" @click="startExit">
    <div class="splash-content">
      <h1>Bienvenue sur le portfolio de</h1>
      <h1>Briac Villeneuve</h1>
      <p class="blink-text">Cliquez n'importe où pour accéder au site</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dismissed: false,
      exitStarted: false
    }
  },
  methods: {
    startExit() {
      if (this.exitStarted) return;

      this.exitStarted = true;

      // Attendre que l'animation se termine avant de supprimer complètement
      setTimeout(() => {
        this.dismissed = true;
        document.body.classList.remove('no-scroll');
        this.$emit('dismissed');
      }, 1000); // Correspond à la durée de l'animation
    }
  },
  mounted() {
    document.body.classList.add('no-scroll');
  }
}
</script>

<style scoped>
.splash-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.splash-exit {
  opacity: 0;
  transform: scale(1.1);
}

.splash-content {
  text-align: center;
  color: var(--color-text);
  animation: fadeIn 1.5s ease-in-out;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-top: 2rem;
}

.blink-text {
  animation: blink 2s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}
</style>