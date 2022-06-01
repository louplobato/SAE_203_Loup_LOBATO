<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Oups, cette page n'existe pas
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
       
    </div>

    <p class="text-white text-6xl font-heading ml-accueil mb-24">
        C'est par ici pour retourner sur le site ! 
    </p>

    <RouterLink to="/">
        <bouton class="ml-accueil mb-24" PageBtn="Accueil"></bouton>
    </RouterLink>

</template>

<script>
    import bouton from "../components/button.vue";

    export default {
        components : {
            bouton
        }
    }
</script>
