<template>
    <div class="w-800 flex flex-col h-80">
        <img src="../../public/img/Hypno5e.jpg" alt="photo du groupe Hypno5e" class="max-h-44 object-cover rounded-t-md">
        <div class="bg-tonique-black text-white min-h-fit flex flex-col p-2 ">
            <div  class="flex items-center justify-between rounded-b-md">
                <p class="font-heading text-4xl mb-2 underline">
                Hypno5e
            </p>

            <fleche></fleche>
            </div>
            
            <p class="font-text">
                De 21h - 23h
            </p>

            <p class="font-text">
                Scene Principale
            </p>

             <div>
                <p  class="bg-white font-text text-sm text-tonique-black w-fit p-2 h-fit rounded-md ml-auto mr-auto">
                    12 Juillet
                </p>
            </div>

            
            
        </div>

        
    </div>
</template>

<script>

    import fleche from "../components/icons/fleche.vue"

    export default {
        components : {
            fleche,
        }
    }
</script>