  var object1 = {
    apple: 0,
    banana: { weight: 52, price: 100 },
    cherry: 97
  };
  var object2 = {
    banana: { price: 200 },
    durian: 100
  };


// Merge object2 into object1

$.extend( object1, object2 );

console.log(object1.durian);  //100



// Merge object1 into jQuery

$.extend( object1 );

console.log( $.apple ); //01
