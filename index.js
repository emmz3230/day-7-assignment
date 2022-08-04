// function fullName(firstname,lastname){
//     return `${firstname} ${lastname}`
// }
// console.log(fullName("asabeneh","yetayeh"))

// function sumArayValues(arr){
//     let sum = 0;
//     for(let i =0; i < arr.length; i++){
        
//         sum = sum + arr[i];
    
//     }
//     return sum;
// }
// let numbers = [1,2,3,4,5];
// console.log(sumArayValues(numbers));

// const areaOfCircle = (radius) => {
//     let area = Math.pi * radius * radius;
//     return area; 
// }
// console.log(areaOfCircle(10));


// function sumAllNums(){
//    console.log(arguments) 
// }
// sumAllNums(1,2,3,4);

// function sumAllNums(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
        
//     }
//     return sum
// }
// console.log(sumAllNums(1,2,3,4))



// const smallNums = (...args) => {

//     console.log(args)
// }
// smallNums(1,2,3,4);




// const sumAllNum = (...args) => {
//     let sum = 0
//     for (const element of args){
//         sum += element
//     }
//     return sum 
// }
// console.log(sumAllNum(1,2,3,4))

//  let squaredNum = (function (n) {
//     return n*n
// })(10);

// console.log(squaredNum)
// const changeToUppercase = arr => {
// const newArr = [];
// for (const element of arr) {
//     newArr.push(element.toUpperCase())
// }
// return newArr;
// }
// const countries = [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUppercase)

//     function greetings(name = 'peter'){
//     let message = `${name}, welcome to 30 days of javasript!`
//     return message 
// }
// console.log(greetings())
// console.log(greetings('Asabeneh'))

// function generateFullName(firstName = 'asabeneh',lastName = 'yetayeh'){

// let space = ' '
// let fullName = firstName + space + lastName
// return fullName
// }
// console.log(generateFullName())
// console.log(generateFullName('david','smith'))

// function calculatAge(birthYear, currentYear = 2019){
//     let age = currentYear - birthYear
//     return age
// }
// console.log("Age:", calculatAge(1819))

// const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
// console.log('Weight of an object in Newton: ', weightOfObject(100))


// Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of 
//  a linear equation, solveLinEquation.
const linearEquation = (ax,by,c) => ax + by + c  ;
console.log(linearEquation(2,3,4)) 

// Quadratic equation is calculated as
// follows: ax2 + bx + c = 0. Write a 
// function which calculates value or
// values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
const quadraticEquation = (ax2,bx,c) => ax2 + bx + c ;
console.log(quadraticEquation(3,4,5))


// Declare a function name printArray. It takes array
// as a parameter and it prints out each value of the array.
const printArray = (arr) => arr;
console.log(printArray(arr = " asabeneh, bright,blessing ,victory"))


// Write a function name showDateTime which shows time in this 
// format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
let showDate = new Date (); 
let date = showDate.getDate();
let month = showDate.getMonth();
let year = showDate.getFullYear();
let hour = showDate.getHours();
let minutes = showDate.getMinutes();


const showDateTime = (showDate) => showDate;
console.log(showDateTime(`${date}/${month}/${year} ${hour}:${minutes}`))


// Declare a function name swapValues. This function swaps value 
// of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// let y = x;
// let x = y;
// let value = "y,x";
// const swapValues = (value) => value;
// console.log(swapValues(3,4))


// Declare a function name reverseArray.
// It takes array as a parameter and it
// returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

const reverseArray = (rever) => rever.reverse();
console.log(reverseArray([1,2,3,4,5]));



// Declare a function name capitalizeArray. 
// It takes array as a parameter and it returns
// the - capitalizedarray.

const capitalizeArray = ( capitalizedarray) => capitalizedarray;
console.log(capitalizeArray(9))

// Declare a function name addItem. It takes an 
// item parameter and it returns an array after adding the item
let itemArr = [];
function addItem (item){
    itemArr.push(item);
    return itemArr;
}
console.log(addItem("chew-gum"));


// Declare a function name removeItem. It takes 
// an index parameter and it returns an array 
// after removing an item
let foodArray = ['food' , 'drinks','bisuit','chin-chin']
function removeItem(index) {
      let indoe = foodArray.indexOf(index);
      let remove = 1;

    //  foodArray.shift(index);
    //  foodArray.splice(-1,-1)
     foodArray.splice(indoe.remove)
     return foodArray;
}
console.log(removeItem("chin-chin"))

