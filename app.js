//=======================
// // // STRINGS // // //
//=======================

// var firstVariable = "Hello World";
// var secondVariable = undefined;

// firstVariable = 2022;
// secondVariable = firstVariable;
// secondVariable = "Changing the second variable string";

//console.log(firstVariable);
//console.log(secondVariable);

// let yourName = "Chitra";
// console.log(`Hello, my name is ${yourName}.`);


//===========================
// // // BOOLEANS // // //
//===========================

//    const a = 4;
//    const b = 53;
//    const c = 57;
//    const d = 16;
//    const e = 'Kevin';
 

//    console.log(a < b);
//    console.log(c > d);
//    console.log('Name' === 'Name');

    // console.log(true || false);
    // console.log(false && false && false && false && false || true);
    // console.log(false === false)
    // console.log(e === 'Kevin');
    // console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
    // console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"`
    // console.log(48 == '48');
 

//========================
// // // the Farm // // //
//========================

// let animal = 'cow'

// if (animal == 'cow') {

//     console.log('mooooo');
// }
// else{
//     console.log("Hey! You're not a cow.");
// }


//===========================
// // // Driver's Ed // // //
//===========================

// let personAge;

// personAge = prompt("what is your age")
// if (personAge>= 16){
//     console.log("Here are the keys!")
// } else if (personAge < 16){
//     console.age("Sorry, you're too young.")
// }


//=====================
// // // LOOPS // // //
//=====================


// for (let i = 0 ; i<= 10; i++){
//     console.log(i);
// }
// for (let j = 10 ; j<= 400; j++){
//     console.log(j);
// }
// for (let k = 12 ; k<= 4000; k+=3){
//     console.log(k);
// }


//========================
// // // get even // // //
//========================

//  for (let l = 1; l <= 100; l++){
//     if (l % 2 == 0){
//         console.log(`${l} <-- is an even number`);
//     } 
//     else{
//         console.log(l);
//     }
// }

//============================
// // // Give me five // // //
//============================

// for (let i1= 1; i1 <= 100; i1++) {
//     if( i1 % 5 === 0){
//         console.log(`I found a ${i1}. High five!`)
//     }

//     if (i1 % 3==0){
//         console.log(`I found a ${i1}. Three is a crowd`)
//     } 
//     else{
//         console.log(i1)
//     }
// }


//===============================
// // // Savings Account // // //
//===============================

// let sum = 0;

// for (let i=1; i <= 10; i++){
//     sum += i;
//     console.log ("bank_account: $",sum);
// }

// let add = 0;

// for (let a=1; a <= 100; a++){
//     add += a*2
//     console.log ("bank_account: $",add);
// }


//==============================================
// // // //  III. Arrays & Control flow // // //
//============================================== 

// let quotes = ["Be Good Do Good", "Soul full of sunshine","No Pressure No Diamond"];

// console.log(quotes);


//  const randomThings = [1, 10, "Hello", true]
//  randomThing [0];

//  randomThings.splice(2,1,"World");

//  console.log(randomThings);

//  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//  console.log(ourClass[2]);

//  ourclass[ourClass.length-1];

// ourClass.push("cloud City);


// randomThings.reverse();
// console.log(randomThings);


//=============================
// // // Biggie Smalls // // //
//=============================

// var myInteger = 20;

// if (myInteger > 100){
//     console.log("Little number")
// } 
// else if (myInteger <= 100) {
//     console.log("Big number")
// }


//=======================================
// // // // Monkey in the Middle // // //
//=======================================


// var middleMonkey = 8;

// if (middleMonkey < 5){
//     console.log("Little number")
// } 
// else if (middleMonkey > 10) {
//     console.log("Big number")
// }
// else{
//     console.log("monkey")
// }    


//====================================
// // // what's in yourCloset // // //
//====================================

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// console.log("Kristyn is rocking that " +kristynsCloset[2] + " today!");
// kristynsCloset.splice(6,0,"raybans");
// krisstynCloset[5]='stained knit hat';
// kristynsCloset.splice(5,1,"stained knit hat");
// console.log(kristynsCloset);


//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log('Thom is looking fierce in a',thomsCloset[0][0],',',thomsCloset[1][1],',',thomsCloset[2][1],'!');

