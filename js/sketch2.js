let data;
let taille = ['grand','moyen', 'petit']
let couleur = ['r','v', 'b']



function preload() {
  data = loadJSON("data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
  console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 
  console.log(random(smsListe).cont); //affiche le premier sms
  let texte = random(smsListe).cont
 listeMotsAvecFrequences(smsListe)


for (let i = 0; i < smsListe.length; i++){
let smsData = smsListe[i];
let texte = smsData.cont;

 if(typeof texte == 'object'){
 texte = texte.__text;
}
 texte = miseEnExergue(texte, 'coucou');
  texte = miseEnExergue(texte, 'bisous');
    texte = miseEnExergue(texte, 'alors');
    texte = miseEnExergueSmylet(texte, ':)','sourire');
     texte = miseEnExergueSmylet(texte, ';)','sourire2');
      texte = miseEnExergueSmylet(texte, '<3','coeur');

 
let p = createP(texte);
p.addClass(random(taille))
p.addClass(random(couleur))

let r = random(-45, 45); // rotation entre -45° et 45°
p.style('transform', 'rotate(' + r + 'deg)');



}

}