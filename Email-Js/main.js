
var emails_data = ['riki.rock@gmail.com', 'aieiebrazov@gmail.com', 'pippobaudo92@gmail.com', 'patri1960@libero.it','forzaforza@gtm.com'];
function Accesso () {
  var e;
  e = prompt("inserisci la tua email");
  return e;
}
function ricercaEmaiData () {
  var emailSearch, email;

  emailSearch = Accesso();
  email = '';

  for (var i = 0; i < emails_data.length; i++) {
    if (emails_data[i] === emailSearch) {
      email = emails_data[i];
    }
  }
  return email;
}
var risultato = ricercaEmaiData();
if (risultato !== '') {
  console.log('Accesso Effettuato');
} else {
  console.log('Utente non riconosciuto.');
}
