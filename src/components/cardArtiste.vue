<template>
    <div class="max-w-lg flex flex-col h-80">
        <img src="../../public/img/Hypno5e.jpg" alt="photo du groupe Hypno5e" class="max-h-44">
        <div class="bg-tonique-black text-white min-h-fit flex flex-col p-2 ">
            <p class="font-heading text-4xl mb-5">
                Hypno5e
            </p>

        <div class="flex items-center justify-between">
            <div class="bg-white font-text text-sm text-tonique-black w-fit rounded-md p-2 h-fit">
                <p>
                    12 Juillet
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