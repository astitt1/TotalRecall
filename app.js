// // STRINGS 
// var firstVariable = "Hello World";
// var firstVariable = 2;
// var secondVariable;
// secondVariable=firstVariable;
// var secondVariable = "Hi there!"
// console.log(secondVariable);

// var yourName
// var yourName = "boubacar";
// console.log("Hello, my name is " + yourName);

// //the value of firstVariable = 2

// //BOOLEANS

// const a = 4; const b = 53; const c = 57; const d = 16; const e = 'Kevin';

// console.log(a < b); console.log(c > d); console.log('Name'.length < 'Kevin'.length);


// // FOR THE NEXT TWO, USE ONLY && OR ||

// /*note: a < b < c is NOT CORRECT 
// (and is not a valid JS expression, 
// think about using other math operations) 
// console.log(a __ a ___ d); // note: 
// the answer is a simple arithmetic equation, 
// not something "weird"
// */

// console.log(true && false); 
// console.log(false && false && false && false && false && true); 
// console.log(false && false);
// console.log(e > 'Kevin'); 
// console.log(a + b < c);
// console.log(48 > '48');


// //the Farm

// const animal = "cow";

// if (animal) {
//     //do this
//     console.log("mooooo");
//   } else {
//     //do this
//     console.log("Hey! You're not a cow");
//   };

//   //Driver's Ed

//   const age = 45;

//   if (age >= 16) {
//     console.log("Here are the keys!");
//   } else {
//       console.log("Sorry, you're too young.");
//     }

// //LOOPS
// for(let i = 0; i < 100; i++); // This is GOOD
// for(i = 0; i < 100; i++); // this is NO GOOD

//The Basics

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i=12; i<4000; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }

//Get Even

// for (let i=1; i<100; i++) {
//     if (i % 2 == 0) {
//       console.log(i + " is an even number");
//     }
//     else {console.log(i);
//     }
//   }

//Give Me 5

// for (let i=1; i<=100; i++) {
//     if (i % 5 == 0) {
//       console.log("I found a " + i + ". High five!");

//     } if (i % 3 == 0) {
//       console.log("I found a " + i + ". Three is a crowd"); 
    
//     } else {console.log(i);

//     }

//   }

//Savings Account


// var bank_account = 0;
//     for(i = 0; i <= 10; i++){
//       bank_account += i; 
// }

// console.log(bank_account);

// var bank_account = 0;
//     for(i = 1; i <= 100; i++){
//       bank_account += i*2; 
// }

// console.log(bank_account);


//ARRAYS & CONTROL FLOW

//A. Talk about it:
//the things in array are called elements
//Unlike objects, their items are considered to be ordered
//e.g., let colors = ['red', 'green', 'blue'];

//B. Easy Does it
//const quotes = ['ATLA', 'Everything Everywhere', 'Hunter x Hunter']

//C. Accessing elements
//How do you access the 1st element in the array?
// const randomThings = [1, 10, "Hello", true];
// firstrandomThings = randomThings[0];
// //Change the value of "Hello" to "World"
// firstrandomThings = randomThings[2]='World';
// //Check the value of the array to make sure it updated the array using console.log()
// console.log(randomThings);

//D. Chang values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// thirdElement = ourClass[2];

// lastElement = ourClass[4]='Octocat';
// ourClass.push('Cloud City');

// console.log(ourClass);

// E. Mix it Up
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon')

// myArray.shift()
// myArray.unshift('Bob Marley')
// myArray.pop()
// myArray.reverse()

// //yes reverse() method worked. It changed the order of the elements in the Array
// //Mute means changing the elements order in an array

// console.log(myArray);

//F. Biggie Smalls

// const Height = 145;

//   if (Height < 100) {
//     console.log("little number");
//   } else {
//       console.log("big number");
//     }

// G. Monkey in the Middle

// const myVar = 60;