//   thomsCloset[1].pop();
//   thomsCloset[1][2] = "Footie Pajamas" // another way
//   thomsCloset[1].push("Footie Pajamas");
//   console.log(thomsCloset);


//=========================
// // // Function // // //
//=========================

  //Greetings
  

//   printcool = function(name){
//     this.name= name;
//   }
//   name = prompt("what is your name")
//   console.log(`${this.name} is cool!`)


//============================
// // // calculatecube // // //
//=============================




//==========================
// // // maxofThree // // //
//==========================

// function maxofThrees (a,b,c){
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     return max;
// }


// // another method

// function maxofThree(a,b,c){
//     if((a >= b) && (a >= c)){
//         return a
//     }
//     else if ((b >= a) && (b >= c)){
//         return b
//     } 
//     return c
// }

// console.log(maxofThree(6,9,1))

// //another method

// function maxOfThree(...arg){
//     //sort the biggest number to the end of the array
//    arg.sort((a,b) => { return a - b});
//    return arg[arg.length-1]; // return the bigest number
// }
// console.log(maxOfThree(19, 11, 17));


// //================================
// // // printLongestWord // // //
//================================

//====================
// // // OBJECTS // // //
//=======================

// class user {
//     constructor(name,email,age,purchased){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.purchased = purchased;
//     }
  
// }
  

// var userOne = new user("Divya","log@gmail.com","25",[])
// console.log(userOne)

// var userOneFriend = new user ("Dellu","any@gmail.com","35",[])

// userOne.email = "changed@gmail.com";//updated the user

// console.log(userOne);
// userOne.age++; // incremented the age value

// console.log(userOne)

// userOne.location = "salem"  //adding location
// userOneFriend.age =  55;

// userOne.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
// userOneFriend.purchased.push("The One Ring");
// userOneFriend.purchased.push("A latte");
// userOneFriend.location = "Denver,CO"


// console.log(userOne);
// console.log(userOneFriend.name);
// console.log(userOneFriend.location);
// console.log(userOneFriend.purchased[1]);

// for (let i = 0; i < userOne.purchased.length; i++) {
//     console.log(userOne.purchased[i])
//   }
  
//   for (let i = 0; i < userOneFriend.purchased.length; i++) {
//     console.log(userOneFriend.purchased[i])
//   }
  
//   function updateUser() {
//     console.log(userOne.name.toUpperCase());
//   }
  
//   function oldAndLoud(person) {
//     person.age =person.age++;
//     console.log(person.age);
//   }
  
//   oldAndLoud(userOne);
//   updateUser();
// Math.max(10,11);



// class Hamster {
//     constructor(name){
//       this.owner = ''
//       this.name = name
//       this.price = 15
//     }
//     wheelRun(){
//       console.log('squeak squeak')
//     }
//     eatFood(){
//       console.log('nibble nibble')
//     }
//     getPrice(){
//       return this.price
//     }
//   }

//   class person{
//     constructor(name){
//         this.name = name
//         this.age = 0
//         this.height = 0
//         this.weight = 0
//         this.mood = 0
//         this.hamsters= []
//         this.bankAccount = 0
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
//     getWeigth(){
//         return this.weight
//     }
//     greet(){
//         console.log(`Hello, My name is ${this.name}.`);
//     }
//     eat(){
//         this.weight++
//         this.mood++
//     }
//     exercise(){
//         this.weight--
//     }
//     ageup(){
//         this.age++
//         this.height++
//         this.weight++
//         this.mood--
//         this.bankAccount+=10
//     }

//     buyHamster(hamster){
//         this.hamster.push(hamster)
//         this.mood+=10
//         this.bankAccount-=hamster.getPrice()
//     }
//   }



// const timmy = new person('Timmy')
// for(let i =0; i < 5; i++){
//   timmy.ageUp()
// }
// for(let i =0; i < 5; i++){
//   timmy.eat()
// }
// for(let i =0; i < 5; i++){
//   timmy.exercise()
// }
// for(let i =0; i < 9; i++){
//   timmy.ageUp()
// }
// const gus = new Hamster('Gus')
// gus.owner = 'Timmy'
// timmy.buyHamster(gus)

// for(let i =0; i < 15; i++){
//   timmy.ageUp()
// }

// timmy.eat()
// timmy.eat()
// timmy.exercise()
// timmy.exercise()

