<template>
    <div>
        <form action="#" class="flex flex-col">
            <label for="name"></label>
            <input 
                class="bg-fond-light text-white font-text text-base mb-5 p-1 w-5/12 "
                type="name"
                id="name"
                name="name"
                placeholder="Nom"
                />
            <label for="email"></label>
            <input 
            class="bg-fond-light text-white font-text text-base mb-5 p-1 w-5/12"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            >
            <label for="message"></label>
            
            <textarea class="bg-fond-light text-white font-text text-base mb-5 p-1 w-5/12 h-64"
            type="message"
            id="message"
            name="message"
            placeholder="Votre Message">></textarea>

            <button type="submit" class="bg-tonique-black w-80 h-24 rounded-md justify-center items-center flex hover:bg-tonique">
                <p class="font-heading text-3xl text-white">
                    Envoyer
                </p>
            </button>
        </form>
    </div>
</template>