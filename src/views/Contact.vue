<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Contact
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>

    <p class="text-white font-heading text-6xl ml-accueil mb-24">
        Contactez nous ! 
    </p>

    <contactform class="ml-accueil mb-24"></contactform>

    <div class="justify-center flex mx-5 mb-24">
      <bouton PageBtn="Réserver">
    </bouton>
    </div>
</template>

<script>
import Contactform from "../components/Contactform.vue";
import bouton from "../components/button.vue";
export default {
    components :{
        Contactform,
        bouton
    }
}
</script>