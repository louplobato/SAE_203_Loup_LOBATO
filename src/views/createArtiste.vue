<template>
    <div class="input-group pt-48">
                <div class="input-group-prepend">
                <span class="input-group-text">Nom</span>
                </div>
                <input type="text" v-model='Artistes.nom' class="form-control mx-3" required />
                <input type="text" v-model='Artistes.date' class="form-control" required/>
                <button class="btn btn-light" type="button"  @click='createArtistes()' title="Création">
                    <save class="stroke-white"></save>
                </button>
            </div>
</template>

<script>
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
    }
    }
</script>