// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("capitalize", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }]
    expect(capitalize(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})


//======================== GOOD ERROR FAILURE ===============================//
// ● sumCubed › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: sumCubed is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function named 'capitalize'
//must take in an array of object as a parameter, we'll call it 'arr'
//declare a new variable called 'newArr' and set it to arr.map to iterate through the values of the array
//declare a new variable called 'name' and set it to the values.name.split.map which would refer to the 'name' key of the object and will split the name by spaces into 2 seperate indexes
//iterate through the array of the 'name' key and refer to the first letter of each index by using .charAt() method and refer to its 0 index
//capitalize it by using .toUpperCase() method, and add the value back into the array by using .substring(1) which would add the rest of the word without the first letter included
//return the variable 'name' which contains the capitalized letters and use .join() method to join the first name and last name into 1 index
//return the name plus the word "is" and refer to the key value of occupation to print out that value, which would be the whole completed sentence. 
//===========================================================================//


const capitalize = (arr) => {
    let newArr = arr.map(v => {
      let name = v.name.split(" ").map(val => val.charAt(0).toUpperCase() + val.substring(1) 
      )
      return v = name.join(" ") + ' is ' +  v.occupation 
    })
    return newArr
}


//TEST PASSED! 



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//======================== GOOD ERROR FAILURE ===============================//
// ● remainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: remainder is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function called 'remainder'.
//must take in an array of different data types as a parameter and will name the parameter 'arr'.
//declare a new variable called 'newArr' and set it to arr.filter, and filter out the non-numbers by using typeof method and set it strictly equals to equal 'number' which is addressing to the data type.
//once that is filtered, return the 'newArr' and use .map to iterate through the values inside the array and return the values modulo 3 which would return you the remainder of each value after it is divided by 3.
//===========================================================================//

const remainder = (arr) => {
  let newArr = arr.filter(v => typeof v === 'number') 
    return newArr.map(v => v % 3)
}


//TEST PASSED! 



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

//======================== GOOD ERROR FAILURE ===============================//
// ● sumCubed › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// ReferenceError: sumCubed is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function named 'sumCubed'
//must take in an array of numbers as a parameter, we'll name it 'arr'
//declare a variable named 'sum' and set it equals to 0 
//iterate through the values of the array by using a .filter() 
//return the sum plus the value of the array after being cubed
//return the variable sum which contains all the values added together after being cubed
//===========================================================================//


const sumCubed = (arr) => {
  let sum = 0 
  arr.filter(v => sum += v ** 3
  )
  return sum
}

