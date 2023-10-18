const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// RECUPERATION DES ELEMENTS DU DOM
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const image = document.querySelector('.banner-img');
const titre = document.querySelector('#banner p');
const points = document.querySelector('.dots');

// ECOUTEURS
arrow_left.addEventListener("click", slideGauche);
arrow_right.addEventListener("click", slideDroite);

// ECOUTEURS
let etapeActive = 0;
const nombresEtapes = slides.length - 1;

// FONCTIONS

function slideDroite() {
	etapeActive = etapeActive + 1
	verifierEtape();
	modifierVisuel();
}

function slideGauche() {
	etapeActive = etapeActive - 1
	verifierEtape();
	modifierVisuel();
}


function verifierEtape() {
	if (etapeActive > nombresEtapes){
		etapeActive = 0
	} else if(etapeActive < 0) {
		etapeActive = nombresEtapes
	}
}
function modifierVisuel() {
	const slideAffichage = slides[etapeActive];
	image.src = './assets/images/slideshow/' + slideAffichage.image;
	titre.innerHTML = slideAffichage.tagLine;
	mettrePointsAJour()
}


function creerPoints() {
	slides.forEach((slide, key)=> {
		const dot = document.createElement('div');
		dot.classList.add('dot')
		if(key === 0) {
			dot.classList.add('dot_selected')
		}

		points.appendChild(dot)
	});
}

function mettrePointsAJour() {
	const pointsList = document.querySelectorAll('.dot');

	for (let i = 0; i < pointsList.length; i++) {
		pointsList[i].classList.remove('dot_selected')
	}

	pointsList[etapeActive].classList.add('dot_selected')
}


creerPoints();