function mirror(str) {
  return str.split("").reverse().join("");
}

function runMirror(){
  var x = document.getElementById('x_mirror').value;
  var s = x.toString();
  var result = mirror(s);
  document.getElementById('resultMirror').innerHTML = result;
 
}