//Week3 Day3 Exercise Starts

////////////////////////////////
// Easy Going
////////////////////////////////

// for(let i = 0; i <= 20; i++){
//     console.log(i);
// }


////////////////////////////////
// Get Even 
/////////////////////////////////

// for(let i = 0; i <=100; i++){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }


////////////////////////////////
// Fizz Buzz
////////////////////////////////


// for(let i =1; i<= 100; i++){
//   if((i % 3==0) && (i % 5==0)) {
//     console.log("FizzBuzz")
//   } 
//  if (i % 5 ==0){
//     console.log("Buzz")
//   } else if (i % 3 == 0){
//     console.log("Fizz")
//   }else {
//     console.log(i)
//   }
// }

//another metod = Terinary operator

for ( let i = 1; i <= 100; i++) {
  i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") 
  : i % 3 == 0 ? console.log("Fizz") 
  : i % 5 == 0 ? console.log("Buzz")
  : console.log(i);
};

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] +=1;
console.log(plantee)

wolfy[3] ="Gotham City";
console.log(wolfy)

dart.push('Hawkins');
console.log(dart)

wolfy[0]='Gameboy';
console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

let ninjaTurtlesUpperCase = [];

for (i = 0; i < ninjaTurtles.length; i++){

   ninjaTurtlesUpperCase[i] = ninjaTurtles[i].toUpperCase();
}

console.log(ninjaTurtlesUpperCase);

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'))


favMovies.sort();//arrange array in alphabetic order //no it will not change permanently
console.log(favMovies)

favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
console.log(favMovies);
favMovies.shift()
favMovies.unshift() //add element to the begning of the array
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14,1,'Avatar');

//another method =for loop

// for (let i = 0; i < favMovies.length; i++) {
//   if (favMovies[i] == 'Django Unchained') {
//       favMovies.splice();
//       favMovies[i] = "Avatar";}
//   }

console.log(favMovies.length);
favMoviesSliced = favMovies.slice(9)// it will not alter array permanently

console.log(favMoviesSliced)
console.log(favMoviesSliced.indexOf("Fast and Furious"));//4

//no const is write


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
//neff to no one
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
//Where is waldo
console.log(whereIsWaldo[2][1][1]);



////////////////////////////////
// Excited Kitten
////////////////////////////////

for (let i=1; i < 21;i++){ 
  if (i%2 === 0){
      let randomNumber = Math.floor(Math.random()*3)
      if(randomNumber===0){console.log("...human...why you taking pictures of me?...")} 
      if(randomNumber===1){console.log("...the catnip made me do it...")}
      if(randomNumber===2){console.log("...why does the red dot always get away...")} 
  } else{
     console.log("Love me, pet me!HSSSSS");      
}
} 

//another method: Terinary method

let kittenTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for (let i = 1; i<21; i++){
  i%2 === 0 ? console.log(kittenTalk[Math.floor(Math.random()*kittenTalk.length)]) : console.log("Love me, pet me!HSSSSS");
}



////////////////////////////////
//FIND THE MEDIAN
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

const findTheMedian = (nums) => {
    //Order the values from low to high
    const sorted = [...nums].sort((a,b) => a - b);
    //Is our data set odd or even-numbered?
    if(!(sorted.length % 2)){
        //If the dataset is even:
        //Calculate the two middle positions with the formulas (n/2) - 1 and (n/2) where n is the number of values in the dataset.
        let n1 = sorted[(sorted.length / 2 )- 1], n2 = sorted[sorted.length / 2];
        //Find the mean of the two middle values with the formula (n1 + n2) / 2
        return (n1 + n2) / 2;
    } else { 
        //If the dataset is odd:
        //Calculate the middle position with the formula n / 2 where n is the number of values in the dataset.
        //Return the value in the middle position
        return sorted[Math.floor(sorted.length / 2)];
    }
}

const unitTest1 = [350, 800, 220, 500, 130];
const unitTest2 = [350, 800, 220, 500, 130, 1150];

console.log(`Test One: ${findTheMedian(unitTest1)}`);
//expected output = 350
console.log(`Test Two: ${findTheMedian(unitTest2)}`);
//expected output = 425
console.log(`Answer: ${findTheMedian(nums)}`);
//expected output = 15;



            








