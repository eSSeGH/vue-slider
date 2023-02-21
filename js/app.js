const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue Slider',
            headerClass: 'header',
            h1Class: 'title-header',
            slideOverlayClass: 'slide-overlay',
            currentIndex: 0,
            images: [
                {
                    class: ['slide', 'active'],
                    imageUrl: './img/01.webp',
                    title: "Marvel's Spiderman Miles Morales",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    class: 'slide',
                    imageUrl: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    class: 'slide',
                    imageUrl: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    class: 'slide',
                    imageUrl: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    class: 'slide',
                    imageUrl: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ]
        }
    },
    methods: {
        nextSlide () {   

            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex += 1

            } else {
                this.currentIndex = 0
            }
        },
        precSlide() {
            console.log()

            if (this.currentIndex > 0) {
                this.currentIndex -= 1

            } else {
                this.currentIndex = this.images.length - 1
            }
        }
    }
}).mount('#app')