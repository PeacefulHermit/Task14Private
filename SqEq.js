//<script language="javascript">
//<!--
function squareEquation(a, b, c) {

  //var sol = document.getElementById("square_sol");

  if (a==0) 
    return "a = 0 invalid value"

  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "Complex roots:<br>x<sub>1</sub> = (";
    string += - b / ( 2 * a );
    string += ", ";
    string += Math.sqrt( -d ) / ( 2 * a );
    string += "), x<sub>2</sub> = (";
    string += - b / ( 2 * a);
    string += ", ";
    string += - Math.sqrt( -d ) / ( 2 * a );
    string += ").";
    return string;
  } else {
      if ( d == 0 ) {
        string = "Two identical roots:<br>x<sub>1</sub> = x<sub>2</sub> = ";
        string += -b / ( 2 * a );
        string += ".";
        return string;
      } else {
        string = "Roots:<br>x<sub>1</sub> = ";
        string += -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
        string += ", x<sub>2</sub> = ";
        string += -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
        string += ".";
        return string;
      }
  }
  //sol.innerHTML = string;
}

function run(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
  var result = squareEquation(a, b, c);
  document.getElementById('result').innerHTML = result;
  document.getElementById('resultDiv').style.display = 'block';
}


//-->
//</script>