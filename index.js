// //practice from w3schools
// const cars = ["Saab", "Volvo", "BMW"]; // [] = array litteral
// //can also be
// //const cars = new Array("Saab", "Volvo", "BMW"); but for simpler code and easier to read use array litteral const = []

// /*
// creating an array
// const array_name = [item1, item2, ...];
// common practice to declare arrays with const

// const cars = ["Saab", "Volvo", "BMW"];
// can also be
// const cars = [
//     "Saab",
//     "Volvo",
//     "BMW"
// ];

// or create an array and provide elements
// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";
// */

// //array indexes start with 0
// //change the first value of the first element in cars
// cars[0] = "Opel";

// console.log(cars);

// //converting and array to a string using toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //adding a new element to the array
// fruits.push("Lemon");
// //looping through an array with a for loop
// let fLen = fruits.length;

// //accessing the array in the innerHTML
// document.getElementById("demo").innerHTML = fruits.toString();

// let text = "<ul";
// for (let i = 0; i < fLen; i++){
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>"

// /*
// can also be written using Array.forEach()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>"

// function myFunction(value) {
//     text += "<li>" + value + "</li>";
// }

// //array elements can be objects
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;
// */

// //nesting arrays and objects
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
//         {name: "BMW", models: ["320", "X3", "X5"]},
//         {name: "Fiat", models: ["500", "Panda"]}
//     ]
// }

// //access an array inside array with a for-in loop
// for (let i in myObj.cars) {
//     x += "<h1>" + myObj.cars[i].name + "</h1>";
//     for (let j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j];
//     }
// }

// let names = ['Aiden', 'Cody', 'Nadia', 'Carsen'];

// let birthYears = [1997, 1997, 2023, 2024];

// let mapYears = birthYears.map(x => x * 2);

// console.log(mapYears);

// names = names.sort();
// console.log(names);

// birthYears.sort();
// console.log(birthYears);
// mapYears = mapYears.filter(x => x < 4000);

// console.log(mapYears);

// names.forEach(name => {
//   console.log(name);
// });

// birthYears.forEach(year => {
//   console.log(year);
// });

// let divisibleByTwo = birthYears.find(year => year % 2 === 0);
// console.log(divisibleByTwo);

const employees = [
  { name: 'Cody', department: 'Management', employeeId: '0001' },
  { name: 'Nadia', department: 'Management', employeeId: '0002' },
  { name: 'Aiden', department: 'Associate', employeeId: '0003' },
  { name: 'Carsen', department: 'Associate', employeeId: '0004' },
  { name: 'Frank', department: 'Janitorial', employeeId: '0005' },
  { name: 'Bob', department: 'IT Support', employeeId: '0006' },
  { name: 'Joe', department: 'IT Support', employeeId: '0007' },
  { name: 'Kris', department: 'Associate', employeeId: '0008' },
  { name: 'Kevin', department: 'Associate', employeeId: '0009' },
  { name: 'John', department: 'Associate', employeeId: '0010' },
];

const roles = [
  'Developer',
  'Support',
  'Engineer',
  'Pull Requests',
  'Peer Review',
  'Office Bitch',
  'Paper Work',
  'Cleaning',
  'Office Bitch',
];

employees[0].role = 'Lead';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledRoles = shuffleArray(roles);

employees.slice(1).forEach((employee, index) => {
  if (index < shuffledRoles.length) {
    employee.role = shuffledRoles[index];
  }
});

function assignRole() {
  let role = document.getElementById('assign-role');
  //   role.innerHTML = '';

  employees.forEach(employee => {
    role.innerHTML += `
  <div class="employee">
  <h1>Name: ${employee.name} Id:${employee.employeeId}  - ${employee.role}</h1>
  </div>
    `;
  });
}

assignRole();

let departmentList = document.querySelector('.department-list');

departmentList.classList.add('hide');

// function getDepartment() {
//   departmentList.innerHTML = '';
//   const differentDepartments = employees
//     .map(employee => employee.department)
//     .filter((department, index, self) => self.indexOf(department) === index);

//   differentDepartments.forEach(department => {
//     departmentList.classList.remove('hide');
//     departmentList.innerHTML += `
//         <p>${department}</p>
//         `;
//   });
//   return;
// }

let projectsIndex = 0;

const projects = [
  [
    { toBeDone: 'Design Website' },
    { toBeDone: 'Style Website' },
    { toBeDone: 'Design User Interface' },
    { toBedone: 'Style UI' },
    { toBeDone: 'Beta Test' },
    { toBeDone: 'Pull request' },
  ],
  [
    { toBeDone: 'Clean the Office' },
    { toBeDone: 'Mop' },
    { toBeDone: 'Grocery Shop' },
    { toBedone: 'Clean the bathroom' },
    { toBeDone: 'Sweep' },
    { toBeDone: 'Pull Bitches' },
  ],
  [
    { toBeDone: 'test' },
    { toBeDone: 'your mom' },
    { toBeDone: 'your dad' },
    { toBedone: 'Clean the bathroom' },
    { toBeDone: 'Sweep' },
    { toBeDone: 'Pull Bitches' },
  ],
];

let projectBoard = document.querySelector('.projects');

function displayPojects(index) {
  projects[index].forEach(project => {
    projectBoard.innerHTML += `
        <p>${project.toBeDone}</p>
        `;
  });
}

displayPojects(projectsIndex);

function newProjects() {
  //   projectBoard.classList.remove('flex');
  //   projectBoard.classList.add('hide');
  console.log(projectBoard);
  projectBoard.innerHTML = '';
  projectsIndex = projectsIndex < projects.length - 1 ? projectsIndex + 1 : 0;
  displayPojects(projectsIndex);
}

function getDepartment(department) {
  departmentList.innerHTML = '';
  const departmentEmployees = employees.filter(
    employee => employee.department === department
  );

  departmentEmployees.forEach(employee => {
    departmentList.classList.remove('hide');
    departmentList.innerHTML += `
        <p>${employee.name}-${employee.department}</p>
        `;
  });
  return;
}

let shoppingList = [
  { item: 'Pizza', price: 9.99 },
  { item: 'Cookies', price: 2.39 },
  { item: 'Cucumber', price: 1.49 },
  { item: 'Oranges', price: 3.49 },
  { item: 'Yogurt', price: 5.99 },
];

const shopping = document.querySelector('.shopping-list');

function displayShoppingList() {
  shopping.innerHTML = '';
  shoppingList.forEach(list => {
    shopping.innerHTML += `
        <p>Item: ${list.item} - Price: ${list.price}</p>
        `;
  });
}

displayShoppingList();

function applyPercent() {
  let percentage = document.getElementById('input').value;
  shoppingList = shoppingList.map(item => {
    return {
      ...item,
      price: applyDiscount(percentage, item.price),
    };
  });
  displayShoppingList();
}

function applyDiscount(percent, currentPrice) {
  const percentageDecimal = 1 - parseFloat(percent) / 100;
  return (currentPrice * percentageDecimal).toFixed(2);
}
