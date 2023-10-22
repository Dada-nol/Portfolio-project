<script>
    import Modale from './Modale.vue';

    export default {
        name : 'Contenu',
        
        data(){
            return {
                revele: false
            }
        },

        components : {
            'modale' : Modale
        },

        methods: {
            toggleModale: function() {
                this.revele = !this.revele
            },
        }
    };
</script>

<template>

    <div id="main-container">
        <div class="profile">
            <h2>Nardol Darren</h2>
            <p>Développeur web et web mobile</p>
        </div>
    </div>

    <div class="countainer-two">
      <div class="description">
        <p>Développeur front-end débutant...</p>
      </div>
    </div>

    <div class="container my-5"><modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale></div>

    <div v-on:click="toggleModale" class="btn btn-success">Ouvre la modale</div>

</template>