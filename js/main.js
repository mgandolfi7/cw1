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
// var summation = function (num) {
//     let sum = 0;
//     for (i = 1; i <= num; i++) {
//       sum += i
//     }
//     return sum
//   }

//   console.log(summation(6))


//05
//   function countSheeps(arrayOfSheep) {
  
//     let sum = 0;
//     for (i = 1; i < arrayOfSheep.length; i++) {
//       if (arrayOfSheep[i] === true) {
//         sum++
//       }
//     }
//     return sum
//   }

// console.log(countSheeps([true, false, true, false, true, true, true]))

//06
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length - 1] ? true : false
//   }

//   console.log(feast)

//07
// function powersOfTwo(n){
//     newArr = [];
    
//     for (i = 0; i <= n; i++) {
//       newArr.push(Math.pow(2, i))
//     }
//     return newArr
//   }

//   console.log(powersOfTwo(2))

//08
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2)
}

console.log(nearestSq(8))