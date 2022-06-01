<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        La Prog'
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>
    

    <div class="flex flex-col items mb-16">
        <agenda></agenda>
    </div>

    <div class="justify-center flex mx-5 mb-24">
      <bouton PageBtn="Réserver">
    </bouton>
    </div>
    
</template>

<script>

import agenda from "../components/agenda.vue"
import bouton from "../components/button.vue"

export default {
    components : {
        agenda,
        bouton
    }
}
</script>