// Declare a function name sumOfNumbers. It 
// takes a number parameter and it adds all 
// the numbers in that range.

let range = 0;
 function sumOfNumbers(num){
    for (let i = 0; i <= num; i++) {
        range +=  i  
    }
    return range
 } 
 
 console.log(sumOfNumbers(7));


//  Declare a function name sumOfOdds. It takes a 
//  number parameter and it adds all the odd 
//  numbers in that - range.
    
let  rangeNum = 0;
    function sumOfOdds(numb){
      for(let i= 0; i <= numb; i++){
        if (i % 2 == 1){
          rangeNum += i
        }
      }
      return rangeNum
    }
    console.log(sumOfOdds(9))

//  Declare a function name sumOfEven. It takes a 
//  number parameter and it adds all the even
//  numbers in that - range.

    let rangeNumbe = 0;
    function sumOfEven(numbe){
      for (let i = 0; i <= numbe; i++) {
        if(i % 2 === 0){
          rangeNumbe += i;
        }
      }
        return rangeNumbe;
    }
    console.log(sumOfEven(10))
 
//  Declare a function name evensAndOdds . It takes a 
//  positive integer as parameter and it counts number 
//  of evens and odds in the number.

//  evensAndOdds(100);
//  The number of odds are 50.
//  The number of evens are 51.

      let oddNumber = 0;
      let evenNumber = 0;
      function evensAndOdds(int){
        for (let i = 0; i <= int; i++) {
          if(i % 2 == 0){
            evenNumber += 1
          }
          else{
            oddNumber += 1
          }
          
        }
        let odev = [evenNumber,oddNumber]
        return odev;
      }
      console.log(evensAndOdds(10))


//  Write a function which takes
//  any number of arguments and 
//  return the sum of the arguments
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));

//  sum(1, 2, 3) // -> 6
//  sum(1, 2, 3, 4) // -> 10
//  Writ a function which generates a randomUserIp.

// const randomIp = () => Array(4).fill(0).map((_, i) =>
// Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');
  
function randomUserIp(){
    let ip =  (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
      return ip
    }
    console.log(randomUserIp())

// Write a function which generates a 
// randomMacAddress

    let randomHexa = "12347890sdxfgcvh";
    let macAddress = "";
    function randomMacAddress(){
      for (let i = 0; i < 6; i++) {
       macAddress+=randomHexa.charAt(Math.round(Math.random() * 15))
       macAddress+=randomHexa.charAt(Math.round(Math.random() * 15))
        if(i != 5){
          macAddress += ":";
        }
      }
      return macAddress;
    }
    console.log(randomMacAddress())
// Declare a function name randomHexaNumberGenerator.
// When this function is called it generates a random
// hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
let decimalFigure = "#szdxfcghjlkv";
 function randomHexaNumberGenerator(){
   let rando = (Math.floor(Math.random(decimalFigure)))
    return rando
 }
 console.log(randomHexaNumberGenerator());
// Declare a function name userIdGenerator. When 
// this function is called it generates seven 
// character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE

let userId = "13234asddf";
let id = "";
function userIdGenerator (){
    for (let i = 0; i < 7; i++) {
      id+=userId.charAt(Math.floor(Math.random() * 10));
    }
    return id 
}
console.log(userIdGenerator());





// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
// myFunction('bnchmf') => Expected answer = 'coding'
// myFunction('bgddrd')  => Expected answer = 'cheese'
// myFunction('sdrshmf') => Expected answer = 'testing'
// I'll pay for the figma class of the first person to solve it
// Goodluck
// Two people would win free access to the figma class

// function myFunction(word){
//   let wordArray = word.split("");
//   let newArray = [];
//   for (let index = 0; index < wordArray.length; index++) {
//     newArray.push(
//     wordArray[index].substring(0, wordArray[index].length - 1)+ String.fromCharCode(wordArray[index].charCodeAt(wordArray[index].length - 1) + 1)
//     )
//   }
  
//   console.log(newArray.toString().replace(/,/g, ''));
// }

// myFunction("bnchmf");
// myFunction('bgddrd');
// myFunction('sdrshmf');

// level 3

// Modify the userIdGenerator function. Declare a 
// function name userIdGeneratedByUser. It doesn’t take
// any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the 
// second input is the number of ids which are supposed to be generated.
  
// let prompt = prompt();
// function userIdGeneratedByUser () {

  // }

  // console.log(userIdGeneratedByUser())
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf

// 'userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr

// 'Write a function name rgbColorGenerator and
// it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)

// var letters = "01234567890123456";
// var colors = "#"

// function random(number){
//   return Math.floor(Math.random()*number);
// }
// function randomColor(){
// return 'rgb('+random(255)+','+random(255)+','+random(255)+')';    
// }

function rgbColorGenerator(){
   
      let r = (Math.floor(Math.random() * 256))
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)

      colors = `rgb(${r},${g},${b} )`
      return colors 
}
console.log(rgbColorGenerator())


