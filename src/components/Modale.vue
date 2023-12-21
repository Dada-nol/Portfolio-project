<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale">
            <div class="modale card" v-on:click="toggleModale">
                <div class="btn-modale btn btn-danger" v-on:click="toggleModale">x</div>
                <p>Ramen Master</p>
                <p>Site créée le 23 octobre 2023</p>
                <p>Technologies utilisées : HTML, CSS, JavaScript</p>
                <img src="../assets/Img/ramen.jpeg" alt="image d'un projet où j'ai dû réaliser un site pour un restaurant japonais fictif.">
                <a target="blank" href="https://github.com/Dada-nol/Ramen-master.git">Repository Github de ce projet.</a>
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
        name: 'Modale',
        props: ['revele', 'toggleModale'],
    }
</script>
