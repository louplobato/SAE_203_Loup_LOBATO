<template>
  <main>
    <div class="w-full bg-[url('public/img/background-image-sae.jpg')] h-785  bg-center bg-cover pl-accueil flex items-end pb-64 justify-between xl:pr-accueil">
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
      <RouterLink to="/Artistes">
        <bouton PageBtn="Artistes"></bouton>
      </RouterLink>

      <RouterLink to="/Programmation">
        <bouton PageBtn="La Prog"></bouton>
      </RouterLink>

      <RouterLink>
        <bouton></bouton>
      </RouterLink>
    <div>

    </div>
  </main>
</template>

<script>
import logoxl from "../components/icons/logo-xl.vue"
import bouton from "../components/button.vue"
export default {
  components : {
    logoxl,
    bouton
  }
};
</script>