// Write a function arrayOfHexaColors which return 
// any number of hexadecimal colors in an array.

  function arrayOfHexaColors(){
    
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;  
  }
  console.log(arrayOfHexaColors())

// Write a function arrayOfRgbColors which return 
// any number of RGB colors in an array.

function arrayOfRgbColors(){
  let arr = [];
  for (let i = 0; i < 3; i++) {
    let fut = (Math.floor(Math.random() * 256))
    arr.push(fut);
  }
   return `rgb(${arr.join()})`
}
console.log(arrayOfRgbColors())


// Write a function convertHexaToRgb which converts
// hexa color to rgb and it returns an rgb color.

 function convertToRGB(word){
    if(word.length != 6){
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = word.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

console.log(convertToRGB('1502BE'));
console.log(convertToRGB('ff0000'));
// console.log(convertToRGB('f00'));

  // Write a function convertRgbToHexa which converts 
  // rgb to hexa color and it returns an hexa color.
   function convertHexaToRgb(r,g,b){
    function toHexadecimal(a){
      if (a <= 0)return 00;
      else if (a >= 255)  return 'FF';
      else return a.toString(16).toUpperCase();
    }
    let hash = "#"  + toHexadecimal(r) + toHexadecimal(g) + toHexadecimal(b);  
    return hash
    //  if(convert.length != 3){
    //    throw " rgb color"
    //  }
    //    let rgb = converts.match(/.{1,2,3}/g)
    //   parseInt(rgb[#ff], 256)
    //   parseInt(rgb[#00], 0)
    //   parseInt(rgb[#CO], 192)

   }
   console.log(convertHexaToRgb(162,255,0))
  // Write a function generateColors which can generate 
  // any number of hexa or rgb colors.
  // console.log(generateColors('hexa', 3)) // ['#a3e12f','#03ed55', '#eb3d2b']
  // console.log(generateColors('hexa', 1)) // '#b334ef'
  // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
  // console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

let hexFigures = "1223456abcdefg";
let has = '#';
function generateColors(hex, no){
  if (hex == "hexa"){
      let arry = [];
      for (let i = 0; i < no; i++) {
      arry.push(arrayOfHexaColors())
      
    }
  }
  else {
    for (let i = 0; i < array.length; i++) {
     arry.push(rgbColorGenerator())
    }
   
  }

 
}

console.log(generateColors('hexa', 2));
// Call your function shuffleArray, it takes an array 
// as a parameter and it returns a shuffled array

//  let shuttleWords = ["a","b","c","d","e","f","g","h","i","j"]

let original = [];


function shuffleArray (original){
  let copy = [].concat(original);
copy.sort(function () {
  return 0.5 - Math.random()
});
console.log(copy);
}
console.log(shuffleArray(["a","b","c","d","e","f","g","h","i","j"]))

// Call your function factorial, it takes a whole
// number as a parameter and it return a factorial of the number
  function factorial(number2){
      if(number2 === 0 || number2 === 1)
      return 1;
      for (var i = number2 - 1; i >= 1; i--){
        number2 *= i;
      }
      return number2;
  }
  console.log(factorial(5));
  
// Call your function isEmpty, it takes a parameter
// and it checks if it is empty or not
   function isEmpty (figure){
    if (figure){ 
      return true
    }
    else {
      return false
    }

   }
   console.log(isEmpty())
// Call your function sum, it takes any number of
// arguments and it returns the sum.
   function sum (fig){
     return fig
   }
   console.log(sum(2))

// Write a function called sumOfArrayItems,
//  it takes an array parameter and return
// the sum of all the items. Check if all
// the array items are number types.
// If not give return reasonable feedback.

function sumOfArrayItems(arr){
   let sumer = 0;
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') sumer+= arr[i];
    else console.log(`arr[${i}] is not a number ::: ${arr[i]}`)
  }
  return sumer
 }
 console.log(sumOfArrayItems([1,2, "say", 3,4,5]))

// Write a function called average,
//  it takes an array parameter and 
//  returns the average of the items.
//  Check if all the array items are
//  number types. If not  give return 
//  reasonable feedback.
 function avarage (arr){
  let sum = sumOfArrayItems(arr);
  return sum / arr.length
 }
 console.log(avarage([9,8,7,6,5,4]))
// Write a function called modifyArray
//  takes array as parametera nd modifies 
// the fifth item of the array and return the array.
// If the array length is less than five it
//  return 'item not found'.
// console.log(modifyArray(['Avocado', 
// 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 
// 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook',
// 'Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon',
// 'MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 
// 'Facebook','Apple', 'Amazon']);
  // 'Not Found'

let arrayItem = ["sweet","biscuit","chocolate","soap","detergent"]
 function modifyArray(arrayItem){
    // arrayItem
    if(arrayItem.length < 5){
      console.log("item not find")
    }
    else{
      return arrayItem[4]
    }
 }
 console.log(modifyArray(arrayItem))


// Write a function called isPrime, which 
// checks if a number is prime number.
// function isPrime(num){
//   for (let i = 2; i < num; i++) 
//     console.log(i)
//     if(num % i === 0) return false;
//     return num > 1;
// }
// isPrime()

//   function isPrimenum(num){
//   for(let i =2; i*i <= num; i++)
//   console.log(i)
//   if(num % i === 0)
//    return false;
//   return num > 1;
//  }
//  isPrimenum()

 function isPrime(number)
 { 
   if (number <= 1)
   return false;
   console.log(number)
   // The check for the number 2 and 3
   if (number <= 3)
   return true;

   if (number%2 == 0 || number%3 == 0)
   return false;

  //  for (var i=5; i*i<=number; i=i+6)
  // //  index = 5
  // // i*i = 5*5 <= num
  //   // 25 <=5
  // // i=i*6 5=i*6
  // //  5 =5*6 
  //  {
  //     if (number%i == 0 || number%(i+2) == 0)
  //     return false;
  //     console.log(i)
  //  }

   return true;
 }
 console.log(isPrime(17))

// Write a functions which checks if all
//  items are unique in the array.
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 'b', 1, 'a', 2, '1', 'b'];
var unique = a.filter(onlyUnique); 

