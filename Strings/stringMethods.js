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

console.log('-----------------------------------------------------------');

const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."                 // can use '/' at end of each line to indicate string continues on next line also
console.log(longString) 

console.log('-----------------------------------------------------------');


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

console.log('-----------------------------------------------------------');


// String - Methods

// 1) String.prototype[@@iterator]()  : 
const txtRn = "Premkumar is going to home";
const iterator = txtRn[Symbol.iterator]();
let itemChar = iterator.next();

while(!itemChar.done && itemChar.value !== ' '){
    console.log(itemChar.value);
    itemChar = iterator.next();
}

console.log('-----------------------------------------------------------');


// 2) String.prototype.at() : 
let name = 'Akash', ind = 2;
console.log(`string value at ${ind} : ${name.at(ind)}`);
ind = -1;
console.log(`string value at ${ind} : ${name.at(ind)}`);   // returns last character of string
console.log('-----------------------------------------------------------');


// 3) String.prototype.charAt()
let animal = 'mouse';
console.log(`Character at index: ${3} is ${animal.charAt(3)}`)
console.log('-----------------------------------------------------------');


// 4) String.prototype.charCodeAt()
console.log(`Character at index: ${3} is ${animal.charCodeAt(3)}`)
console.log('-----------------------------------------------------------');


// 5) String.prototype.codePointAt()
const icons = '☃★♲';
console.log('code point at index 1 is' , icons.codePointAt(1))
console.log('-----------------------------------------------------------');


// 6) String.prototype.concat() 
const str1 = 'Premkumar';
const str2 = 'Hulikoppe';
console.log('resultant string', str1.concat(' ', str2));
console.log('-----------------------------------------------------------');


// 7) String.prototype.endsWith()
const str3 = 'Cats are the best!';
console.log(str3.endsWith('best!'));
console.log('-----------------------------------------------------------');


// 8) String.fromCharCode()
console.log(String.fromCharCode(100, 101, 151, 272));
console.log('-----------------------------------------------------------');


// 9) String.fromCodePoint()
console.log(String.fromCodePoint(8088, 9327, 9152));
console.log('-----------------------------------------------------------');


// 10) String.prototype.includes()
const stringLine = 'Premkumar is at Noida currently, working as Software developer';
console.log(stringLine.includes('Noida'));
console.log('-----------------------------------------------------------');


// 11) String.prototype.indexOf()
const paragraph = 'I am Premkumar hulikoppe is Premkumar';
console.log(paragraph.indexOf('Premkumar'));
console.log('-----------------------------------------------------------');


// 12) String.prototype.lastIndexOf()
console.log(paragraph.lastIndexOf('Premkumar'));
console.log('-----------------------------------------------------------');


// 13) String.prototype.localeCompare()
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
console.log('-----------------------------------------------------------');


// 14) String.prototype.match()
const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[a-g]/g;
const found = paragraph1.match(regex);
console.log('found '  , found.sort());
console.log('-----------------------------------------------------------');


// 15)  String.prototype.matchAll()
const regexp = /foo[a-z]*/g;
const str = 'table football, foosball';
const matches = str.matchAll(regexp);
console.log('-----------------------------------------------------------');


// console.log(`matches : ${matches}`);
for (const iterator of matches) {
    console.log(`Found ${iterator} in string`);
}

console.log('-----------------------------------------------------------');

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
console.log('-----------------------------------------------------------');


// 17) String.prototype.padEnd()
const newLine = 'All is well';
const paddedLine = newLine.padEnd(20, ' * ');
console.log(`paddedLine : ${paddedLine} length got: ${paddedLine.length}`);
console.log('-----------------------------------------------------------');


// 18) String.prototype.padStart()
const newStr = 'well';
const padedStr = newStr.padStart(10, '₹ ');
console.log(`padedStr : ${padedStr} length got: ${padedStr.length}`);

// 19) String.raw()
const filePath = String.raw`C:\Development\profile\aboutme.html`;

console.log(`filePath: ${'C:\Development\profile\aboutme.html'}`)  // without raw()
console.log(`filePath: ${filePath}`)

console.log(String.raw`Hi\n${35+3}`);
console.log(`Hi\n${35+3}`);

console.log(String.raw`Hi\u00AA`);
console.log(`Hi\u00AA`);

const doc = String.raw`<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Hello</title>
  </head>
  <body>
  \n
  <h1>Hello world!</h1>
  </body>
  \n
</html>`;

const doc1 = `<!DOCTYPE html>
<html lang="en-US">
  <head>
  \n
    <title>Hello</title>
  </head>
  <body>
  \n
    <h1>Hello world!</h1>
  </body>
</html>`
console.log(`doc: ${doc}`);
console.log(`doc1: ${doc1}`);


console.log('-----------------------------------------------------------');

// 20) String.prototype.repeat()
const rep = 'Prem is running ';
const finalCopy = `The result i want is: ${rep.repeat(5)}`;
console.log(finalCopy)

console.log('-----------------------------------------------------------');

// 21) String.prototype.replace()
const p = 'The quick brown yellow monkey is riding bycycle, monkey is running for oranges';
const rgx = /Monkey/i;
const rgx1 = /Monkey/gi;
console.log(p.replace(rgx, 'horse'));
console.log(p.replace(rgx1, 'horse'));  //  for global changes

console.log('-----------------------------------------------------------');

// 22) String.prototype.replaceAll()
const p2 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const resP2 = p2.replaceAll('dog', 'horse');
const resP3 = p2.replaceAll(/The/ig, 'A');
console.log(`replace all result2: ${resP2}`)
console.log(`replace all result3: ${resP3}`)
console.log('aabbbcc'.replaceAll('b', '.'));
console.log('aabbbcc'.replaceAll(/B/ig, '.'));  // must user global flag
console.log('xxxx'.replaceAll('', '_'));   // if specified string is empty then replacement happen inbetween for each character

console.log('-----------------------------------------------------------');

// 23) String.prototype.search()
const para = 'Please help me to search Mr.Premkumar';
console.log('search result ', para.search('me'));  // returns index
console.log('search result ', para.search('pre'));  // returns -1 if no match

console.log('-----------------------------------------------------------');