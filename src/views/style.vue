<template>

    <div class="flex pt-32 mb-28">
        <div class="w-24 h-24 mx-5 bg-tonique">

        </div>

        <div class="w-24 h-24 mx-5 bg-tonique-black">

        </div>

        <div class="w-24 h-24 mx-5 bg-fond border-2">

        </div>

        <div class="w-24 h-24 mx-5 bg-fond-light">

        </div>
    </div>

    <p class="text-white font-text text-2xl">
        Libre Bar Code 128
    </p>

    <p class="text-white font-bar text-7xl mb-10">
        New Landes <br/> Metal Fest
    </p>

    <p class="text-white font-text text-2xl">
        Outfit
    </p>

    <p class="text-white font-text text-7xl mb-10">
        New Landes <br/> Metal Fest
    </p>

    <p class="text-white font-text text-2xl">
        Germania One
    </p>

    <p class="text-white font-heading text-7xl mb-28">
        New Landes <br/> Metal Fest
    </p>
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


        <Bouton PageBtn="Envoyer" class="mb-24"></Bouton>

    <cardArtiste class="mb-24"></cardArtiste>

    <horairesconcert ArtisteName="Hypno5e" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Deathspell Omega" Heure="19h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Ulcerate" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Meshuggah" Heure="21h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="The Great Old Ones" Heure="19h" class="mb-3"></horairesconcert>
    <horairesconcert ArtisteName="Regarde les hommes tomber" Heure="19h" class="mb-24"></horairesconcert>

    

    <agenda class="mb-24"></agenda>

    <concert class="mb-24"></concert>
    
    <contactform class="mb-24"></contactform>
    
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