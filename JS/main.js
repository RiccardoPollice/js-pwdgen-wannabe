// Questo è il file che contiene tutto il codice JS della pagina web

let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let number1 = prompt("inserisci un numero");
let number2 = prompt("Inserisci un altro numero");

// Convertire le variabili numbers (era un testo per colpa del prompt) in un Numero

number1= parseInt(number1);
number2= parseInt(number2);

// Elaborazione delle statistiche e delle password
let divNumber = number1 / number2
let password = name + surname + favoriteColor

let password1 = password + 21
let password2 = password + Math.round(divNumber)

// Compilazione dei dati
let database= `
--------------Informazioni utente---------------
>Informazioni personali:

Nome ${name}

Cognome ${surname}

Colore preferito ${favoriteColor}

Primo numero ${number1}

Secondo numero ${number2}

>Password create

password base ${password1}

password media ${password2}

`;

console.log(database);