a.filter( function (value, index, self) {
  console.log(value)
  console.log(index)
  console.log(self)
  console.log(self.indexOf(value))

})

console.log(unique);


// convert to this in es 6
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

console.log(unique);

// using a set keyword
var myArray = ['a', 1, 'a', 2, '1'];

let deeunique = [...new Set(myArray)];

console.log(deeunique);
// Write a function which checks if all
//  the items of the array are the same data type.
 let arrayFigure = ["number",3,null,undefined]
 function checksArray(){
  if(typeof arrayFigure != []){
    console.log("not an array")
  }
  else{
    console.log("it is an array")
  }
 }
 console.log(checksArray())
// JavaScript variable name does not support 
// special characters or symbols except $ or _.
// Write a function isValidVariable which 
// check if a variable is valid or invalid variable.
function isValidVariable(){

}
// Write a function which returns array of 
// seven random numbers in a range of 0-9.
// All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNumbers(){
  let randomArrays = [0,1,2,3,4,5,6,7,8,9]
  console.log(Math.floor(Math.random(randomArrays)))
  
}
sevenRandomNumbers()

// Write a function called reverseCountries,
//  it takes countries array and first it copy
//  the array and returns the reverse of the
// original array
// let countriesArray = ["usa","canada","mexico","kenya"]
let newWord;
function reverseCountries (countriesArray){
   let theReverse = countriesArray.reverse()
  
   newWord = theReverse
   console.log(newWord)
   return newWord;
  
}
console.log(newWord)
console.log(reverseArray( ["usa","canada","mexico","kenya"]))

// $car = array("exotic"=>array("lamborghini",
//  "Ferrari","Rolce","Royce")
// );
// console.log(
//   Echo$cars[0]
// )








