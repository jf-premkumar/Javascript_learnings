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

