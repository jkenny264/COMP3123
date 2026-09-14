console.log("Hello, World!");

var a = 100

console.log(a);
a = "Test"
console.log(a);

b = 200
b = "Another Test"
var b = "redelcared"

console.log(b);

//ES6
let c = 300
c = "Yet Another Test"
// let c = 400
console.log(c);

let d;
d = 500;

const x = 600;
// x = "test"

// const x = 7
console.log(x);

// function declaration
function testLetConst(){
    const x = 700
    let c = 400
    console.log(`IN Block c: ${c}`);
}
testLetConst();
console.log(`OUT Block c: ${c}`);

var flag = false
console.log(typeof a)
console.log(typeof c)
console.log(typeof flag)
console.log(typeof testLetConst)

// declaring a function using a funtion expression
let sayHello = function() {
    console.log("Hello, World again!");

}
sayHello();

let greet = () => {
    console.log("Hello, World again with arrow function!");
}
greet();

//Array Handling
let arr = [1, "two",3,4, "five", null, false, undefined, {}, []]
console.log(arr)
console.log(arr[1])
console.log(arr.length)

let name = undefined
console.log(name)
console.log(typeof name)

let obj = null//Object Type
console.log(obj)
console.log(typeof obj)

let city = {} //Object Type
console.log(city)
console.log(typeof city)

//Map
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
let newnumbers = numbers.map((num) => num * 2)
console.log(newnumbers)

//Filter
let evenNumbers = numbers.filter((n) => n % 2 === 0)
console.log(evenNumbers)

//Reduce
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

//ForEach
const outNumbers = numbers.map((num) => num * 2)
    .filter((n) => n > 2)
    //.forEach((num) => console.log(num))

console.log(outNumbers)