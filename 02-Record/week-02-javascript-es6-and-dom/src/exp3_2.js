// 1. Function with no parameter
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// 2. Function with one parameter
function greet(name) {
    console.log("Hello " + name);
}
greet("Akshaya");


// 3. Function with multiple parameters
function add(a, b) {
    console.log("Sum:", a + b);
}
add(10, 20);


// 4. Function with return value
function square(n) {
    return n * n;
}
console.log("Square:", square(5));


// 5. Function with string parameter
function student(name, branch) {
    console.log("Name:", name);
    console.log("Branch:", branch);
}
student("Akshaya", "AIML");


// 6. Function with default parameter
function message(name = "Student") {
    console.log("Hello " + name);
}
message();
message("Akshaya");


// 7. Function Expression
let multiply = function(a, b) {
    return a * b;
};
console.log("Multiplication:", multiply(5, 4));


// 8. Arrow Function
let divide = (a, b) => {
    return a / b;
};
console.log("Division:", divide(20, 5));


// 9. forEach() function
let marks = [80, 75, 90, 85];

marks.forEach(function(mark) {
    console.log("Mark:", mark);
});


// 10. map() function
let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(function(n) {
    return n * 2;
});

console.log("Doubled:", double);


// 11. filter() function
let ages = [12, 18, 15, 21, 25];

let adults = ages.filter(function(age) {
    return age >= 18;
});

console.log("Adults:", adults);


// 12. reduce() function
let values = [10, 20, 30, 40];

let total = values.reduce(function(sum, value) {
    return sum + value;
}, 0);

console.log("Total:", total);