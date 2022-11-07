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
// function nearestSq(n){
//     return Math.pow(Math.round(Math.sqrt(n)), 2)
// }

// console.log(nearestSq(8))

//09
// function multipleOfIndex(array) {
//     let newArr = []
//     for (i = 0; i <= array.length; i++) {
//         if (array[i] % i === 0) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr
//   }

//   console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

// //10
// function toCsvText(array) {
//     return array.join('\n')
//  }

//  console.log(toCsvText([
//     [0, 1,2,3,4],
//     [10,11,12,13,14],
//     [20,21,22,23,24],
//  ]));

// //11
// function multiTable(number) {
//     for (i = 1; i <= 10; i++) {
//       console.log(i + ' * ' + number + " = " + i*number)
//     }
//   }

// multiTable(5);

//12 
// function typeOfSum(a, b) {
//     return typeof(a + b)
//   }

//   console.log(typeOfSum(10, 20))

//13
// const phrases = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionatley",
//     "madly",
//     "not at all",
// ]

// function howMuchILoveYou(n) {
//     return phrases[(n-1) % phrases.length]
// }

// console.log(howMuchILoveYou(10))

// //14
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
//   }

//   console.log(DNAtoRNA("GCAT"))

//15

// function fixTheMeerkat(arr) {
//     return arr.reverse()
//   }

//   console.log(fixTheMeerkat(["tail", "body", "head"]))

//16
// function findMultiples(integer, limit) {
//     let newArr = [];
//     for (i = 1; i <= limit; i++) {
//         if (i % integer === 0) {
//             newArr.push(i)
//         }
//     }
//     return newArr;
//   }

//   console.log(findMultiples(2,6))

// //17
// function abbrevName(name){
//     let newArr = name.split(" ")
//     let firstI = newArr[0][0]
//     let lastI = newArr[1][0]

//     return firstI + "." + lastI + "."
// }

// console.log(abbrevName("Michael Gandolfi"))

//18 
// function noSpace(x){
//     return x.split(" ").join("")
//   }

//   console.log(noSpace("Michael Porter Gandolfi"))
  
//19
// function countPositivesSumNegatives(input) {

//     if (input == null || input.length == 0) {
//         return [];
//     }

//     let positive = 0;
//     let negative = 0;
    
//     for (i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         positive++
//       } else {
//         negative += input[i]
//       }
//     }
//     return [positive, negative]
//   }

//   console.log(countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]))

//20
// function findAverage(array) {
//     if (array.length === 0) {
//         return 0
//     } else {
//         return array.reduce((acc, c) => acc + c) / array.length
//     }

//   }

//   console.log(findAverage([10,20,30]))

//21
// function firstNonConsecutive (arr) {
//     for (i = 0; i <arr.length - 1; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             return arr[i + 1]
//         }
//     }
//     return null
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

//22
// function seatsInTheater(nCols, nRows, col, row) {
//     return (nCols-col+1) * (nRows-row)
// }

//23
// function index(array, n){

//     if (n >= array.length) {
//         return -1
//     } else {
//         return array[n] ** n
//   }
// }
//   console.log(index([1,2,3], 3))

//24 
// var countSheep = function (num){
//     let str = ""
//     for (i = 1; i <= num; i++) {
//         str+= `${i} sheep...`
//     }
//     return str
//   }

// console.log(countSheep(3))

//25
// function removeChar(str){
//     return str.slice(1,-1)
//    };

// console.log(removeChar("Michael"))
   
//26

// function getRealFloor(n) {
//     return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
//   }

//27
//   const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)

//28
// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }

//29
// function countSheeps(arrayOfSheep) {
//     let numTrue = 0;

//     for (i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             numTrue++
//         }
//     }
//     return numTrue

//   }

//   console.log(countSheeps([true, false, true, false, true, true]))

//30
// function powersOfTwo(n){
//     newArr = []
    
//     for (i = 0; i < n.length; i++) {
//       newArr.push(i^2)
//     }
//     return newArr
//   }

//31 
// function vaporcode(string) {
//     return string.split(" ").join("").split("").join("  ").toUpperCase()
// }

// console.log(vaporcode("Michael Gandolfi"))

// //32
// function modifyMultiply(str,i,n) {
//     return Array(n).fill(str.split(' ')[i]).join('-');
//   } 

// //33
//   function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

//34

// function sumEvenNumbers(input) {
//   let evenNums = [];
//   for (i = 0; i<= input.length; i++) {
//     if (input[i] % 2 === 0) {
//       evenNums.push(input[i])
//     }
//   }
//   let sum = evenNums.reduce((acc, c) => acc + c)
//   return sum
// }

// console.log(sumEvenNumbers([10,2,3,5,9,7]))

//35 
// function toNumberArray(stringarray){
//   let newArr = []
//   for (i = 0; i < stringarray.length; i++) {
//     newArr.push(Number(stringarray[i]))
//   }
//   return newArr
// }

// console.log(toNumberArray(["10", "2", "5"]))

// //36
// function descendingOrder(n){
//   return (String(n).split("").sort().reverse().join())
// }

// console.log(descendingOrder(42145))

//11/7/2022

//1

//   let vowels = ["a","e","i","o","u"]
  
//   const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).joij('')

// console.log(swap("Hello"));
//2 
// function squares(x, n) {
//   let newArr = []
//   for (i = 0; i < n; i++) {
//     newArr.push(x)
//     x*= x
//   }
//   return newArr
// }

// console.log(squares(2,5))

//3

// var isSquare = function(arr){
//   return arr.every(x => Math.sqrt(x) % 1 === 0) ? true : false 
// }

// console.log(isSquare([1,4,16]))

//4 
// function disemvowel(str) {
//   let vowels = 'aeiou'

//   for (i = 0; i <= str.lenght; i++) {


//   }
// }

// console.log(disemvowel('This website is for losers LOL!'))

//5 
// function getCount(str) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let count = 0

//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j])
//       count++
//     }
//   }
//   return count

// }

// console.log(getCount('Hello'))

//6 
// var isSquare = function(n){
//   return Math.sqrt(n) % 1 === 0 ? true : false
// }

// console.log(isSquare(10))

//7 
function highAndLow(numbers){
  let max = Math.max.apply(null, numbers.split(" ").map(Number))
  let min = Math.min.apply(null, numbers.split(" ").map(Number))

  return(max + " " + min)
}

console.log(highAndLow("1 2 3 4 5"))