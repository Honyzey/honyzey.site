<template>
    <div class="splash-container" :class="{ 'splash-exit': exitStarted }" @click="startExit">
      <div class="splash-content">
        <h1>Bienvenue</h1>
        <p>Cliquez n'importe où pour accéder au site</p>
        <div class="splash-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </div>
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
  
  .splash-icon {
    margin-top: 30px;
    animation: bounce 2s infinite;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
    60% { transform: translateY(-10px); }
  }
  </style>