function isAnagram(word1, word2) {
	a = sortAlphabets(word1);
	b = sortAlphabets(word2);
	if (a == b)
		return "true";
	else 
		return "false";
}

function sortAlphabets(text) {
    return text.split('').sort().join('');
};

function runAnagrams() {
	var a = document.getElementById('anagramWord1').value;
	var b = document.getElementById('anagramWord2').value;
	var result = isAnagram(a, b);
	document.getElementById('resultAnagrams').innerHTML = result;
}