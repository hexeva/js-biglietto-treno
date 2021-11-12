// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// CHIEDO AL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE
let kilometersRequest = parseInt( prompt ('Quanti chilometri intende percorrere?') );


// CHIEDO ALL'UTENTE L'ETA'
let ageRequest = parseInt( prompt ('Quanti anni ha?') );


// costo biglietto base e biglietti scontati
let ticketPrice = kilometersRequest * 0.21;


// sconto applicato per minorenni 
let underageDiscount = (ticketPrice * 20) / 100;

// quindi il biglietto scontato per minorenni sarà
 let underageTicket = ticketPrice - underageDiscount;
 

//  LA VARIABILE PER OVER 65 LA CREO SENZA GENERARE LA VARIABILE DISCOUNT

// quindi il biglietto scontato per over 65 sarà:
let overageTicket = ticketPrice - ( (ticketPrice * 40) / 100 );



// variabile messaggio 

let customerMessage;


// variabili di età e messaggio all'utente


if ( ageRequest < 18 ) {
    customerMessage = 'Il suo prezzo scontato ammonta a €:' + underageTicket.toFixed(2);

    

} else if  ( ageRequest >= 65 ){
    customerMessage = 'Il suo prezzo scontato ammonta a €:' + overageTicket.toFixed(2);
    
   


} else {
    customerMessage = 'Il suo prezzo ammonta a €:' + ticketPrice.toFixed(2);
    
    
}

// OUTPUT

alert(customerMessage);



    




