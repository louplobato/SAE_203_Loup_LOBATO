<template>
    <form enctype="multipart/form-data" 
            @submit.prevent="createArtiste"
      class="pt-28"  >
            <div class="card bg-dark">

                <div class="text-7xl font-heading text-tonique-black ml-accueil mb-7">
                    <h5>Création Artistes</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6 ml-accueil">
                            <div>
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="ml-accueil mt-9 mb-44">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text text-white font-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="Artistes.nom"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text text-white font-text" >Date</span>
                                </div>
                                <input 
                                    v-model="Artistes.date"
                                    class="form-control" placeholder="Date du concert" key=
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text text-white font-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input text-white font-text" ref="file" id="file" 
                                    @change="previewImage"
                                    >
                                    <label class="custom-file-label text-white font-text" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            
                            <br/>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-dark" @click='createArtistes()'>
                        Créer
                    </button>
                    <button class="float-right btn btn-dark" >
                        <router-link to="/Artistes" >Cancel</router-link>
                    </button>
                </div>

            </div>
        </form> 
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
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
    export default {
        components : {
            save
        },
        name:'createArtiste',
        data(){
        return {
            ImageData:null,
            listeArtistes:[],
            Artistes:{
                nom:null,
                date:null,
                img:null,
                
            },
        }
    },

    mounted(){
        this.getArtistes();
    },

    methods:{
        async getArtistes(){
            const firestore = getFirestore();
            const dbArtistes= collection(firestore, "Artistes");
            const q = query(dbArtistes, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                   {id:doc.id, ...doc.data()} 
                ))
            
            console.log("Liste Artistes", this.listeArtistes)
            })
        },

         previewImage: function(event) {
            
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.Artistes.img = this.file.name;
            // Reference to the DOM inpuelement
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async createArtistes(){
            // Obtenir storage Firebase
            const storage = getStorage();
            // Référence de l'image à uploader
            const refStorage = ref(storage, 'Artistes/'+this.Artistes.img);
            // Upload de l'image sur le Cloud Storage
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                
                // Création du participant sur le Firestore
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artistes'), this.Artistes );
            });
            // redirection sur la liste des participants
            this.$router.push('/Artistes');            
        }

        },
        
    }
</script>