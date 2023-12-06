// Buttons aanroepen doormiddel van hun class
let filterReserveren = document.getElementById("reserverenFilterButton")
let filterFavoriete = document.getElementById("favorieteFilterButton")
let filterAanraders = document.getElementById("aanradersFilterButton")
let filterUitlenen = document.getElementById("uitlenenFilterButton")

// Sections aanroepen doormiddel van hun class
let reserverenSection = document.querySelector(".reserveren")
let favorieteSection = document.querySelector(".favoriete")
let aanradersSection = document.querySelector(".aanraders")
let lenenSection = document.querySelector(".lenen")

// Eventhandlers om filter mogelijk te maken
// Reserveren filter
filterReserveren.addEventListener("click", () => {
    favorieteSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// Favoriete filter
filterFavoriete.addEventListener("click", () => {
    reserverenSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// Aanraders filter
filterAanraders.addEventListener("click", () => {
    reserverenSection.classList.toggle("hidden")
    favorieteSection.classList.toggle("hidden")
    lenenSection.classList.toggle("hidden")
})

// Lenen filter
filterUitlenen.addEventListener("click", () => {
    reserverenSection.classList.toggle("hidden")
    favorieteSection.classList.toggle("hidden")
    aanradersSection.classList.toggle("hidden")
})