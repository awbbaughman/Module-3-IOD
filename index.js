/*const doubleQuotes = "String that can include 'single quotes'"

const singleQuotes = 'String that can include "double quotes"'

const backTicks = 'String that can include - ${singleQuotes}'

//console.log(backTicks)

let age;*/

//console.log(age);

//console.log('hello'); console.log('world')

/* function checkAge(age) {
    if (age >= 18) {
        return 'adult' //if the condition ist true, return this string and exit
    }

    return 'non-adult'; // if the condition was false, return this string and exit
}

console.log(checkAge(21))
console.log(checkAge(13)) */


// QUESTION 1

"" + 1 + 0 // 10
console.log("" + 1 + 0)

"" - 1 + 0 // -1
console.log("" -1 + 0)

true + false // 1
console.log(true + false)

!true // false
console.log(!true)

6 / "3" //2
console.log(6 / "3")

"2" * "3" // 6
console.log("2" * "3")

4 + 5 + "px" // 9px
console.log(4 + 5 + "px")

"$" + 4 + 5 // $45
console.log("$" + 4 + 5)

"4" - 2 // 2
console.log("4" - 2)

"4px" - 2 // NaN
console.log("4px" - 2)

" -9 " + 5 // -9 5
console.log(" -9 " + 5)

" -9 " - 5 // -14
console.log(" -9 " -5)

null + 1 // 1
console.log(null + 1)

undefined + 1 // NaN
console.log(undefined + 1)

undefined == null // true
console.log(undefined == null)

undefined === null // false
console.log(undefined === null)

" \t \n" - 2 // -2
console.log(" \t \n" - 2)



// QUESTION 2

let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // would show 34 (wrong);  implies that the answer should be 7
let multiplication = three * four // would show 12 (correct)
let division = three / four // would show .75 (correct)
let subtraction = three - four // would result in -1 (correct)
let lessThan1 = three < four // would result in true (correct), because value of three/3 is less than four/4
let lessThan2 = thirty < four // would result in ture (techincally wrong); implies that it should be false, but 30 is alphabetically lower than 4




// QUESTION 3

if (0) console.log('#1 zero is true') //not print because 0 = false
if ("0") console.log('#2 zero is true') // will print because "0" is found in a string, not registered as a number
if (null) console.log('null is true') // will not print becauase null is unknown
if (-1) console.log('negative is true') // will print because -1 does not equal 0, aka is true
if (1) console.log('positive is true') // will print because 1 = true





// QUESTION 4 // I had real trouble here on statement syntaxbecause I missed this class. The solution was much simpler than I thought it was-- but I didn't get it until the answers were linked.

//original version
let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} 
else {
result += 'greater than 10';
}

console.log(a + b < 10) // 5, true
console.log(result) // 2 + 3 is less than 10

//rewrite version
 
let a = 7, b = 1; 
let result = `${a} + ${b} is `; 
result += (a + b < 10) ? 'less than 10' : 'greater than 10'; 

console.log(result)

// extra work below
// {
//  return (a + b) ? += 'less than 10' : 'greater than 10'

// }

// console.log(a + b < 10)



/*let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four;  //console.log(addition) = 34

let addition2 = number(three) + Number(four)*/




// QUESTION 5

function getGreeting(name) {
     return 'Hello ' + name + '!';
     }

 //1) function expression syntax:
const getGreetingA = function(name) {
     return 'Hello ' + name + '!';
 }

 //2) arrow function syntax:
 const getGreetingB = (name) => 'Hello ' + name + '!';

 console.log(getGreeting('Samwise Gamgee'));
 console.log(getGreetingA('Samwise Gamgee'));
 console.log(getGreetingB('Samwise Gamgee'))




// QUESTION 6

 const westley = {
     name: 'Westley',
     numFingers: 5
     }
     const rugen = {
     name: 'Count Rugen',
     numFingers: 6
     }
     const inigo = {
     firstName: 'Inigo',
     lastName: 'Montoya',
     greeting(person) {
     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
     console.log(greeting + this.getCatchPhrase(person));
     },
     getCatchPhrase: (person) => person.numFingers == 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.'
     }
     inigo.greeting(westley)
     inigo.greeting(rugen)




// QUESTION 7

 const basketballGame = {
     score: 0,
     fouls: 0,
     freeThrow() {
     this.score++;
     return this;
     },
     basket() {
     this.score += 2;
     return this;
     },
     threePointer() {
     this.score += 3;
     return this;
     },
     foul() {
         this.fouls++;
         return this;
     },
     halfTime() {
     console.log('Halftime score is '+this.score+' ('+this.fouls+' fouls).');
     return this;
     },
     fullTime(){ 
         console.log('Final score is '+this.score+' ('+this.fouls+' fouls).');
         return this;
     }
     }
//     //modify each of the above object methods to enable function chaining as below:
     basketballGame.basket().foul().freeThrow().freeThrow().basket().threePointer().threePointer().halfTime().basket().basket().foul().freeThrow().threePointer().fullTime();





