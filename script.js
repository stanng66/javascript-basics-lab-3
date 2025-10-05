/*function showMessage(text) { // Original function
  document.getElementById("output").innerHTML += text + "<br>";
}*/

function showMessage(sectionId, text) {
  const output = document.querySelector(sectionId + " .output");
  if (output) {
    output.innerHTML += text + "<br>";
  } else {
    console.warn("Section not found:", sectionId);
  }
}



// =================================
// Step 2: If-else Condition
// =================================
// Write a simple program in script.js to check if a number is positive, negative, or zero using an if-else statement.
// Hint: Use if (number > 0) for positive numbers.
// Hint: Add else if (number < 0) for negatives.
// Hint: Use else for zero.

let number = 69; 

if (number > 0) {
    showMessage("#step2", "Number: " + number + " → This is a positive number."); 
} else if (number < 0) {
    showMessage("#step2", "Number: " + number + "This is a negative number.");
} else {
    showMessage("#step2", "Number: " + number + "This number is zero.");
}



// =================================
// Step 3: Switch Statement
// =================================
// Create a program that takes a number (1 to 7) and prints the corresponding day of the week.
// Hint: Use a switch statement with case blocks to match the number with the day.

let day = -1; 

switch (day) {
    case 1:
        showMessage("#step3", "Day: " + day + " → Monday");
        break;
    case 2:
        showMessage("#step3", "Day: " + day + " → Tuesday");
        break;
    case 3:
        showMessage("#step3", "Day: " + day + " → Wednesday");
        break;
    case 4:
        showMessage("#step3", "Day: " + day + " → Thursday");
        break;
    case 5:
        showMessage("#step3", "Day: " + day + "Friday");
        break;
    case 6:
        showMessage("#step3", "Day: " + day + "Saturday");
        break;
    case 7:
        showMessage("#step3", "Day: " + day + "Sunday");
        break;
    
    default:
        showMessage("#step3", "Day: " + day + " *Please enter a number between 1 and 7*");
}



// =================================
// Step 4: Loops (For, While, Do...While)
// =================================
// Practice using loops to print numbers from 1 to 5. Implement this using for, while, and do...while loops.

// For Loop Hint:
for (let a = 0; a <= 4; a++) {
    showMessage("#step4", "For Loop: " + a); // Print i
}
   


// While Loop Hint:
a = 0
 
while (a <= 4) { 
    showMessage("#step4", "While Loop: " + a); // Print i and increment
    a++;
﻿ } 



// Do...While Loop Hint:
let c = 0; 
 
do {
    showMessage("#step4", "Do...While Loop: " + c); // Print j j++;
    c++;
﻿} while (c <= 4); 





// =================================
// Step 5: Control Flow with break and continue
// =================================
// Modify your loop to stop when it reaches the number 3 using break. Try skipping the number 3 with continue.

// Break hint:
for (let d = 0; d <= 9; d++) {
    if (d === 3) {
        break; // Use Break here
    }
    showMessage("#step5", "Break the loop at " + d);
}



// Continue hint:
for (let e = 0; e <= 9; e++) {
    if (e === 3) {
        continue; // Use Continue here
    } 
     showMessage("#step5", "Continue the loop at " + e);
}





// =================================
// Step 6: Scope and Context
// =================================
// Explore scope by declaring variables inside and outside functions. Test which variables you can access.



// Code Hint:
let globalVar = "This is a global scope.";

function accessGlobal() {
    showMessage("#step6", globalVar); 
}
 

function localscopeExample() {
    let localVar = "This is a local scope.";
    showMessage("#step6", localVar); 
}

accessGlobal();
localscopeExample();




// Submitting Your Lab
// Host your project on GitHub Pages and ensure the link is accessible.
// Submit the GitHub Pages and the link to the repo into the drop box.
