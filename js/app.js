const { createApp } = Vue

let indexSlide = 0
console.log(indexSlide)

createApp({
    data() {
        return {
            message: 'Vue Slider',
            headerClass: 'header',
            h1Class: 'title-header',
            slideClass: 'slide',
            activeClass: 'active',
            slideOverlayClass: 'slide-overlay',
            slideEls: [document.querySelectorAll(".slide")],
            images: [
                {
                    imageUrl: './img/01.webp',
                    title: "Marvel's Spiderman Miles Morales",
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    imageUrl: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    imageUrl: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    imageUrl: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    imageUrl: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                }
            ]
        }
    },
    methods: {
        getImagesTitle(index) {
            return this.images[index].title
        },
        getImagesText(index) {
            return this.images[index].text
        },
        getImagesImageUrl(index) {
            return this.images[index].imageUrl
        },
        nextSlide () {
            console.log("next slide")

            console.log(slideEls)

            // nascondere la slide corrente
            let currentSlide = slideEls[indexSlide]
            console.log(currentSlide)
            currentSlide.classList.remove("active")

            // controllo slide limite destro
            if (indexSlide < slideEls.length - 1) {
                indexSlide++
            } else {
                indexSlide = 0
            }

            // mostrare la slide successiva
            let nextSlide = slideEls[indexSlide]
            console.log(nextSlide)
            nextSlide.classList.add("active")                    
        },
        precSlide() {
            console.log("prec slide")

            // nascondere la slide corrente
            let currentSlide = slideEls[indexSlide]
            console.log(currentSlide)
            currentSlide.classList.remove("active")

            // controllo slide limite sinistro
            if (indexSlide > 0) {
                indexSlide--
            } else {
                indexSlide = slideEls.length - 1
            }

            // mostrare la slide precedente
            let precSlide = slideEls[indexSlide]
            console.log(precSlide)
            precSlide.classList.add("active")

        }
    }
}).mount('#app')