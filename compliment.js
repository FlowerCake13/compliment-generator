function pickRandomWord(word){
  var randomNum = Math.floor(Math.random() * (word.length - 0)) + 0;
  return word[randomNum]
}

function generateCompliment() {
	var bodyParts = ["big toe", "lips", "hair"];
	var adj = ["adorable", "elegant", "graceful"];
	var randomWord = ["cake", "cupcake", "flower"];
	var string = "Your " + pickRandomWord(bodyParts) + " are like a " + pickRandomWord(adj) + " " + pickRandomWord(randomWord) + "!!!"
	console.log(string);
}
//pickRandomWord(["cake","awesome","cupcake"]);
generateCompliment();