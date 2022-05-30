<template>
  <header class="flex justify-between items-center p-5">
    <logos></logos>
    <menuicon></menuicon>
    

  </header>

  <RouterView />
</template>

<script>
import logos from "./components/icons/logo-s.vue"
import logom from "./components/icons/logo-m.vue"
import logoxl from "./components/icons/logo-xl.vue"
import menuicon from "./components/icons/menu.vue"
export default {
  components: { logos, logom, logoxl, menuicon, },
};
</script>