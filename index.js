//practice from w3schools
const cars = ["Saab", "Volvo", "BMW"]; // [] = array litteral
//can also be 
//const cars = new Array("Saab", "Volvo", "BMW"); but for simpler code and easier to read use array litteral const = []

/*
creating an array 
const array_name = [item1, item2, ...];
common practice to declare arrays with const

const cars = ["Saab", "Volvo", "BMW"];
can also be
const cars = [
    "Saab", 
    "Volvo", 
    "BMW"
];

or create an array and provide elements 
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
*/

//array indexes start with 0
//change the first value of the first element in cars
cars[0] = "Opel";

console.log(cars);





//converting and array to a string using toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//adding a new element to the array
fruits.push("Lemon");
//looping through an array with a for loop 
let fLen = fruits.length;

//accessing the array in the innerHTML 
document.getElementById("demo").innerHTML = fruits.toString();

let text = "<ul";
for (let i = 0; i < fLen; i++){
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"

/*
can also be written using Array.forEach()
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>"

function myFunction(value) {
    text += "<li>" + value + "</li>";
}


//array elements can be objects
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/


//nesting arrays and objects
const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models: ["320", "X3", "X5"]},
        {name: "Fiat", models: ["500", "Panda"]}
    ]
}

//access an array inside array with a for-in loop
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}




