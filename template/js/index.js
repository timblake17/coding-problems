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
// function decipherThis(str) {
//   var final=[];
//   var temp=[];
//   var strArr=str.split(" ");
//   for(var i=0; i<strArr.length; i++){
//     var word=strArr[i];
//     for(var j=0; j<word.length; j++){
//       var letter=word[j];
//       if(letter.match(/^-{0,1}\d+$/)){
//         letter=parseInt(letter)
//         temp.push(letter)
//       }
//     }
//     final.push(String.fromCharCode(temp.join("")))
//     temp=[];
//     var k;
//   for(k=0; k<word.length; k++){
//     var number=word[k];
//     if(isNaN(parseInt(number))){
//       break;
//     }
//   }
//   if(k!=word.length){
//   final.push(word[word.length-1])
//   final.push(word.slice(k+1, word.length-1))
//   if(word.length-1!=k){
//   final.push(word[k])
//   }
//   }
//   final.push(' ')
//
//   }
//   final.pop();
//   return (final.join(""))
//   }
//
//
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// function solution(number){
// var sum=0;
//  console.log(number)
//  for(var i=0; i<number; i++){
//  if (i%3==0 || i%5==0){
// sum= sum+i;
// }
//  }
//  return sum
// }
//
// function domainName(url){
// console.log(url)
//
//   for(var i=0; i<url.length; i++){
//    var letter=url[i]
//    if (letter== ":"||letter=="."){
//    var first=i;
//    for (var j=0; j<url.length+first; j++){
//    if (url[j] == "."){
//     var second=j
//
//    }
//    }
//
//    if(first!==second){
//    var address=url.slice(first+3,second)
//    }
//    else{
//    address=url.slice(0,first)
//    }
//
//    for (var k=0; k<address.length; k++){
//     var addressChar=address[k];
//     if(addressChar == "."&&k>3){
//     console.log(k)
//     address=address.slice(0,k)
//     }
//    }
//   return address
//
//    }
//
// }
// }

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
// return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
//
// }

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

function likes(names) {
  var len=names.length-2;
    if(names.length==0){
    return "no one likes this"
  }else if(names.length==1){
    return names[0]+' likes this'
  }else if(names.length==2){
    return names[0]+' and '+names[1]+' like this'
  }else if(names.length==3){
    return names[0]+', '+names[1]+' and '+ names[2] +' like this'
  }else if(names.length>3){
    return names[0]+', '+names[1]+' and ' +len+' others like this'
  }
