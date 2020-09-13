function sortZero(str) {
	arr = eval(str);
	str1 = "B: ";
	str2 = "<br>C: ";
	
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			str2 +=  arr[i].toString() + ", ";
		} 
		else
			if (arr[i] > 0){
				str1 +=  arr[i].toString() + ", ";
			}
			
	}
	str1 += str2;
	return str1;		
}

function runSortZero(){
  x ="["
  x += document.getElementById('sortZeroArray').value;
  x += "]"
  var result = sortZero(x);
  document.getElementById('resultSortZero').innerHTML = result;
 
}