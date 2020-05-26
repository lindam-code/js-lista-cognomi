// Chiedi all’utente il cognome
var cognomeUtente = prompt('Scrivi cognome da inserire in lista con prima lettera maiuscola');
// console.log('cognome inserito: ' + cognomeUtente);

// Crea lista cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(listaCognomi);
// console.log(listaCognomi[3]);

// Aggiungi cognome dell'utente alla lista
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// Ordina la lista in ordine alfabetico
listaCognomi.sort();
console.log(listaCognomi);
// Stampa la lista ordinata
for (i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  var listaCognomiStampa = document.getElementById('stampa_lista');
  listaCognomiStampa.innerHTML = '<li>' + listaCognomi[i] + '</li>'
}

// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
