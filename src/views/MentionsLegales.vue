<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-white text-7xl font-heading mb-20">
            Mentions Légales 
        </h1>
    </div>

    <div class="ml-accueil">
        <h2 class="text-white text-6xl font-heading mb-10">
        Identité & Coordonnées :
    </h2>

    <p class="text-white text-base font-text mb-10">
        Département métiers du multimédia et de l’internet de Montbéliard <br>
        Établissement Public<br>
        4, place Tharradin 25200 Montbéliard <br>
        Tél. +33 (0)3 81 99 47 34 <br>
        Mail DUT MMI : dut-mmi-montbeliard@univ-fcomte.fr<br>
        Site du MMI : http://mmimontbeliard.com 
    </p>

    <h2 class="text-white text-6xl font-heading mb-10">
        Les Mentions relatives à l'hébergement du site : 
    </h2>

    <p class="text-white text-base font-text mb-10">
       Netlify <br>
        2325 3rd Street, Suite 296, San Francisco, California, 94107, USA<br>
        Site : https://www.netlify.com <br>
        Les contacter : https://www.netlify.com/support/ <br>
        Tél. (415) 691-1573<br>
    </p>

    <p class="text-white text-base font-text mb-10">
        Infomaniak<br>
        Rue Eugène, Marziano 25, 1227 Genève, Suisse<br>
        Site : https://www.infomaniak.com/fr<br>
        Les contacter : https://support.infomaniak.com<br>
        Tél. +41 22 820 35 55<br>
    </p>
    </div>

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