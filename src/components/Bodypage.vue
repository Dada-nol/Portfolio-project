<script>
    
    import Modale from './Modale.vue';
    import modale2 from './Modale2.vue';
    import modale3 from './Modale3.vue';
    import modale4 from './Modale4.vue';
    import Formulaire from './Formulaire.vue';

    export default {
        name : 'Contenu',
        
        data(){
            return {
                revele: false,
                revele2:false,
                revele3:false,
                revele4:false,
            }
        },

        components : {
    'modale': Modale,
    'modale2': modale2,
    'modale3': modale3,
    'modale4': modale4,
    Formulaire
},

        methods: {
            toggleModale: function() {
                this.revele = !this.revele
            },
            toggleModale2: function() {
                this.revele2 = !this.revele2
            },
            toggleModale3: function() {
                this.revele3 = !this.revele3
            },
            toggleModale4: function() {
                this.revele4 = !this.revele4
            },
        }
    };
    
</script>

<template>

    <div class="title">
        <h2>About me</h2>
    </div>

    <section id="AboutMe">

        <div class="AboutMe_content" id="image">
            <img src="../assets/Img/Ordi.jpeg" alt="">
        </div>

        <div class="AboutMe_content" id="content">
            <div class="profile">
                <h2>Nardol Darren</h2>
                <p>Développeur web et web mobile</p>
                <p>Jeune développeur en apprentissage, issu du "Centre Européen de Formation". Je maitrise les technologies tel que HTML5, CSS, Javascript, Vuejs, ainsi que Git et GitHub. </p>
            </div>
        </div>

    </section>
    
    <div class="title">
        <h2>Mes créations</h2>
    </div>

    <section id="Creations">

        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
        <modale2 v-bind:revele2="revele2" v-bind:toggleModale2="toggleModale2"></modale2>
        <modale3 v-bind:revele3="revele3" v-bind:toggleModale3="toggleModale3"></modale3>
        <modale4 v-bind:revele4="revele4" v-bind:toggleModale4="toggleModale4"></modale4>



        <div v-on:click="toggleModale" class="btn">
            <img class="img" src="../assets/Img/ramen.jpeg" alt="Photo d'un plat de ramen en couleur">
        </div>

        <div v-on:click="toggleModale2" class="btn">
            <img class="img" src="../assets/CV/HTML/CSS.png" alt="logo gris avec pour texte 'cv html/css' à l'intérieur">
        </div>

        
        <div v-on:click="toggleModale3" class="btn">
            <img class="img" src="../assets/Img/CDC.png" alt="logo gris avec pour texte 'Cahier des charges' à l'intérieur">
        </div>


        <div v-on:click="toggleModale4" class="btn">
            <img class="img" src="../assets/Img/commentaire.png" alt="logo gris avec pour texte 'Dynamiser un espace commentaire' à l'intérieur">
        </div>
        
    </section>

    <Formulaire/>
    
    
</template>

<style scoped>

    .img {
        margin: 20px;
        height: 200px;
        width: 200px;
        object-fit: cover;
    }

    .img:hover{
        box-shadow: 10px 10px #fff;
    }

    #AboutMe {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "image content";
        margin-left: 300px;
        margin-right: 300px;
    }

    .AboutMe_content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #image {
        grid-area: image;
    }

    #content {
        grid-area: content;
    }

    #Creations {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #2d2d2d;
    }
    

    .title {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 20px;
        border: solid 3px #2d2d2d;
    }

    h2 {
        font-weight : bold;
    }

</style>