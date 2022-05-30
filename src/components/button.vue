<template>
     <div class="bg-tonique-black w-80 h-24 rounded-md justify-center items-center flex hover:bg-tonique">
        <p class="font-heading text-3xl text-white">
            {{PageBtn}}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            PageBtn: String,
            lienbtn: Location,
        },
    };
</script>