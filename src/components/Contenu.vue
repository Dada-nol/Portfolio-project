<script>
    import Modale from './ModaleCV.vue';

    export default {
        name : 'Contenu',
        
        data(){
            return {
                revele: false,
            }
        },

        components : {
            'modale' : Modale,
            
        },

        methods: {
            toggleModale: function() {
                this.revele = !this.revele
            },
        }
    };
</script>

<template>

    <div class="title">
        <h2>A propos de moi...</h2>
    </div>

    <div id="Presentation">
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
    </div>
    
    <div class="title">
        <h2>Mes créations</h2>
    </div>

    <div id="Creations">

        <div><modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale></div>

        <div v-on:click="toggleModale" class="btn">
            <img src="../assets/ramen.jpeg" alt="logo gris avec pour texte 'cv html/css' à l'intérieur">
        </div>

        <div v-on:click="toggleModale" class="btn">
            <img src="../assets/CV/HTML/CSS.png" alt="logo gris avec pour texte 'cv html/css' à l'intérieur">
        </div>

        
        <div v-on:click="toggleModale" class="btn">
            <img src="../assets/CDC.png" alt="logo gris avec pour texte 'Cahier des charges' à l'intérieur">
        </div>


        <div v-on:click="toggleModale" class="btn">
            <img src="../assets/commentaire.png" alt="logo gris avec pour texte 'Dynamiser un espace commentaire' à l'intérieur">
        </div>
        
    </div>


    <div class="title">
        <h2>Pour me contacter :</h2>
    </div>
    
    <div id="Formulaire">
        <form>

          <div>
            <label for="first-name">Prénom</label>
            <div>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name">
            </div>
          </div>

          <div>
            <label for="last-name">Nom</label>
            <div>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name">
            </div>
          </div>

          <div>
            <div>
              <label for="message">Message</label>
            </div>
            <div>
              <textarea id="message" name="message"></textarea>
            </div>
          </div>

          <div>
            <button type="submit"  >
              Envoyer
            </button>
          </div>
        </form>
    </div>
    
</template>

<style scoped>

    img {
        margin: 0;
        height: 200px;
        width: 200px;
        object-fit: cover;
        background-color: #045677;
        border-radius: 30%;
    }

    img:hover{
        box-shadow: 0 10px 10px 0 #026a9e,
        0 15px 15px 0 black,
        0 15px 15px 0 rgb(0, 0, 99);
    }

    #Creations {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        background-color: #045677;
    }
    

    .title {
        display: flex;
        justify-content: center;
        background-color: #626270;
    }

   
    form {
        padding: 20px;
        background-color: #626270;
        border: 20px solid #045677;
        border-bottom: 30px solid #045677;
    }

    label {
        margin-bottom: 10px;
        font-weight: bold;
    }

    input[type="text"],
    input[type="email"],

    textarea {
        width: 50%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    textarea {
        width: 80%;
        height: 150px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #045677;
        color: #fff;
        border: none;
        border-radius: 5px;
    }

    button:hover {
        background-color: #0056b3;
    }

</style>