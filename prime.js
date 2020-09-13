function isPrime(n) {
  if (n < 2) {
    return 'Число должно быть больше 1';
  } else if (n === 2) {
    return 'Prime number';
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'Composite number';
    }
    i +=1;
  }
  
  return 'Prime number';
}

function runPrime(){
  var x = document.getElementById('x_prime').value;
  var result = isPrime(x);
  document.getElementById('resultPrime').innerHTML = result;
  document.getElementById('resultPrimeDiv').style.display = 'block';
}