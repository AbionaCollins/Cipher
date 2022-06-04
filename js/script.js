


// Prompting a user for a sentence;
let sentence = prompt("kindly input your sentence");
console.log (sentence);

// first and last character of the sentence
function character(sentence){

    let firstcharacter = sentence.charAt(0).toUpperCase();
    let lastcharacter = sentence.charAt(sentence.length -1).toUpperCase();
    let concat1 = firstcharacter.concat(lastcharacter);
    return concat1;

}

console.log(character(sentence))


// Second funtion to reverse the order of the first function
function rev(sentence){

    let rev1 = sentence.split("");
    let rev2 = rev1.reverse ();
    let rev3 = rev2.join("");
    return rev3;

}
console.log(rev(sentence))

// function reverse the order of my first and last letter

function reverseFirstAndLast(){

    let rev = firstAndLast.split("")

}

function reverseString(str){
    //  step 1. use the split() method to return
    let splitstring = str.split("");

    let reverseArray = splitstring.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
}