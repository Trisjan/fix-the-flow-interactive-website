// VARIABELEN
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
// EVENT LISTENERS
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// FUNCTIONS
function myFunction() {
    var element = document.getElementById("search");
    element.classList.toggle("show")
}

// FILTERING WERKVORMEN 
// CATEGORIEN BUTTONS
const filterButtonOnderzoekBegrijp = document.getElementById('filter-button-1')
const filterOrganiserenPlannen = document.getElementById('filter-button-2')
const filterLerenJezelf = document.getElementById('filter-button-3')
const filterCommunicerenPresenteren = document.getElementById('filter-button-4')
const filterCreatiefDenken = document.getElementById('filter-button-5')
const filterLerenNadenken = document.getElementById('filter-button-6')

// WERKVORMEN
const onderzoekBegrijp = document.getElementsByClassName('onderzoeken-en-begrijpen')
const organiserenPlannen = document.getElementsByClassName('organiseren-en-plannen')
const lerenJezelf = document.getElementsByClassName('leren-over-jezelf')
const communicerenPresenteren = document.getElementsByClassName('communiceren-en-presenteren')
const creatiefDenken = document.getElementsByClassName('creatief-denken')
const lerenNadenken = document.getElementsByClassName('leren-over-nadenken')

// Filter categorie Onderzoeken en begrijpen
filterButtonOnderzoekBegrijp.addEventListener('click', onderzoekBegrijpHandler)
function onderzoekBegrijpHandler() {
    organiserenPlannen.classList.toggle('hide')
    lerenJezelf.classList.toggle('hide')
    communicerenPresenteren.classList.toggle('hide')
    creatiefDenken.classList.toggle('hide')
    lerenNadenken.classList.toggle('hide')
}

// Filter categorie organiseren en plannen
filterOrganiserenPlannen.addEventListener('click', organiserenPlannenHandler)
function organiserenPlannenHandler() {
    onderzoekBegrijp.classList.toggle('hide')
    lerenJezelf.classList.toggle('hide')
    communicerenPresenteren.classList.toggle('hide')
    creatiefDenken.classList.toggle('hide')
    lerenNadenken.classList.toggle('hide')
}

// Filter categorie leren over jezelf en reflecteren
filterLerenJezelf.addEventListener('click', lerenJezelfHandler)
function lerenJezelfHandler() {
    onderzoekBegrijp.classList.toggle('hide')
    organiserenPlannen.classList.toggle('hide')
    communicerenPresenteren.classList.toggle('hide')
    creatiefDenken.classList.toggle('hide')
    lerenNadenken.classList.toggle('hide')
}

// Filter categorie communiceren en presenteren
filterCommunicerenPresenteren.addEventListener('click', communicerenPresenterenHandler)
function communicerenPresenterenHandler() {
    onderzoekBegrijp.classList.toggle('hide')
    organiserenPlannen.classList.toggle('hide')
    lerenJezelf.classList.toggle('hide')
    creatiefDenken.classList.toggle('hide')
    lerenNadenken.classList.toggle('hide')
}

// Filter categorie creatief denken
filterCreatiefDenken.addEventListener('click', creatiefDenkenHandler)
function creatiefDenkenHandler() {
    onderzoekBegrijp.classList.toggle('hide')
    organiserenPlannen.classList.toggle('hide')
    lerenJezelf.classList.toggle('hide')
    communicerenPresenteren.classList.toggle('hide')
    lerenNadenken.classList.toggle('hide')
}

// Filter categorie leren over nadenken
filterLerenNadenken.addEventListener('click', lerenNadenkenHandler)
function lerenNadenkenHandler() {
    onderzoekBegrijp.classList.toggle('hide')
    organiserenPlannen.classList.toggle('hide')
    lerenJezelf.classList.toggle('hide')
    communicerenPresenteren.classList.toggle('hide')
    creatiefDenken.classList.toggle('hide')
}