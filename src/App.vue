<script setup>
  import MainCard from './components/MainCard.vue';
  import FooterCard from './components/FooterCard.vue';
  import HeaderCard from './components/HeaderCard.vue';
</script>

<template>
  <body>
    <header>
      <HeaderCard/>
    </header>

    <main>
      <MainCard></MainCard>
    </main>

    <footer>
      <FooterCard/>
    </footer>
  </body>
  
</template>

<style scoped>

</style>
