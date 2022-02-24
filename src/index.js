const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
	 let result = '';
	 let word = '';
	 for (let i = 0; i < expr.length; i+=10){
		 word = expr.slice(i, i + 10);
		 if (word == '**********'){ result += ' '}
		 else {
			 let letter = '';
			 let keyLetter = '';
			 for (let j = 0; j < word.length; j+=2){
				 letter = word.slice(j, j + 2)
				 if (letter == '10'){ keyLetter += '.'}
				 if (letter == '11') { keyLetter += '-'}
			 }
			 result += MORSE_TABLE[keyLetter];
		 }
	 }
	 return result;
}

module.exports = {
    decode
}