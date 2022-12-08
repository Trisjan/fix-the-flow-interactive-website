// VARIABELEN
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let searchbar = document.querySelector('')
// EVENT LISTENERS
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// FUNCTIONS


// 21:52 
// Ik moet nog alleen de functie schrijven van de animatie
// zodat de searchbar wordt vertoond op scherm
// Ook in de css moet nog geschreven worden voor de margin die dan
// doormiddel van de click op de button 4em omlaag gaat