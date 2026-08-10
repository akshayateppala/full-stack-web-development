let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Original Array:", fruits);

// Access
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Add
fruits.push("Pineapple");
console.log("After Push:", fruits);

// Remove
fruits.pop();
console.log("After Pop:", fruits);

// Add at beginning
fruits.unshift("Watermelon");
console.log("After Unshift:", fruits);

// Remove from beginning
fruits.shift();
console.log("After Shift:", fruits);

// Length
console.log("Number of Fruits:", fruits.length);

// Search
console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Is Apple Available:", fruits.includes("Apple"));

// Display using loop
console.log("All Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Sort
fruits.sort();
console.log("Sorted Fruits:", fruits);

// Reverse
fruits.reverse();
console.log("Reverse Fruits:", fruits);

// Join
console.log("Fruit List:", fruits.join(", "));