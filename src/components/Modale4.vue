<template>
    <div class="bloc-modale" v-if="revele4">
        <div class="overlay" v-on:click="toggleModale4">
            <div class="modale card" v-on:click="toggleModale4">
                <div class="btn-modale btn btn-danger" v-on:click="toggleModale4">x</div>
                <img src="../assets/Img/Exercice javascript.png" alt="image d'un projet où j'ai dû rendre un espace commentaire plus dynamique à l'aide de javascript.">
                <a target="blank" href="https://github.com/Dada-nol/Dynamiser-un-espace-commentaire.git">Repository Github de ce projet.</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .bloc-modale{
        position: fixed;
    }

    .overlay{
        background: rgba(0,0,0,0.5);
        position : fixed;
        top : 0;
        bottom : 0;
        left: 0;
        right : 0;
    }

    .btn-modale{
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .modale{
        background: #626270;
        color: #333;
        padding: 50px;
        position:fixed;
        
    }

    img{
        width: 150px;
        height:150px;
        object-fit: cover;
    }

    a {
        color: white;
    }
</style>

<script>
    export default{
        name: 'Modale4',
        props: ['revele4', 'toggleModale4'],
    }
</script>