<script>
export default {
    data() {
        return {
            isClicked: {
                menu: false,
                dark: false
            }
        }
    },
    methods: {
        switchPage(page) {
            this.isClicked.menu = false;
            document.documentElement.scrollTop = 0;
            this.$emit('toggle-page', page);
        } 
    }
}
</script>

<template>
<nav v-if="isClicked.menu" class="bg-pink-500 border-2 border-white w-full h-1/3 fixed z-20 bottom-0 left-0 mb-[4rem] rounded-[100px] grid">
            <button class="menu-button" @click="switchPage('home')">ACCUEIL</button>
            <button class="menu-button" @click="switchPage('circuit')">CIRCUIT</button>
            <button class="menu-button" @click="switchPage('partenaires')">PARTENAIRES</button>
            <button class="menu-button" @click="switchPage('reservation')">RÉSERVATION</button>
            <button class="menu-button" @click="switchPage('recettes')">RECETTES</button>
            <button class="menu-button" @click="switchPage('contact')">CONTACT</button>
</nav>


<footer class="bg-pink-500 w-full h-12 z-20 fixed bottom-0 left-0">
    <nav class="flex justify-between items-center">
        <button @click="isClicked.menu=!isClicked.menu" class="ml-32">
            <svg v-if="!isClicked.menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        </button>
        <button @click="isClicked.dark=!isClicked.dark" class="mr-32">
            <svg v-if="!isClicked.dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4a8 8 0 0 0 0 16c2.64 0 5.04-1.29 6.54-3.31A8 8 0 0 0 12 4z">
    </path>
</svg>



            <svg v-if="isClicked.dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        </button>
    </nav>
</footer>

</template>

<style>
.menu-button {
    @apply mr-4 bg-transparent border-t border-white text-white px-4 py-2 transition duration-300 ease-in-out;
}
</style>