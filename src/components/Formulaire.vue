<script>
    export default {
        name: 'Formulaire',

        data() {
            return{
                errors: [],
                text: [],
                firstname:null,
                lastname:null,
                message: null
            }
        },

        methods:{
            login(e) {
                
                e.preventDefault();
                this.text=[];

                if(this.firstname && this.lastname && this.message) {
                    this.text.push("Votre message a bien été envoyé à l'adresse nardol.darren@gmail.com");
                }
                this.errors=[];
                    
                if(!this.firstname) {
                    this.errors.push("firstname is requiered");
                } 

                if(!this.lastname) {
                    this.errors.push("lastname is requiered");
                }

                if(!this.message) {
                    this.errors.push("message is requiered");
                }

            },
        },
    }
</script>

<template>

    <div class="title">
        <h2>Pour me contacter :</h2>
    </div>
    
    <section id="Formulaire">

        <div class="validation">
                <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p v-if="text.length">
                <b>MESSAGE CONFIRMATION</b>
                    <ul>
                        <li v-for="text in text">{{ text }}</li>
                    </ul>
                
            </p>
            </div>

        <form @submit="login">
            
          <div class="first-name">
            <label for="first-name">Prénom</label>
            <div>
              <input type="text" name="first-name" id="first-name" v-model="firstname">
            </div>
          </div>

          <div class="last-name">
            <label for="last-name">Nom</label>
            <div>
              <input type="text" name="last-name" id="last-name" v-model="lastname">
            </div>
          </div>

          <div class="message">
            <div>
              <label for="message">Message</label>
            </div>
            <div>
              <textarea id="message" name="message" v-model="message"></textarea>
            </div>
          </div>

          <div class="submit">
            <input type="submit">
          </div>

        </form>

        <div id="error-message">
            <p>Tous les champs doivent être remplis</p>
        </div>

    </section>

</template>

<style scoped>

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

    .first-name {
        margin-left: 250px;
        grid-area: first-name;
    }

    .last-name{
        margin-right: 250px;
        grid-area: last-name;
    }

    .message {
        margin-left: 250px;
        grid-area: message;
    }

    .submit {
        grid-area: submit;
        margin-left: 300px;
        margin-right: 300px;
    }

    form {
        padding: 20px;
        background-color: #2d2d2d;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "first-name last-name"
        "message message"
        "submit submit";
        background-image: url("../assets/Img/noir.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .validation {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: larger;
        background-color: #aeaeae;
    }

    label {
        margin-bottom: 10px;
        color: #fff;
    }

    input {
        width: 450px;
        height: 50px;
    }

    textarea {
        width: 80%;
        height: 150px;
        padding: 10px;
        margin-bottom: 20px;
    }

    button {
        width: 100%;
        padding: 10px;
        opacity: 50% ;
        color: #000;
        border: #000 solid 1px;
    }

    button:hover {
        background-color: #fff;
    }

    #error-message{
        display: none;
    }
</style>