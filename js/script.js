// Chiedi all’utente il cognome
var cognomeUtente = prompt('Scrivi cognome da inserire in lista con prima lettera maiuscola');

// Crea lista cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Aggiungi cognome dell'utente alla lista
listaCognomi.push(cognomeUtente);

// Ordina la lista in ordine alfabetico
listaCognomi.sort();

// // Stampa la lista ordinata: ciclo for
// for (i = 0; i < listaCognomi.length; i++) {
//   var listaCognomiStampa = document.getElementById('stampa_lista');
//   var contenutoAttuale = listaCognomiStampa.innerHTML;
//   listaCognomiStampa.innerHTML = contenutoAttuale + '<li>' + listaCognomi[i] + '</li>';
// }

// Stampa lista ordinata: ciclo while
var i = 0;
while (i < listaCognomi.length) {
  var listaCognomiStampa = document.getElementById('stampa_lista');
  var contenutoAttuale = listaCognomiStampa.innerHTML;
  listaCognomiStampa.innerHTML = contenutoAttuale + '<li>' + listaCognomi[i] + '</li>';
  i++;
}
// Scrivi anche la posizione della lista in cui il nuovo cognome si trova
var newPositionValue = listaCognomi.indexOf(cognomeUtente) + 1;
var newPosition = document.getElementById('new_position');
newPosition.innerHTML = 'Il congnome inserito si trova alla posizione n° ' + newPositionValue;
