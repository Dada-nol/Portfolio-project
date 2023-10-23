<template>

    <div class="header">
        <div id="image">
            <a href="#Presentation"><img src="../assets/1670338567903.jpg" alt="Photo d'un jeune homme noir avec des lunettes"></a>
        </div>

        <br/>

        <div id="menu">
            <ul>
                <a href="#Presentation"><li>Présentation</li></a>
                <a href="#Creations"><li>Créations</li></a>
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
        gap: 150px;
        background-color: #045677;
    }
    
    #image img {
        margin: 1em;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        
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
    }

    a:hover{
        text-decoration:underline white
    }

</style>

<script setup>

</script>