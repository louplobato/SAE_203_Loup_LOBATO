<template>
    <div class="pt-32 p-accueil">
        <h1 class="text-tonique-black text-7xl font-heading mb-10">
        Artistes
    </h1>

    <p class="text-7xl font-bar text-white">
         NEW LANDES <br> METAL FEST
       </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full justify-items-center px-7">

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

    <div class="justify-center flex mx-5 mb-24">
        <RouterLink to="/createArtiste">
            <bouton PageBtn="Ajouter un artiste">
    </bouton>
        </RouterLink>
      
    </div>

     <h5>Liste des pays - Simple liste</h5>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='Artistes in listeArtistes' :key='Artistes.id'>
                <td>{{pays.id}}</td>
                <td>{{pays.nom}}</td>
                <td>-</td>
                </tr>
            </tbody>
            </table>
            <hr/>

</template>

<script>
import cardArtiste from "../components/cardArtiste.vue"
import bouton from "../components/button.vue"
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'ux²ne collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
export default {
    components : {
        cardArtiste,
        bouton
    },

    data(){
        return {
            listeArtistes:[]
        }
    },

    mounted(){
        this.getArtistes();
    },
}
</script>