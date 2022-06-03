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

    <div>
            
            </div>
            <form class='mb-3'>
            <h6>Nouvel Artistes</h6>
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text">Nom</span>
                </div>
                <input type="text" v-model='Artistes.nom' class="form-control mx-3" required />
                <input type="text" v-model='Artistes.date' class="form-control" required/>
                <button class="btn btn-light" type="button"  @click='createArtistes()' title="Création">
                    <save class="stroke-white"></save>
                </button>
            </div>
            </form>
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='Artistes in listeArtistesSynchro' :key='Artistes.id'>
                <td>{{Artistes.id}}</td>
                
                <td>
                    <input type='text' v-model='Artistes.nom' />
                </td>
                <td>
                    <input type="text" v-model="Artistes.date" />
                </td>
                <td>
                    <button class='btn light' @click.prevent="updateArtistes(Artistes)">
                        <save class="stroke-white"></save>
                    </button>
                    <button class='btn light' @click.prevent="deleteArtistes(Artistes)">
                    <i class="fa fa-trash fa-lg"></i>
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
            <hr/>

</template>

<script>
import cardArtiste from "../components/cardArtiste.vue"
import bouton from "../components/button.vue"
import save from "../components/icons/save.vue"
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
        bouton,
        save
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
        this.getArtistesSynchro();
    },

    methods:{
        onCnx(){

        },

        onDcnx(){

        },
        async getArtistes(){
            const firestore = getFirestore();
            const dbArtistes= collection(firestore, "Artistes");
            const query = await getDocs(dbArtistes);
            query.forEach((doc) => {
                let Artistes = {
                    id : doc.id,
                    nom: doc.data().nom,
                    date: doc.data().date
                }
                this.listeArtistes.push(Artistes);
                
            });
        },

        async getArtistesSynchro(){
            const firestore = getFirestore();
            const dbArtistes= collection(firestore, "Artistes");
            const query = await onSnapshot(dbArtistes, (snapshot) =>{
                this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            })
        },

        async createArtistes(){ 
            const firestore = getFirestore();
            const dbArtistes = collection(firestore, "Artistes");
            const docRef = await addDoc(dbArtistes,
               this.Artistes
            )
            console.log('document créé avec le id : ', docRef.id);
        },
        async updateArtistes(Artistes){
            const firestore = getFirestore();
            const docRef = doc(firestore, "Artistes", Artistes.id);
            await updateDoc(docRef, 
                this.Artistes
            )
         },
        deleteArtistes(Artistes){ },
    }
}
</script>