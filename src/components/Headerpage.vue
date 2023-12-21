<template>

    <div class="header">
        <div id="image">
            <a href="#AboutMe"><img src="../assets/Img/1670338567903.jpg" alt="Photo d'un jeune homme noir avec des lunettes"></a>
        </div>

        <br/>

        <div id="menu">
            <ul>
                <a href="#AboutMe"><li>Présentation</li></a>
                <a href="#Creations"><li>Créations</li></a>
                <a href="#Formulaire"><li>Formulaire</li></a>
            </ul>        
        </div>
    </div>
    
</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #045677;
        background-image: url("../assets/Img/noir.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 250px;
        padding-bottom: 250px;
    }
    
    #image img {
        margin: 1em;
        width: 210px;
        height: 210px;
        object-fit: cover;
        border-radius: 50%;
        border: #2f3233 5px solid;
    }

    ul {
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap: 100px;
    }

    a {
        color: white;
        list-style: none;
        text-decoration-line: none;
        font-size: x-large;
        font-weight: lighter;
    }

    a:hover{
        text-decoration:underline white;
        color: #606060;
    }

</style>

<script setup>

</script>