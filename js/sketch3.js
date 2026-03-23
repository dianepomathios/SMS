let data;
let taille = ['grand','moyen', 'petit']
let couleur = ['r','v', 'b']
 let sms = data.corpus.sms;
	sms = shuffle(sms); //la fonction suffle mélange une liste


function preload() {
  data = loadJSON("data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe).cont); //affiche le premier sms
  let texte = random(smsListe).cont


for (let i = 0; i < smsListe.length; i++){
let smsData = smsListe[i];
let texte = smsData.cont;

 if(typeof texte == 'object'){
 texte = texte.__text;
}

let p = createP(texte);
p.addClass(random(taille))
p.addClass(random(couleur))

let r = random(-45, 45); // rotation entre -45° et 45°
p.style('transform', 'rotate(' + r + 'deg)');



let top = random(0, 505)+'px' //renvoit une valeur entre 0px et 55px
p.style('top', top);

if (p.hasClass('petit')) {
  p.style('animation-delay', random(2)+'s');
}

}
}