<script setup>
  import ContenuVue from './components/Contenu.vue';
  import Footerpage from './components/Footerpage.vue';
  import HeaderCard from './components/HeaderCard.vue';
  import Modale from './components/Modale.vue';
</script>

<template>
  <body>
    <header>
      <HeaderCard/>
    </header>

    <main>
      <ContenuVue/>
      <router-view></router-view>
    </main>

    <footer>
      <Footerpage/>
    </footer>
  </body>
  
</template>

<style scoped>
  
</style>