// QUESTION 8

 const sydney = {
     name: 'Sydney',
   population: 5_121_000,
     state: 'NSW',
     founded: '26 January 1788',
     timezone: 'Australia/Sydney'
    }

 const melbourne = {
    name: 'Melbourne',
    population: '5.63 million',
    state: 'VIC',
    elevation: '31 m',
    area: '9,992 km2'
 }

 function printCityProps(cityObj){
    for (cityProp in cityObj) {
         console.log(cityProp + ' = ' + cityObj[cityProp])
     }
 }

 printCityProps(sydney)
 printCityProps(melbourne)





// QUESTION 9

 let teamSports = ['Hockey', 'Cricket', 'Volleyball']
 let dog1 = 'Bingo';
 let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// //a) 
 let moreSports = teamSports;
 teamSports.push('Soccer'); teamSports.unshift('Baseball');

// //b) why is this??
 let dog2 = dog1;
 dog2 = 'Spot';

// //c)
 let cat2 = cat1
 cat1.name = 'Nachos'

// //d)
 console.log(teamSports); console.log(dog1); console.log(cat1)
 // teamSports DOES change because moreSports points to the same memory location as teamSports; directly changes the array
 // dog1 DOES NOT change because primitives are stored by value, the values differ
 // cat1 DOES change because I overwrote the name property  aka altered the memory location like teamSports

// //e) 
 let moreSports2 = [...teamSports]
 moreSports2.push('Netball')
 console.log(teamSports) //doesn't include netball because moreSports2 was created with a shallow clone

 let cat3 = {...cat1}
 cat3.name = 'Humperdink'
 console.log(cat1) // still set to Nachos because cat3 was created using a clone that rerfeences a different memory location





// QUESTION 10

 function Person(name, age) {
     this.name = name;
     this.age = age;
     this.human = true;
     this.canDrive = () => this.age >= 16;
     this.cannotDrive = () => this.age < 16
     }

let person1 = new Person('Alex', 30)
let person2 = new Person('Laura', 31)

console.log(person1)
console.log(person2)

 class PersonClass {
     constructor(name, age) {
       this.name = name;
       this.age = age;
         this.human = true;
     }

     canDrive() {
         return this.age >= 16;
 }
 }

 let person3 = new Person('Eleanor', 6)
 console.log(person3)

 if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and is old enough to drive');
 if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and is old enough to drive');
 if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and is old enough to drive');
 if (person3.cannotDrive()) console.log(person3.name + ' is '+person3.age+' and is not old enough to drive')


    // .......................... OTHER NOTES BELOW ....................

// >>> **[LOOK HERE!!!!]** <<< here should be exercises for PRIMATIVES, NUMBERS, STRINGS, etc as found on pp. 4-20 in powerpoint (missed due to travel) !!!!!!!!!!!!!!!

/*const arr1 = new Array(1,2,3); // this is the less-used version in many codes
const arr2 = [1, 2, 3];

console.log(arr1);
console.log(arr2);*/

// const fruits = ['Apple', 'Orange', 'Pear'];
/*const lastFruit = fruits.pop(); // removes and returns the last item

console.log(lastFruit); // = Pear
console.log(fruits) // ['Apple', 'Orange'] */

/*fruits.push('Banana');
console.log(fruits); */

/* const firstFruit = fruits.shift(); // removes and returns the first item
console.log(firstFruit) // = Apple
console.log(fruits) */

/* fruits.unshift('Banana')
console.log(fruits) */

/* const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location

fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // Apple, Orange, Pear, Banana

// fruist2 reflects the same change made to fruits1

console.log('fruit at index 0: '+fruits1[0]) // Apple
console.log('fruit at index 1: '+fruits1[1]) // Orange */

//this is a 3 x 3 matrix:

/*const matrix = [
    [1, 2, 3], // row 0
    [4, 5, 6], // row 1
    [7, 8, 9] // row 2
] 

console.log(matrix[1] [1]) */

/* const numbers = [1, 2, 3];
const strings = ["one", "two", "three"];
const empty = [];

console.log('Numbers: ' + numbers) // returns: "Numbers: 1,2,3"
console.log('Strings: ' + strings) // returns: "String: one,two,three"
console.log('Empty: ' + empty) // returns: "Empty:" */

/* const spliceArray = ["I", "study", "JavaScript", "right", "now"];
const removed = spliceArray.splice(0, 3, "Lets", "dance");

console.log(removed)
console.log(spliceArray) // splice removes and replaces within a span of the index */

/* const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const sliced = sliceArray.slice(0, 3); // start at the beginning and get items up to index 3
const endSliced = sliceArray.slice(-3); // start at the end and get LAST 3 items


console.log(sliced)
console.log(endSliced)
console.log(sliceArray) */

/* const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const array4 = [10]

const combined = array1.concat(array2, array3, array4);

console.log(combined) */
// TAKE  A LOOK AT P 31 TO MAKE SURE YOU GOT THE CODE RIGHT; SOMETHING IS WRONG BELOW 
/* const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin'];
hobbits.forEach(hobbit, index) => { //usually we use an arrow function here
    console.log(`#${index}: ${hobbit}`) //runs once for every item in array
}
*/

