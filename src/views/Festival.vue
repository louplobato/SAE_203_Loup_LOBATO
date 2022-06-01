<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Le Festival
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>

    <h2 class="text-white text-6xl font-heading ml-accueil mb-10">
        Le New Landes Metal Fest 
    </h2>

    <div class="flex flex-col items-center">
        <p class="text-white font-text max-w-xl mb-5 text-base text-center">
        Le festival est né de l’idée d’offrir <span class="text-bold">une nouvelle expérience dans la scène métal</span> . Premièrement nous aimerions vous faire découvrir des nouvelles choses 
        dans le metal en vous présentant des groupes “underground” tout en assurant des concerts de qualités dans un environnement agréable.
    </p>

    <p class="text-white font-text max-w-xl mb-5 text-base text-center">
        Le festival se déroule du <span class="text-bold">15 au 17 Juillet à Capbreton</span> ce qui assure un temps ensoleillé et un accès à la plage pour les plus vacanciers d’entre vous.
    </p>

    <p class="text-white font-text max-w-xl mb-5 text-base text-center">
        Nous espérons sincèrement que le festival saura vous faire vibrer car nous sommes envieux de nous développer pour pouvoir vous proposer une expérience encore 
        meilleure pour les prochaines éditions.
    </p>

    <p class="text-white font-text max-w-xl mb-16 text-base text-center">
        Pour cette première édition faites bouger votre tête au rythme de riffs endiablés et prenez part à l’expérience NEW LANDES METAL FEST
    </p>
    </div>

    <p class="text-white font-heading text-5xl text-center px-3 mb-16">
      Venez prendre part à l’expérience 
      <br/><span class="text-tonique-black text-6xl">New Landes Metal Fest</span>
    </p>

    <div class="justify-center flex mx-5 mb-24">
      <bouton PageBtn="Réserver">
    </bouton>
    </div>
    
</template>

<script>
import bouton from "../components/button.vue"

export default {
    components : {
        bouton
    }
}
</script>