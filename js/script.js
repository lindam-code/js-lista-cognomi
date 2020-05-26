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
  var listaCognomiStampa = document.getElementById('stampa_lista');
  var contenutoAttuale = listaCognomiStampa.innerHTML;
  listaCognomiStampa.innerHTML = contenutoAttuale + '<li>' + listaCognomi[i] + '</li>'
}

// Scrivi anche la posizione della lista in cui il nuovo cognome si trova
var newPositionValue = listaCognomi.indexOf(cognomeUtente) + 1;
var newPosition = document.getElementById('new_position');
newPosition.innerHTML = 'Il congnome inserito si trova alla posizione n° ' + newPositionValue;
