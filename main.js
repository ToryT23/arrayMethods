const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
contacts.filter( (contact) => {
    if(contact.company ===  "INSECTUS" ) {
        let result = contact.name
       //  console.log(result)
    }
}) 
//2. an array all of the contacts, with only the name property
contacts.forEach( (contact) => {
  let  result = contact.name
    // console.log(result)
})

//3. an array of all of the contacts over the age of 50
contacts.map ( (contact) => {
    if (contact.age > 50) {
    let result = contact.name
    // console.log(result)
    }  
})

//4. the first ten contacts when alphabetically ordered by name
const alphabetically = contacts.map(( contact) => {
     return contact.name
})
console.log(alphabetically.sort().slice(0, 10))

//5. the oldest person's name
let ages = contacts.map( (contact) => {
    return contact.age
})
    let max = Math.max(...ages)
    let result = max
    // console.log(result)
    
contacts.filter((contact) => {
    if( contact.age === 80) {
        let result = contact.name
        //  console.log(result)
    }
})


//6. the contact id with the name Isabella Burke
contacts.find( (contact) => {
    if(contact.name === "Isabella Burke") {
    let result = contact.id + " " + contact.name
//  console.log(result)
    }
})

// 7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const firstNameandLAstNAme = contacts.map( (contact) => {
   contact.firstName = contact.name.split(" ")[0]
   contact.lastName = contact.name.split(" ")[1] 
   return contact
})
//console.log(firstNameandLAstNAme)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const ArrayOfFriends = contacts.map( (contact) => {
    return contact.friends
})

// console.log(ArrayOfFriends)

//9. the average age of the contacts
// initallize value
let sum = 0 
// for  loop will add contact age + sum which is declared above in for loop
for( let contact of contacts) {
    // send loop will add the next contact age to the new sum
 sum = contact.age + sum
}
console.log(sum/100)

let id = contacts.sort(function(a, b){return a.id - b.id} )
// retuns all id in order ascending order


const sortFromYoungToOld = contacts.sort(function(a, b){return a.age - b.age})
// returns ages from youngest to oldest

//10. the median age of the contacts
 const median = contacts.map ((contact) => {
    return contact.age
 }) 

let help = function(arr) {
    let middle = Math.floor(arr.length / 2);
    arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2
}
 //console.log(help(median))



 const arrOfInches = [
    {
        id: 1,
        inches: 2
    },
    {
        id: 2,
        inches: 3
    },
    {
        id: 3,
        inches: 5
    },
    {
        id: 4,
        inches: 6
    },
    {
        id: 5,
        inches: 8
    }
]