<template>

    <div class="header">
        <div id="image">
            <a href="#main-container"><img src="../assets/1670338567903.jpg" alt="Photo d'un jeune homme noir avec des lunettes"></a>
        </div>

        <br/>

        <div id="menu">
            <ul>
                <a href="#Présentaiotn"><li>Présentation</li></a>
                <a href="#Créations"><li>Créations</li></a>
                <a href="#Formulaire"><li>Formulaire</li></a>
            </ul>        
        </div>
    </div>
    
</template>

<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #045677;
    }
    
    #image img {
        margin: 1em;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        
    }

    #menu {
        margin-top: 50px;
        margin-left: 100px;
    }

    a {
        color: white;
        list-style: none;
    }


</style>

<script setup></script>