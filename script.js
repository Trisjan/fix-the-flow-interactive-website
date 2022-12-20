// VARIABELEN
const toggleButton = document.getElementsByClassName('toggle-button')[0]
// EVENT LISTENERS
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// FUNCTIONS
function myFunction() {
    var element = document.getElementById("search");
    element.classList.toggle("show")
}

// 21:52 
// Ik moet nog alleen de functie schrijven van de animatie
// zodat de searchbar wordt vertoond op scherm
// Ook in de css moet nog geschreven worden voor de margin die dan
// doormiddel van de click op de button 4em omlaag gaat