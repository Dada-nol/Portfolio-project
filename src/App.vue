<script setup>
  import ContenuVue from './components/Contenu.vue';
  import Footerpage from './components/Footerpage.vue';
  import HeaderCard from './components/HeaderCard.vue';
  import Modale from './components/Modale.vue';
</script>

<template>
  
    
      <HeaderCard/>
    

    
      <ContenuVue/>
      <router-view></router-view>
    

    
      <Footerpage/>
    
  
  
</template>

<style scoped>
  
</style>
