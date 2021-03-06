import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Style from '../views/style.vue'
import Programmation from '../views/Programmation.vue'
import Festival from '../views/Festival.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Contact from '../views/Contact.vue'
import Artistes from '../views/Artistes.vue'
import page404 from '../views/404.vue'
import createArtiste from '../views/createArtiste.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    // ici les autre routes
    { path: '/style-guide', name: 'Style', component: Style },
    { path: '/Programmation', name: 'Programmation', component: Programmation },
    { path: '/Festival', name: 'Festival', component: Festival },
    { path: '/MentionsLegales', name: 'MentionsLegales', component: MentionsLegales },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
    { path: '/createArtiste', name: 'createArtiste', component: createArtiste }


  ]
})

export default router
