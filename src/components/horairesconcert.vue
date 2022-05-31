<template>
    <div class="bg-tonique-black w-72 h-fit flex justify-between p-5 rounded-md items-center hover:bg-tonique">
        <p class="text-white font-heading text-4xl">
            {{ArtisteName}}
        </p>

        <p class="text-white font-text text-base">
            {{Heure}}
        </p>
    </div>
</template>

<script>

export default {
        props: {
            ArtisteName: String,
            Heure: String,
        },
    };
</script>