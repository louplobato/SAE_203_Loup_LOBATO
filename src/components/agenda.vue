<template>
    <div class="flex-col flex justify-between w-3/4 ml-auto mr-auto lg:flex-row">
        <div class="flex flex-initial mb-6">
            <div>
                <p class="text-white font-heading text-4xl text-center mb-6">
                Vendredi 15 Juillet
            </p>

            <horairesconcert ArtisteName="Deathspell Omega" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Ulcerate" Heure="21h" class="mb-6"></horairesconcert>
            </div>

            
        </div>
        <svg width="5" height="475" viewBox="0 0 5 475" fill="none" mlns="http://www.w3.org/2000/svg " class="hidden xl:block">
            <line x1="2.5" y1="2.5" x2="2.5" y2="472.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
        <div class="flex flex-initial mb-6" > <!--code fino-->
            <div>
                <p class="text-white font-heading text-4xl text-center mb-6">
                Vendredi 15 Juillet
            </p>

            <horairesconcert ArtisteName="The Great Old Ones" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Meshuggah" Heure="21h" class="mb-6"></horairesconcert>
            </div>

            
        </div>
        <svg width="5" height="475" viewBox="0 0 5 475" fill="none" xmlns="http://www.w3.org/2000/svg"  class="hidden xl:block">
            <line x1="2.5" y1="2.5" x2="2.5" y2="472.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
        <div class="flex ">
            <div class="flex flex-col flex-initial mb-6">
            <p class="text-white font-heading text-4xl text-center mb-6">
                Dimanche 17 Juillet
            </p>

            <horairesconcert ArtisteName="Regarde les hommes tomber" Heure="19h" class="mb-6"></horairesconcert>
            <horairesconcert ArtisteName="Hypno5e" Heure="21h" class="mb-6"></horairesconcert>
        </div> 
        </div>
        
    </div>
</template>

<script>
import horairesconcert from "../components/horairesconcert.vue"
import { 
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'
 

export default {
    components : {
        horairesconcert,
    },

    data() {
        return {
            listeConcerts:[]
        }
    },

    mounted(){
    this.getConcerts
    },
    methods:{
        async getConcert(){
            const firestore = getFirestore();
               
            const dbConcerts= collection(firestore, "Concerts");

            const q= query(dbConcerts, orderBy ('datesql','asc'));

            await onSnapshot(q, (snapshot)=>{
                this.listConcerts=snapshot.docs.map(doc=>(
                    {
                        id:doc.id, ...doc.data()
                    }
                ))
            })
                
           /* const query = await getDocs(dbConcerts);
            query.forEach((doc) => {
                let Concerts = {
                    artiste: doc.data().artiste,
                    heure : doc.data().heure,
                    datesql : doc.data().datesql,
                    date : doc.data().date

                }
                this.listeConcerts.push(Concerts);
            });*/
            },
    }
}


</script>