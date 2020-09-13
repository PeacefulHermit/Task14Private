function countDuplicates(str) {
	arr = eval(str);
	arr.sort();

	var current = null;
    var cnt = 0;
    var str = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != current) {
            if (cnt > 0) {
                str += current.toString() + " comes --> " + cnt.toString() + " times<br>";
            }
            current = arr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
       str += current.toString() + " comes --> " + cnt.toString() + " times<br>";
    }


	return str;		
}

function runDuplicates(){
  x ="["
  x += document.getElementById('countDuplicates').value;
  x += "]"
  var result = countDuplicates(x);
  document.getElementById('resultDuplicates').innerHTML = result;
 
}