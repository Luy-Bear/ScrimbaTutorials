// Problem 1
// Create two variables, firstName and lastName
let firstName = "Pedro"
let surName = "Rodrigues"

// Concatenate the two variables into a third variable called fullName
let fullName = firstName +" "+surName

// Log fullName to the console
console.log(fullName)
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 2
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function Greet(){
    console.log(greeting+","+name+"!")
}
Greet()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 3
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){myPoints+=3}
function removePoint(){myPoints-=1}



// Call the functions to that the line below logs out 10
add3Points()
add3Points()
add3Points()
removePoint()
removePoint()
console.log(myPoints)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 4
// Try to predict what each of the lines will log out
console.log("2" + 2)                // 22
console.log(11 + 7)                 // 18
console.log(6 + "5")                // 65
console.log("My points: " + 5 + 9)  // My points: 59
console.log(2 + 2)                  // 4
console.log("11" + "14")            // 1114

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 5
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
function ErrorMsg(){
    let pElem = document.getElementById("error")
    pElem.textContent = "Something went wrong, please try again"
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 6
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
function add(){
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = num1 + num2
    sumEl.textContent = "Sum: " + sumEl.textContent
    console.log("add")
}

function subtract(){
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = num1 - num2
    sumEl.textContent = "Sum: " + sumEl.textContent
    console.log("sub")
}

function divide(){
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = num1 / num2
    sumEl.textContent = "Sum: " + sumEl.textContent
    console.log("div")
}

function multiply(){
    let sumEl = document.getElementById("sum-el")
    sumEl.textContent = num1 * num2
    sumEl.textContent = "Sum: " + sumEl.textContent
    console.log("mult")

}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem 7


