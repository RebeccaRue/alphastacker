


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// the stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
		var stack = "";
		
	for(var i = 0; i < theAlphabetArray.length; i++) {
		if (i % 3 === 0) {
			stack += " " + theAlphabetArray[i];
		}else{
		stack += theAlphabetArray[i];
		console.log(stack);
		}
	}
		
}


stackLetters(alphabet);

// var coolArray = ["this", "is", "cool", "i", "love", "to", "code", "so", "much"]

// function howdoesthiswork (anArray){
// for (var i = 0; 1; i < coolArray.length; 1++ ){
//		if (i % 2 === 0) {
//			console.log("i%2")
//		}else{
//			var num = 2;
//
//			console.log("i !% 2")
//		}
//	}
// }


//a array[i]
//b array[i+1]
//c ...


//function tango (persona1, person2){ }

