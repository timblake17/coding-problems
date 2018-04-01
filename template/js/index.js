// A left rotation operation on an array of size N shifts each of the array's elements N units to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].
// Given an array of N integers and a number, D, perform D left rotations on the array. Then print the updated array as a single line of space-separated integers.

function shift(input,rot){
  var arr=[];
  for (var i=0; i<rot; i++){
    var num=input[i];
    arr.push(input.shift(num));

  }
  var combined=input.concat(arr);
  return (combined);
}

console.log(shift([3, 4, 5, 1, 2],2));