/* const marks = ['A+', 'C+', 'B-','D', 'B+', 'C+', 'B-'];

let bIndex = marks.indexOf('B-');
let eIndex = marks.indexOf('E'); // = -1, since not found

console.log(marks[bIndex] + ' is at index: ' +bIndex)
console.log(eIndex) */

/* const marks = ['A+', 'C+', 'B-','D', 'B+', 'C+', 'B-'];

let bIndexFirst = marks.indexOf('B-');
let bIndexLast = marks.indexOf('B-');

console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst)
console.log(marks[bIndexLast] + ' is last at: ' + bindexLast) */

/* const products = [
    { id: 1, title: 'Sleeveless Tee', price:23.95, category: 'Shirts'},
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'}
];

let jeans = products.find(product => product.title == 'Denim Jeans');
let shirt = products.find(product => product.category == 'Shirts');

console.log(jeans)
console.log(shirt)
*/

/* const products = [
    { id: 1, title: 'Sleeveless Tee', price:23.95, category: 'Shirts'},
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
];

let shirts = products.filter(product => product.category == 'Shirts');
let under50 = products.filter(product => product.price < '50');

console.log(shirts)
console.log(under50) */

// TAKE  A LOOK AT P 31 TO MAKE SURE YOU GOT THE CODE RIGHT; SOMETHING IS WRONG BELOW 

/* 
const products = [
    { id: 1, title: 'Sleeveless Tee', price:23.95, category: 'Shirts'},
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
]

let titles = products.map(product => product.title);
let h2titles = products.map(product => '<h2>'+product.title+'</h2>');
let raisedPrices = products.map(product = ({... roduct, price: product.price + 5})   );

console.log(titles)
console.log(h2titles) */


/* const products = [
    { id: 1, title: 'Sleeveless Tee', price:23.95, category: 'Shirts'},
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
];

products.sort( (product1, product2) => product1.price - product2.price)
console.log(products)

products.sort( (p1, p2) => p1.title > p2.title ? 1: -1 )
console.log(products)

const numbers = [4,8,1,5,66,23,41]
console.log(numbers.sort())
console.log( numbers.sort((num1, num2) => num1 - num2))

*/

//const stringNums = ["1", "81", "41", "102", "35", "1004"]
/*console.log(stringNums.sort())
console.log(stringNums.sort((a, b) => a-b))

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort()
    
console.log(stringNums)
console.log(sortedNums)*/

/* const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse()
const reversed2 = [...elements].reverse()

console.log(elements)
console.log(reversed2)
console.log(elements.join() )
console.log(elements.join(' '))
console.log(elements.join('; ')) 
*/

/* const now = new Date()

console.log( now ) 
console.log( +now )

const epoch = new Date(0)
const jan2_1970 = new Date(1000 * 60 * 60 * 24)

console.log(epoch)
console.log(jan2_1970) */

/*const christmas = new Date('2024-12-25')
console.log(christmas) */

// const nyeUTC = new Date('2024-12-31 23:59:59+00:00')
// console.log(nyeUTC)

// const boxingDay = new Date(2024, 12, 25)
// console.log(boxingDay)

// const remembranceDay = new Date(2024, 10, 11, 11, 11)
// // console.log(remembranceDay)

// console.log(remembranceDay.getFullYear())

// console.log(remembranceDay.getMonth())

// console.log(remembranceDay.getDate())

// console.log(remembranceDay.getHours())

// console.log(remembranceDay.getMilliseconds())

// console.log(remembranceDay.getDay())

// console.log(remembranceDay.getTime())

// console.log(remembranceDay.getUTCDay())

// console.log(remembranceDay.getTimezoneOffset())

// const christmas = new Date('2024-12-25')

// console.log(christmas.toLocaleDateString())

// console.log(christmas.toLocaleDateString('KO-KR', {timeZone: 'asia/seoul'}))

// const student = {
//     name: 'Sita',
//     age: 28,
//     courses: ['HTML', 'CSS', 'JS'],
//     occupation: null
// }

// console.log(JSON.stringify(student))
// console.log(student)

// const book = {                  // JSON is data ONLY... that's why the function below doesn't print in the console!
//     title: "Gone With the Wind",
//     printTitle(){
//         console.log(this.title)
//     },
//     releaseDate: undefined,
// }

// console.log(JSON.stringify(book))

// const room = {
//     number: 23, toJSON() {return this.number}
// }
   
//     const meetup = {
//         title: "strategy conference", participants: ['Chris', 'Tina']
//     }

//     meetup.place = room;
//     room.occupiedBy = meetup;
//     console.log(JSON.stringify(meetup))

// const meetup = {
//     title: "strategy conference", participants: ['Chris', 'Tina']
// }
// const meetupString = JSON.stringify(meetup)
// const meetupParsed = JSON.parse(meetupSTring, (key, value) => {
//     if ( !isNaN(Date.parse(value)) )
//     return value;
// })

// console.log(meetupParsed)
