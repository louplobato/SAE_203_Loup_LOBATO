<template>
    <div class="flex-col flex justify-between w-3/4 ml-auto mr-auto lg:flex-row">
        <div class="flex flex-initial">
            <div>
                <p class="text-white font-heading text-4xl text-center mb-6">
                Vendredi 15 Juillet
            </p>

            <horairesconcert ArtisteName="Deathspell Omega" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Ulcerate" Heure="21h" class="mb-6"></horairesconcert>
            </div>

            
        </div>
        <svg width="5" height="475" viewBox="0 0 5 475" fill="none" mlns="http://www.w3.org/2000/svg " class="hidden lg:block">
            <line x1="2.5" y1="2.5" x2="2.5" y2="472.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
        <div class="flex flex-initial">
            <div>
                <p class="text-white font-heading text-4xl text-center mb-6">
                Vendredi 15 Juillet
            </p>

            <horairesconcert ArtisteName="Deathspell Omega" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Ulcerate" Heure="21h" class="mb-6"></horairesconcert>
            </div>

            
        </div>
        <svg width="5" height="475" viewBox="0 0 5 475" fill="none" xmlns="http://www.w3.org/2000/svg"  class="hidden lg:block">
            <line x1="2.5" y1="2.5" x2="2.5" y2="472.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
        <div class="flex ">
            <div class="flex flex-col flex-initial">
            <p class="text-white font-heading text-4xl text-center mb-6">
                Dimanche 17 Juillet
            </p>

            <horairesconcert ArtisteName="Regarde les hommes tomber" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Hypno5e" Heure="21h" class="mb-6"></horairesconcert>
        </div>
        </div>
        
    </div>
</template>

<script>
import horairesconcert from "../components/horairesconcert.vue"

export default {
    components : {
        horairesconcert,
    }
}
</script>