let A;
class Machine {

	constructor(power) {
	      this._power = Math.floor(power/100);
	      this._enabled = true;
	      var self = this;
	      this.enable = function() { self._enabled = !self._enabled };

	}
}

class Fridge extends Machine{
	constructor(food, power) {
		super(power);
		this._food = new Array();
		this._food.push(food);
	}	
	
	
	getFood() {
		var str = "Fridge status: ";
		if (this._enabled)
			str += "enabled<br>";
		else
			str += "disabled<br>";
		str += "storage: ";
		for(var i = 0; i < this._food.length; i++){
			str += this._food[i] + ", ";
		}
		return str;
	}

	addFood(dish){
		if (!this._enabled){
			document.getElementById('console').innerHTML = "!! Fridge is disabled !!";
			return;
		}
		if (this._food.length < this._power) {
			this._food.push(dish);
			var str = this.getFood();
			document.getElementById('console').innerHTML = str;
		}
		else {
			var str = this.getFood();
			str += "<br> !! Power limit !!";
			document.getElementById('console').innerHTML = str;
		}
	}
} 

function classes(a, b) {
	A = new Fridge(b, a);
	var str = A.getFood();
	document.getElementById('console').innerHTML = str;
}

function enableButton(){
	A.enable();
	var str = A.getFood();
	document.getElementById('console').innerHTML = str;
}

function addButton(){
	var t = document.getElementById('foodName').value;
	A.addFood(t);
}

function runClasses() {
	var a = document.getElementById('power').value;
	if (a < 100) {
		document.getElementById('console').innerHTML = "!! Power less than 100 is not allowed !!";
	}
	else {
		var b = document.getElementById('foodName').value;

		document.getElementById('power').disabled="disabled";
		document.getElementById('enable').style.visibility = 'visible';	
		document.getElementById('addfood2').style.visibility = 'visible';
		document.getElementById('addfood').style.visibility = 'hidden';


		classes(a, b);

		
	}
}