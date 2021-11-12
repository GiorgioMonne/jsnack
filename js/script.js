// L’utente inserisce due numeri in successione, con due prompt.
//  Il software stampa il maggiore.


// const numero1 = prompt("Inserisci il primo numero");
// console.log("Numero uno ="+ numero1);


// const numero2 = prompt("Inserisci il secondo numero");
// console.log("Numero due =" + numero2);

// console.log("Metodo con if semplice");

// if(numero1 > numero2){
//     console.log("Il maggiore è :" + numero1);
// }else if(numero1 < numero2){
//     console.log("Il maggiore è :" + numero2);
// }else{
//     console.log("Il numeri sono uguali :" + "numero uno" + numero1 + "numero due" + numero2 );
// }

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// let numero, somma = 0;

// for (let i = 0; i < 10; i++) {
//   numero = parseInt(prompt('Inserisci un numero'));
//   console.log('Numero : '+ [i] +" = "+ numero);
//   somma += numero;
// }

// console.log('La somma è ='+ somma);

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// let numeri = [];

// let numero;

// for (let i = 0; i < 6; i++) {
//     numero = parseInt(prompt('Inserisci un numero'));
//     console.log('Numero : '+ [i] +" = "+ numero);
//     if(numero %2 != 0){
//         console.log("IL numero è dispari");
//         numeri.push(numero);
//     }
// }

// console.log(numeri);

// Stampa il cubo dei primi N numeri,  dove N è un numero indicato dall’utente.

let n = parseInt(prompt('Inserisci un numero di iterazioni'));
console.log("Il numero di N iterazioni inserito è = " + n);
let numero,cubo=0;

for (let i = 0; i < n; i++) {
    numero = parseInt(prompt('Inserisci un numero'));
    cubo = numero * numero * numero;
    console.log("Il cubo del numero : " + numero + " è " + cubo);
}