//   if (myVar < 5) {
//     console.log("little number");
//   } else if (myVar> 10) {
//       console.log("big number");
//     } else {console.log('monkey')};

    // H. What's in Your Closet?

    // const kristynsCloset = [
    //     "left shoe",
    //     "cowboy boots",
    //     "right sock",
    //     "GA hoodie",
    //     "green pants",
    //     "yellow knit hat",
    //     "marshmallow peeps"
    //   ];

    //   {
    //     firstName= "John",
    //     lastName= "Smith",
    //     age= 25
    //   }
      
    //   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
    //   kristynsCloset.splice(6, 5, 'raybans','marshmallow peeps');
    //   kristynsCloset.splice(5,4,'stained knit hat','marshmallow peeps');
    //   console.log(kristynsCloset);
    //   //months.splice(1, 0, 'Feb');

    //  // Thom's closet is more complicated. Check out this nested data structure!!
     
    //  const thomsCloset = [
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

    //   console.log(thomsCloset[0][0]);
    //   console.log(thomsCloset[1][0]);
    //   console.log(thomsCloset[2][0]);
    //   console.log('Thom is looking fierce in a ' + thomsCloset[0][0] +', ' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1] + '!');

    //   thomsCloset[1].splice(2,2, 'Footie Pajamas');
    //   console.log(thomsCloset[1])

    //   console.log('Thom is wearing a ' + thomsCloset[1][2] +' this winter.');

      // Funtions

      // A. printGreeting

    //   function printGreetingwith(name) {
    //     console.log("Hello there, " + name + "!");
    //   }
      
    //   printGreetingwith("Slimer");
    
    //   function printCoolthat(name) {
    //     console.log(name + " is cool");
    //   }
      
    //   printCoolthat("Captain Reynolds");

    //   function calculateCube(n) { 
    //     return n*n*n; };

    //     console.log(calculateCube(5));

        // function isVowel(argument){

        //     var text;
        //     var argument = argument.toLowerCase();
        
        //     var vowels = (['a', 'e', 'i', 'o', 'u']);
        
        //     for (var i = 0; i <= vowels.length; i++){
        //         if (argument != vowels[i]) {
        //             continue;
        //         }
        //         return true;
        //     }
        //     return false;
        // }
        
        // // See if "A" is a vowel
        // var char = "A";
        
        // if (isVowel(char)) {
        //     console.log(char + " is a vowel");
        // } else {
        //     console.log(char + " is not a vowel");
        // }
        // //E. getTwoLengths
        // function getTwoLengths(...args) {
        //     return args.map(x => x.length);
        //   }
          
        //   console.log(getTwoLengths("Hank", "Hippopopalous"));
        // //F. getMultipleLengths
        //   function getMultipleLengths(arr){
        //     return arr.map(function(str){
        //         return str.length;
        //     });
        // }

        // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

        // //G. maxOfThree
        
    //     function maxOfThree(num1, num2, num3)
    //     {
    //         var max = Math.max(num1, num2, num3);
    //         return max;
    //     }

    //     console.log(maxOfThree(6, 9, 1));

    //    //H. printLongestWord
       
    //    function printLongestWord(arr) {
    //     let word = "";
    //     for (let i = 0; i < arr.length; i++) {
    //       if (word.length < arr[i].length) {
    //         word = arr[i];
    //       }
    //     }
    //     return word;
    //   }
      
    //   function printLongestWord(arr) {
    //     return arr.reduce((a, b) => a.length < b.length ? b : a, "");
    //   }

    //   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
        
      //Objects

      //A. Make a user object

      // Create an object:
    const user = {
        name:"Boubacar", 
        email:"bob@gmail.com", 
        age:"35",
        purchased: []
    };

    //B. Update the user

    user["email"]="sos@yahoo.fr"
    user['age']++;

    //C. Adding keys and values

    user["location"]="home"

    //D. Shopaholic!
    user["purchased"].push('carbohydrates','peace of mind','Merino jodhpurs')


    user.friend = {
        name: "Grace Hopper",
        age: 85,
        location: 'home',
        purchased: []
    }
    console.log(user.age)

    console.log(user.friend.name)
    console.log(user.friend.location)

    user.friend["age"]=55
    user.friend["purchased"].push("The One Ring","A latte")

    console.log(user.friend.purchased[1])

    //F. Loops
   
    
    // Print property values of object
    for (let purchased of user.purchased) {
        console.log(purchased);
    }

    
    function updateUser(user) {
            user.age, user['age']++,
            user.name.toUpperCase();
          }

          console.log(user.name.toUpperCase())


          function oldAndLoud(person) {
            if (user = "Boubacar") {
              user = "It's him!";
            }  
            return person;
          }

          console.log(oldAndLoud);
          