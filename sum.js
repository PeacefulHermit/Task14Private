function sum(n) {
  var s = 0.0;
  for (var i = 1; i <= n; i++){
    s = s + 1/i;
  }
  return s;
}

function runSum(){
  var x = document.getElementById('n_sum').value;
  var result = sum(x);
  document.getElementById('resultSum').innerHTML = result;
  //document.getElementById('resultSumDiv').style.display = 'block';
}