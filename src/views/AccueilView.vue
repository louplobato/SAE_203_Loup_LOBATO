<template>
  <main>
    <div class="w-full bg-[url('/public/img/background-image-sae.jpg')] h-1100  bg-center bg-cover pl-accueil flex items-end pb-64 justify-between xl:pr-accueil">
      <div class="">
        <h1 class="font-bar text-8xl text-tonique-black">
        New Landes <br>Metal Fest
      </h1>
      <p class="font-heading text-6xl text-white">
        15-16-17 Juillet 2022
      </p>
      </div>

      <logoxl class="hidden xl:block"></logoxl>

      
    </div>
     <div class="flex justify-center mb-28">
       <div class="flex flex-col justify-between w-fit xl:flex-row xl:w-3/4">
      <RouterLink to="/Artistes" class="mb-6">
        <bouton PageBtn="Artistes"></bouton>
      </RouterLink>

      <RouterLink to="/Programmation" class="mb-6">
        <bouton PageBtn="La Prog"></bouton>
      </RouterLink>

      <RouterLink to="/Festival" class="mb-6">
        <bouton PageBtn="Le Festival"></bouton>
      </RouterLink>
    </div>
     </div>

     <div class="w-full bg-[url('/public/img/background-bande-sae.jpg')] h-500 bg-cover pl-accueil flex flex-col justify-center bg-center mb-16">
       <p class="text-7xl font-heading text-white">
         Découvrez le
       </p>

       <p class="text-7xl font-heading text-tonique-black">
         NEW LANDES <br> METAL FEST
       </p>
     </div>
    

    <div class="flex flex-col md:flex-row w-full justify-around justify-items-stretch mb-16">
      <cardArtiste class="flex-1 mx-auto md:mx-7 mb-5"></cardArtiste>
      <cardArtiste class="flex-1 mx-auto md:mx-7 mb-5"></cardArtiste>
      <cardArtiste class="flex-1 mx-auto md:mx-7 mb-5"></cardArtiste>
    </div>

    <p class="text-white font-heading text-5xl text-center px-3 mb-16">
      Le <span class="text-tonique-black text-6xl">15</span> , <span class="text-tonique-black text-6xl">16</span> et <span class="text-tonique-black text-6xl">17</span> 
      Juillet à <br> <span class="text-tonique-black text-6xl">Capbreton</span>
    </p>

    <p class="text-white font-heading text-5xl text-center px-3 mb-16">
      Venez prendre part à l’expérience 
      <br/><span class="text-tonique-black text-6xl">New Landes Metal Fest</span>
    </p>

    <div class="justify-center flex mx-5 mb-24">
      <bouton PageBtn="Réserver">
    </bouton>
    </div>
    
  </main>
</template>

<script>
import logoxl from "../components/icons/logo-xl.vue"
import bouton from "../components/button.vue"
import cardArtiste from "../components/cardArtiste.vue"
export default {
  components : {
    logoxl,
    bouton,
    cardArtiste,
  }
};
</script>