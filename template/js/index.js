// function DNAStrand(dna){
// var arr=[];
//   /// loop stough string
//   for(var i=0; i<dna.length; i++){
//   var letter=dna[i];
//   if(letter == 'A'){
//    letter='T'
//    arr.push(letter);
//    console.log(arr)
//   } else if(letter == 'T'){
//    letter='A';
//    arr.push(letter);
//
//   }else if(letter == 'C'){
//    letter='G';
//    arr.push(letter);
//
//   }else if(letter == 'G'){
//    letter='C';
//    arr.push(letter);
//
//
//   }
// }
// return arr.join();
//
// }

///You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// function getMiddle(s)
// {
// var len=s.length
//   if(len%2==0){
//   var letter=s.slice(len/2-1,len/2+1);
// }else{
//   letter=s.slice(len/2,len/2+1)
// }
// return letter
// }
//
// console.log(getMiddle('test'))

//
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//
// function filter_list(l) {
//   var final=[];
//   for(var i=0; i<l.length; i++){
//   var index=l[i];
//   var type= typeof index;
//
//   if(type=='number'){
//     final.push(index)
//       }
//     }
//      return final
//   }
//
//
//   function multiplicationTable(width, height){
//     var table = [];
//     var row = [];
//
//     for (i = 0; i < width; i++){
//       for (j = 0; j < height; j++){
//         row.push((i + 1)*(j + 1));
//       }
//       table.push(row);
//       row = [];
//     }
//     return table;
//   }

///A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
//
// function letterValue(str){
//     var anum={
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
//         l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
//         u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     }
//     if(str.length== 1) return anum[str] || ' ';
//     var converted= str.split('').map(letterValue);
// }
//
// function solve(s) {
//   var arr=[];
//   var total=0;
//
//    var letterArr= s.split("");
//   for(var i=0; i<letterArr.length; i++){
//     var letter = letterArr[i]
//
//     function vowelTest(s) {
//       var tested= (/^[aeiou]$/i).test(s);
//       if(tested==!true){
//         total=total + letterValue(letter)
//         console.log(total)
//       }else  {
//         arr.push(total);
//         total=0;
//       }
//     }
//
//     vowelTest(letter)
//   }
//   console.log(Math.max.apply(null, arr))
//
// }
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)


function ascii (a) { return a.charCodeAt(0); }
//
// console.log(ascii('t'))




// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
//
// For each word:
//
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
function decipherThis(str) {
  var final=[];
  var temp=[];
  var strArr=str.split(" ");
  for(var i=0; i<strArr.length; i++){
    var word=strArr[i];
    for(var j=0; j<word.length; j++){
      var letter=word[j];
      if(letter.match(/^-{0,1}\d+$/)){
        letter=parseInt(letter)
        temp.push(letter)
      }
    }
    final.push(String.fromCharCode(temp.join("")))
    temp=[];
    var k;
  for(k=0; k<word.length; k++){
    var number=word[k];
    if(isNaN(parseInt(number))){
      break;
    }
  }
  if(k!=word.length){
  final.push(word[word.length-1])
  final.push(word.slice(k+1, word.length-1))
  if(word.length-1!=k){
  final.push(word[k])
  }
  }
  final.push(' ')

  }
  final.pop();
  return (final.join(""))
  }
