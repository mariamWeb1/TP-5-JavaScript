let a =Number(prompt("veuillez saisir le premier nombre :")) ;
let b =Number(prompt("veuillez saisir le deuxieme nombre:")) ;

let somme = a + b ;
let difference = a - b ;
let produit = a * b ;
let quotient = a / b ;
 console.log("Somme =",somme);
 console.log("Difference =",difference);
 console.log("Produit =",produit);

 if(b !== 0){
    console.log("Quotient =",quotient);
} else{
    console.log("Division par zéro impossible");
}
