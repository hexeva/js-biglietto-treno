// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// DIchiarazioni




// CHIEDO AL'UTENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE
let kilometersRequest = parseInt( prompt ('Quanti chilometri intende percorrere?') );



// CHIEDO ALL'UTENTE L'ETA'
let ageRequest = parseInt( prompt ('Quanti anni ha?') );


// costo biglietto base e biglietti scontati
let ticketPrice = kilometersRequest * 0.21;
console.log(ticketPrice);

// sconto applicato per minorenni 
let underageDiscount = (ticketPrice * 20) / 100;

// quindi il biglietto scontato per minorenni sarà
 let underageTicket = ticketPrice - underageDiscount;
 console.log(underageTicket);

// sconto applicato per over 65
let overageDiscount = (ticketPrice * 40) / 100;

// quindi il biglietto scontato per over 65 sarà:
let overageTicket = ticketPrice - overageDiscount;
console.log(overageTicket);

// variabile messaggio 

let customerMessage = "L'importo dovuto ammonta a €:"


// variabili di età e messaggio all'utente


if ( ageRequest < 18 ) {

    alert( customerMessage + underageTicket.toFixed(2) );
    

} else if  ( ageRequest >= 65 ){
    alert( customerMessage + overageTicket.toFixed(2) );
    
   


} else {
    alert( customerMessage + ticketPrice.toFixed(2) );
    
}
    



