// Immediately Invoked Function Expressions (IIFE)

/*
    Jo function immediately execute ho jai usse iife kahte hai.

    Global scope ke pollution se jo dikkat hoti hai kai baar to uss global scope ke variable hoti hai ya jo bhi declaration hai uske pollution ko htane ke liye iffe ka use hota hai 
*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')