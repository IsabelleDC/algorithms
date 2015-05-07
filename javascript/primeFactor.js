// Find all prime factors of a number?

function primeFactors(n){
  var factors = [],
      divisor = 2;

  while(n>2){
    if(n % divisor === 0){
       factors.push(divisor);
       n= n/ divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}

// > primeFactors(69);
//   = [3, 23]
