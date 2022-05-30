<template>
    <RouterLink to="/Programmation" >
        <Bouton PageBtn="La Prog" class="mb-5"></Bouton>
    </RouterLink>

    <RouterLink to="/Artistes" >
        <Bouton PageBtn="Artistes" class="mb-5"></Bouton>
    </RouterLink>

    <RouterLink to="/Festival" >
        <Bouton PageBtn="Le Festival" class="mb-5"></Bouton>
    </RouterLink>


        <Bouton PageBtn="Réserver" class="mb-5"></Bouton>


        <Bouton PageBtn="Envoyer" class="mb-5"></Bouton>

    <cardArtiste></cardArtiste>
    
    
</template>

<script>
import Bouton from "../components/button.vue";
import cardArtiste from "../components/cardArtiste.vue"

export default {
    components : {
        Bouton,
        cardArtiste,
    }
}
</script>