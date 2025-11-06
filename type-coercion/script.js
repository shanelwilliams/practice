let x  

x = 5 + '5' //Turns into a string, concatinates with the plus sign.

x = 5 + Number('5')

x = 5 + '5' //Coersed it into a number so it can be multiplied

x = 5 + null

x = Number(null)

x = Number(true) //Comes back 1 'number'
x = Number(false) //Comes back 0 'number'

x = 5 + true // Comes back 6 because true is 1

x = 5 + false // Comes back 5 because false is 0

x = 5 + undefined // If anything is added to undefined it will come back NaN

console.log(x, typeof x)