// generare una password con l'utente

/*
1. Recupero l'elemnto dal DOM
2. Chiedo all'utente il nome
3. Chiedo all'utente il cognome
4. chiedo all'utente il suo colore preferito
5. Fase di elabaorazione
6. inserisco il risultato nel DOM
 */

//Fase preparatoria
// Recupero l'elemento in pagina
const resultElement = document.getElementById('psw');
console.log(resultElement);

// Fase raccolta dati
// First Name
const firstName = prompt('Come ti chiami?', "Tommaso");
console.log(firstName);

//Last Name
const lastName = prompt('Qual\'é il tuo cognome?', "Panarotto");
console.log(lastName);