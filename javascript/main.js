/*


Create a function writeLine() that takes a length of words n and returns a line of poetry.

writeLine() will need a helper function that takes a word and randomly chooses a word from it's Markov Chain array. When a word has no entries in it's Markov Chain, the program should choose a new word and continue the line until it meets the word count.

You may call writeLine() a certain number of times to create an entire poem.

*/
//var paragraph = "How Do I love thee love? Let me count the ways";
var paragraph = "Love me, love me, say that you love me. Fool me, fool me, go on and fool me. I don't care about anything but you!"

function parseCorpus(text){
	text = text.toLowerCase();
	var answer = text.replace(/[^a-z\s]/ig, "").split(' ');
	
	return answer;
}
parseCorpus(paragraph);
//returns:
//// var corpusArray = ['how', 'do', 'I', 'love', 'thee', 'love', 'let', 'me', 'count', 'the', 'ways'];


function markovChain(str){
	var answer = {};
	var words = parseCorpus(paragraph);
	for ( var i = 0; i < words.length - 1; i++ ){
		//console.log(words[i]);
		var wordVal1 = words[i];
		var wordVal2 = words[i+1];
		//if key has more than 1 value, add that also...
		if (answer[wordVal1]) {
			answer[wordVal1].push(wordVal2);
		}
		else {
			answer[wordVal1] = [wordVal2];
		}
	}
	return answer;
}

markovChain(paragraph);

function randomlyChoose(wordArray) {
  var i = Math.floor(wordArray.length * Math.random());
  return wordArray[i];
}

function writeLine(markov) {
	var word = randomlyChoose(parseCorpus(paragraph));
	var wordpairs = markovChain(paragraph);
	var newPara = [word]; // start the paragraph
	while(wordpairs[word]) {
		var nextWords = wordpairs[word];
		word = randomlyChoose(nextWords);
		newPara.push(word);
		if(newPara.length > markov) {
			break;
		}
	}
	return newPara.join(' ');
}

//write poem
function poem(markovMyPara){
	var line;
	for(var i = 0; i < 6; i++) {
		line = Math.floor(Math.random() * 10) + 1;
		console.log(writeLine(line));
	}
}
poem(paragraph);