// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function task1(lower, upper) {
  const array = []
  for (let i = lower; i <= upper; i++) {
    array.push(i)
  }
  return array
}
task1(1, 5)

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function task2(word, amount) {
  let ex = ''
  for (let i = 0; i < amount; i++) {
    ex += '!'
  }
  return word.toUpperCase() + ex
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function task3(str, addMin) {
  const [hoursStr, minutesStr] = str.split(':')
  let hours = parseInt(hoursStr)
  let minutes = parseInt(minutesStr)

  minutes += addMin

  hours += Math.floor(minutes / 60)
  minutes %= 60
  hours %= 24

  const hourFormatted =
    hours < 10 ? String(hours) : String(hours).padStart(2, '0')

  const time = `${hourFormatted}:${String(minutes).padStart(2, '0')}`

  return time
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: task1, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: task2, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: task3 // etc
}
