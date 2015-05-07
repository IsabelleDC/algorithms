// Verify a prime number?

// A prime number is only divisible by itself and 1.
// I will run a while loop and increase by 1.

function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor === 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

// > isPrime(137);
//   = true
// > isPrime(237);
//   = false

