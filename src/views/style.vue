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

    <horairesconcert ArtisteName="Hypno5e" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Deathspell Omega" Heure="19h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Ulcerate" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Meshuggah" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="The Great Old Ones" Heure="19h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Regarde les hommes tomber" Heure="19h" class="mb-3"></horairesconcert>

    

    <agenda></agenda>

    <concert class="mb-5"></concert>
    
    <contactform></contactform>
    
</template>

<script>
import Bouton from "../components/button.vue";
import cardArtiste from "../components/cardArtiste.vue"
import horairesconcert from "../components/horairesconcert.vue"
import agenda from "../components/agenda.vue"
import concert from "../components/cardConcert.vue"
import contactform from "../components/Contactform.vue"

export default {
    components : {
        Bouton,
        cardArtiste,
        horairesconcert,
        agenda,
        concert,
        contactform

    }
}
</script>