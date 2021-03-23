// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.



// crea lista numeri da 1 a 100

for ( var i = 1; i <= 100; i++ ) {
    var listaN = i;
    

    if (  listaN % 3==0 && listaN % 5==0 ) {
        
        console.log('FizzBuzz');    
        
    } else if ( listaN % 5==0 ) {
        
        console.log('buzz');

    }  else if (listaN % 3==0 ) {
        
        console.log('Fizz');

    } else {

        console.log('lista num', listaN);
    }
}



 