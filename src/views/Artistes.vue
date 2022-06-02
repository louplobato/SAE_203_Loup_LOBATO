<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Artistes
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full justify-items-center">

            <cardArtiste class="mb-5"></cardArtiste>
            <cardArtiste class="mb-5"></cardArtiste>


            <cardArtiste class="mb-5"></cardArtiste>
            <cardArtiste class="mb-5"></cardArtiste>


            <cardArtiste class="mb-5"></cardArtiste>
            <cardArtiste class="mb-5"></cardArtiste>
    </div>

    <div class="justify-center flex mx-5 mb-24">
      <bouton PageBtn="Réserver">
    </bouton>
    </div>

</template>

<script>
import cardArtiste from "../components/cardArtiste.vue"
import bouton from "../components/button.vue"
export default {
    components : {
        cardArtiste,
        bouton
    }
}
</script>