//01
// function arr(n) {
//     newArr = [];
//     for (i = 1; i <= n; i++) {
//         newArr.push(i)
//     }
// }

// arr(20)

// //02
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height
//     }
//   }

  //03 
//   function strCount(str, letter){  
//     return str.split(letter).length-1
//   }

//   console.log(strCount("hello", "l"))

//04
var summation = function (num) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
      sum += i
    }
    return sum
  }

  console.log(summation(6))