let secret = Math.floor(Math.random() * 10) + 1 ;

let choix;
let essais = 0;

while (choix != secret) {
    choix = Number(prompt("devine un nombre entre 1 et 10 :"));
    essais++;
    if (choix < secret ) {
        alert("le nombre est plus grand");       
    } else if(choix > secret ) {
        alert("le nombre est plus petit ");
    } else {
        alert("Bravo ! Tu as trouvé le nombre");
    }
}
console.log("Nombre d'essais :" + essais)
