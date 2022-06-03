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

            
            
                <tr v-for='Artistes in listeArtistes' :key='Artistes.id'  class="w-full flex flex-col h-80 mb-24">

                <td class="max-h-44 object-cover rounded-t-md w-fit">
                    <img :src="Artistes.img" alt="h" />
                    
                </td>
                <div class="bg-tonique-black text-white min-h-fit flex flex-col p-2 ">
                    <td class="font-heading text-4xl mb-5">
                    {{Artistes.nom}}
                </td>
                <div class="flex items-center justify-between rounded-b-md">
                    <div class="bg-white font-text text-sm text-tonique-black w-fit p-2 h-fit rounded-md">
                        <td>
                    {{Artistes.date}}
                    </td>
                    </div>
                    
                <fleche></fleche>
                </div>
                
                </div>
                
                </tr>
        
                
            
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
            
            <hr/>

</template>

<script>
import cardArtiste from "../components/cardArtiste.vue"
import bouton from "../components/button.vue"
import save from "../components/icons/save.vue"
import fleche from "../components/icons/fleche.vue"
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

    import { 
        getStorage,             // Obtenir le Cloud Storage
        ref,                    // Pour créer une référence à un fichier à uploader
        getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
export default {
    components : {
        cardArtiste,
        bouton,
        save,
        fleche
    },

    data(){
        return {
            listeArtistes:[],
            Artistes:{
                nom:null,
                date:null,
                img:null,
                
            },
            listeArtistesSynchro:[]
        }
    },

    mounted(){
        this.getArtistes();
    },

    methods:{
        async getArtistes(){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            const dbPart = collection(firestore, "Artistes");
            // Liste des participants triés sur leur nom
            const q = query(dbPart, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
                // Récupération des images de chaque participant
                // parcours de la liste
                this.listeArtistes.forEach(function(Artistes){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'Artistes/'+Artistes.img);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la photo
                        Artistes.img = url;
                    })
                    .catch((error) =>{
                        console.log('erreur downloadUrl', error);
                    })
                })
            })      
        },
    }
}
</script>