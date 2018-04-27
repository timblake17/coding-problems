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
function getMiddle(s)
{
var len=s.length
  if(len%2==0){
  var letter=s.slice(len/2-1,len/2+1);
}else{
  letter=s.slice(len/2,len/2+1)
}
return letter
}

console.log(getMiddle('test'))

//
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


function filter_list(l) {
  var final=[];
  for(var i=0; i<l.length; i++){
  var index=l[i];
  var type= typeof index;

  if(type=='number'){
    final.push(index)
      }
    }
     return final
  }


  function multiplicationTable(width, height){
    var table = [];
    var row = [];

    for (i = 0; i < width; i++){
      for (j = 0; j < height; j++){
        row.push((i + 1)*(j + 1));
      }
      table.push(row);
      row = [];
    }
    return table;
  }

    //first num is how many arrays
    ///second num is how many numbers in the array
    //for loop for second number
  }
