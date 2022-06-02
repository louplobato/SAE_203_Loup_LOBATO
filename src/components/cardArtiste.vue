<template>
    <div class="w-full flex flex-col h-80">
        <img src="../../public/img/Hypno5e.jpg" alt="photo du groupe Hypno5e" class="max-h-44 object-cover rounded-t-md">
        <div class="bg-tonique-black text-white min-h-fit flex flex-col p-2 ">
            <p class="font-heading text-4xl mb-5">
                Hypno5e
            </p>

        <div class="flex items-center justify-between rounded-b-md">
            <div class="bg-white font-text text-sm text-tonique-black w-fit p-2 h-fit rounded-md">
                <p>
                    17 Juillet
                </p>
            </div>
            <fleche></fleche>

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