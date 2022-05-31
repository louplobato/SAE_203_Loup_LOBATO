<template>
  <header class="flex justify-between items-center p-5 w-full fixed">
    <RouterLink to="/">
      <logos></logos>
    </RouterLink>
    <menuicon></menuicon>
    

  </header>
  <RouterView />
  <footer>
    <div class="flex flex-col text-white font-text bg-black w-full h-80 items-center justify-center pl-16 pr-16">
      <div class="flex justify-between w-full items-center">
        <logos></logos>
        <div class="flex flex-col">
          <RouterLink to="/Contact">
            <p class="mb-5">
            Contact
          </p>
          </RouterLink>

          <RouterLink to="/MentionsLegales">
            <p>
            Mentions Légales
          </p>
          </RouterLink>
        </div>
      </div>
      <div class="flex flex-col items-center mt-10">
        <p>
          New Landes Metal Fest - 2022
        </p>
        <div class="flex mt-4 justify-between w-36">
          <facebook></facebook>
          <instagram></instagram>
          <youtube></youtube>
          <twitter></twitter>
        </div>
      </div>
    </div>
  </footer>
  
</template>

<script>
import logos from "./components/icons/logo-s.vue"
import logom from "./components/icons/logo-m.vue"
import logoxl from "./components/icons/logo-xl.vue"
import menuicon from "./components/icons/menu.vue"
import facebook from "./components/icons/facebook.vue"
import instagram from "./components/icons/instagram.vue"
import youtube from "./components/icons/youtube.vue"
import twitter from "./components/icons/twitter.vue"
import bouton from "./components/button.vue"
export default {
  components: { logos, logom, logoxl, menuicon, facebook, instagram, youtube, twitter, bouton },
};
</script>