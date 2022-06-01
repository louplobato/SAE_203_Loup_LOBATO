<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Artistes
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>

    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row w-full justify-evenly justify-items-stretch mb-16">
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
        </div>

        <div class="flex flex-col md:flex-row w-full justify-evenly justify-items-stretch mb-16">
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
        </div>

        <div class="flex flex-col md:flex-row w-full justify-evenly justify-items-stretch mb-16">
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
            <cardArtiste class="flex-1 mx-auto md:mx-5 mb-5"></cardArtiste>
        </div>
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