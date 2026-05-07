console.log("Hello");
console.log("Bye");


console.log("Strart");
setTimeout(() => {
    console.log("Middle");
}, 1000);
console.log("End");



const promise = Promise.resolve("Hello from a resolved promise");
console.log(promise);




