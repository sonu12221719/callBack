// function exampleFunction(){
//     if(true){
//         // var functionScopedVar = "I am function-scoped";//I am function scoped
//         // let functionScopedVar = "I am function-scoped";//I am block level scope
//         const functionScopedVar = "I am function-scoped";
//         console.log(functionScopedVar);
//     }
//     console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedVar);//error because var have function scoped only and we call it from outside


// function exampleFunction(){
//     if(true){
//         var functionScopedVar = "I am function-scoped";
//         let blockedScopedLet = "I am block-scoped";
//         const blockScopedConst = "I am constant and block-scoped";
//     }
//     console.log(functionScopedVar);
//     console.log(blockedScopedLet);
//     console.log(blockScopedConst);
// }


//shadowing

// var shadowedVar = "I am global";

// function exampleFunction(){
//     var shadowedVar = "I am local";
//     console.log(shadowedVar);//I am local
// }
// exampleFunction();
// console.log(shadowedVar);//I am global


//Hoisting

//hoisting with "var"
// console.log(x);//undefined
// var x = 5;
// console.log(x);//5

//hoisting with "let"
// console.log(x);//undefined
// // let x = 5;
// console.log(x);



//Objects

// let person = {
//     name: "sonu",
//     age: 19,
//     isStudent:true
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person);//for printing all value of object



//Array

// let fruit = [1, "banana", "orange"];
// console.log(fruit);
// console.log(fruit[0]);



//function

// function add(a,b){
//     return a+b;
// }
// var a=add(2,3);
// console.log(a);


//Typeof Operator

// let a=5;
// console.log(typeof(a));



//Type coercion

// let result = 5+"5";//string "55"
// let result = 5-"5";//number 0
// let result = 5+"abc";//string 5abc
// let result = "2"+"2"-"2";//number 20
// console.log(result);
// console.log(typeof(result));


//Arithmatic Operators

// let a=5;
// let b=2;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);



//Comparison Operator

// let a=10;
// let b=5;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a===b);
// console.log(a!==b);


//Logical Operator


// let p = true;
// let q = false;
// console.log(p&&q);
// console.log(p||q);
// console.log(!p);



//Assingment Operator

// let num=10;
// num += 5;
// console.log(num);
// num -= 3;
// console.log(num);
// num *= 2;
// console.log(num);
// num /= 4;
// console.log(num);



//Loop
//for loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }

//while loop
// let count=0;
// var a=" ";
// while(count<5){
//     a+=count;
//     count++;
// }
// console.log(a);

//do while loop
// let count=0;
// do{
//     console.log(count);
//     count++;
// }while(count<5);

//for..in loop
// let person = {name: "sonu", age: 19, occupation: "developer"};

// for(let key in person){
//     console.log(key + ": " + person[key]);
// }


//object
// let car ={
//     make:"Toyota",
//     model:"Camry",
//     year:2022,
//     isElectric:false,
//     start:function(){
//         console.log("Engine started!");
//     }
// }
// //Accessing properties of car
// console.log(car.make);
// console.log(car.year);

// //calling method
// car.start();



//Object constructor

//object constructor function
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// //Creating instance of the object
// let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
// let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// console.log(book1);



//Working with Arrays


//creating an array
// let fruits = ["apple","banana","orange", "grape"];

// //Accessing elements
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// //Adding elements to the end of array
// fruits.push("kiwi");
// console.log(fruits);

// //Adding elements at the beginning of array
// fruits.unshift("mango");
// console.log(fruits);

// //Removing last element
// fruits.pop();
// console.log(fruits);

// //Removing first element
// let removedFirstEle = fruits.shift();
// console.log(fruits);
// console.log(removedFirstEle);

// //Finding index of an element
// let indexOfOrange = fruits.indexOf("orange");
// console.log(indexOfOrange);

// //interating using a for loop
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// //slicing an array
// let citrus = fruits.slice(1,3);
// console.log(citrus);

// //splicing an array(modifying original array)
// let removed = fruits.splice(1,2,"pear","melon");

// //concatenating arrays
// let moreFruits = ["grapefruits","pineapple"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);




//Anonymous function

// const multiply = function(a,b){
//     return a*b;
// }
// //Invocation
// const product = multiply(4,6);
// console.log('Function Expression - Product: ',product);



//Arrow function

// const subtract = (a,b) => a-b;
// //Invocation
// const difference = subtract(8,3);
// console.log('Arrow function - Difference: ',difference);



//Error Handling

// try{
//     //code that may throw an error
//     throw new Error("An error");
// }catch(error){
//     //code to handle the error
//     console.error(error.message);
// }finally{
//     //code that will run regardless of whether there was an error
//     console.log("Cleanup code");
// }



//Timer

//setTimeOut Function

//--Execute a function or a piece of code once after a specified delay.
// const delayedFunction = ()=>{
//     console.log('Delayed function executed!');
// }
// setTimeout(delayedFunction,2000);//Executes after 2 seconds


//setInterval function

//--Executes a function or a piece of code repeatedly at a specified interval.

// const repeatedFunction = ()=>{
//     console.log('Repeated function executed!');
// }
// const intervalId = setInterval(repeatedFunction,1000);


// //After some time(e.g. , 5000 milliseconds), stop the interval
// setTimeout(()=>{
//     clearTimeout(intervalId);//stop the interval or we can use clearInterval for stopping the setInterval function
//     console.log('Interval stopped.');
// },5000);



//Callbacks

//--callbacks are function that are passed as arguments to other funtion and are executed after the completion of an first function

//synchronous callback function
// function parentFunction(name,callback){
//     callback();
//     console.log('hey '+name);
// }

// function randomFunction(){
//     console.log("hey i am callbackfunction");
// }

// parentFunction("Random string", randomFunction);


//Asynchronous callback function
// function parentFunction(name,callback){
//     setTimeout(callback,2000);
//     console.log('hey '+name);
// }

// function randomFunction(){
//     console.log("hey i am callbackfunction");
// }

// parentFunction("Random string", randomFunction);

//Asynchronous callback with anonymous function
// function parentFunction(name,callback){
//     setTimeout(callback,1000);
//     console.log('hey '+name);
// }

// parentFunction("Random string",function(){
//     console.log("Hey i am a callback function.");
// });


//Asynchronous callback with anonymous function
const parentFunction=(name,callback)=>{
    setTimeout(callback,1000);
    console.log('hey '+name);
}

parentFunction("Random string",function(){
    console.log("Hey i am a callback function.");
});


