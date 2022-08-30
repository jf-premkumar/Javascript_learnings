// The String object is used to represent and manipulate a sequence of characters.
const string1 = "A string primitive";
const string4 = new String("A String object");

// data type  
console.log(typeof string1);
console.log(typeof string4);

const s1 = '2 + 2';              // creates a string primitive
const s2 = new String('2 + 2');  // creates a String object
console.log(eval(s1));           // returns the number 4
console.log(eval(s2));           // returns the string "2 + 2"

const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."                 // can use '/' at end of each line to indicate string continues on next line also
console.log(longString)    

//String conversion
const strVar = null;
// const conFirst = strVar.toString();  // TypeError: Cannot read properties of null (reading 'toString')
const conSec = String(strVar);
// console.log(conFirst)
console.log(`value : ${conSec}, type: ${typeof conSec}`);


const txt = undefined;
// const confir = txt.toString();     // TypeError: Cannot read properties of undefined (reading 'toString')
const consec = toString(txt);
// console.log(confir);  
console.log(`value : ${consec}, type: ${typeof consec}`);

// String - Methods

// 1) String.prototype[@@iterator]()  : 
const txtRn = "Premkumar is going to home";
const iterator = txtRn[Symbol.iterator]();
let itemChar = iterator.next();

while(!itemChar.done && itemChar.value !== ' '){
    console.log(itemChar.value);
    itemChar = iterator.next();
}

// 2) String.prototype.at() : 
let name = 'Akash', ind = 2;
console.log(`string value at ${ind} : ${name.at(ind)}`);
ind = -1;
console.log(`string value at ${ind} : ${name.at(ind)}`);   // returns last character of string

// 3) String.prototype.charAt()
let animal = 'mouse';
console.log(`Character at index: ${3} is ${animal.charAt(3)}`)

// 4) String.prototype.charCodeAt()
console.log(`Character at index: ${3} is ${animal.charCodeAt(3)}`)

// 5) String.prototype.codePointAt()
const icons = '☃★♲';
console.log('code point at index 1 is' , icons.codePointAt(1))

// 6) String.prototype.concat() 
const str1 = 'Premkumar';
const str2 = 'Hulikoppe';
console.log('resultant string', str1.concat(' ', str2));

// 7) String.prototype.endsWith()
const str3 = 'Cats are the best!';
console.log(str3.endsWith('best!'));

// 8) String.fromCharCode()
console.log(String.fromCharCode(100, 101, 151, 272));

// 9) String.fromCodePoint()
console.log(String.fromCodePoint(8088, 9327, 9152));

// 10) String.prototype.includes()
const stringLine = 'Premkumar is at Noida currently, working as Software developer';
console.log(stringLine.includes('Noida'));

// 11) String.prototype.indexOf()
const paragraph = 'I am Premkumar hulikoppe is Premkumar';
console.log(paragraph.indexOf('Premkumar'));

// 12) String.prototype.lastIndexOf()
console.log(paragraph.lastIndexOf('Premkumar'));

// 13) String.prototype.lastIndexOf()
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));   // a comes after b so +ve
console.log(b.localeCompare(a));    // b wont come after a so -ve
console.log('check'.localeCompare('against'));
console.log('check'.localeCompare('check'));   // both same so zero

const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
console.log(items)

// 14) String.prototype.match()
const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[a-g]/g;
const found = paragraph1.match(regex);
console.log('found '  , found.sort());

// 15)  String.prototype.matchAll()
const regexp = /foo[a-z]*/g;
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

// console.log(`matches : ${matches}`);
for (const iterator of matches) {
    console.log(`Found ${iterator} in string`);
}

// 16) String.prototype.normalize()
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`name1: ${name1} name2: ${name2}`);
console.log(name1 === name2)
console.log(name1.length == name2.length)

const nameNFC1 = name1.normalize('NFC');
const nameNFC2 = name2.normalize('NFC');
console.log(`nameNFC1: ${nameNFC1} nameNFC2: ${nameNFC2}`);
console.log(nameNFC1 === nameNFC2)
console.log(nameNFC1.length == nameNFC2.length)

