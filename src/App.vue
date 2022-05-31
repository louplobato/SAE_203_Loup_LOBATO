<template>
  <header class="flex justify-between items-center p-5 w-full fixed">
    <RouterLink to="/">
      <logos></logos>
    </RouterLink>
    <button
          class="relative z-50 text-xl"
          aria-haspopup="true"
          aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert"
        >
          <menuicon></menuicon>
    </button>
    
    <div
          id="menu"
          class="
            translate-x-full
            motion-safe:duration-1000 motion-safe:transition-transform
            fixed
            inset-0
            bg-fond-light
            pt-32
            pb-32
          "
          :class="{ 'translate-x-0': menuOuvert }"
        >
          <div class="flex flex-col justify-between h-full items-center">
            <RouterLink to="/programmation">
              <bouton PageBtn="La Prog"></bouton>
            </RouterLink>
            
              <bouton PageBtn="Réserver"></bouton>

            <RouterLink to="/Artistes">
              <bouton PageBtn="Artistes"></bouton>
            </RouterLink>

            <RouterLink to="/Festival">
              <bouton PageBtn="Le Festival"></bouton>
            </RouterLink>
          </div>
        </div>

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
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
};


</script>