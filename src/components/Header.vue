<script>
export default {
    methods: {
        switchPage(page) {
            this.$emit('toggle-page', page);
        } 
    }
}
</script>

<template>
    <header class="bg-pink-500 p-4 h-60 flex items-center justify-between">
        <img alt="" class="w-52 h-52" src="@/assets/img/logo.svg">
        <nav class="flex items-center justify-between">
            <button class="nav-button" @click="switchPage('home')">ACCUEIL</button>
            <button class="nav-button" @click="switchPage('circuit')">CIRCUIT</button>
            <button class="nav-button" @click="switchPage('partenaires')">PARTENAIRES</button>
            <button class="nav-button" @click="switchPage('reservation')">RÉSERVATION</button>
            <button class="nav-button" @click="switchPage('recettes')">RECETTES</button>
            <button class="nav-button" @click="switchPage('contact')">CONTACT</button>

        </nav>

    </header>
</template>

<style>

.nav-button {
    @apply mr-4 bg-transparent border border-white text-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out;
}
</style>