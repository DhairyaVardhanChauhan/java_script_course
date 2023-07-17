const example = async () => {
  // simple arrow function with async it always always always returns a promise
  return "hello";
};

console.log(example()); // gives a promise () is used to call the function 😑

async function somefunc() {
  const result = await example(); // await is used to print in console (remember the function has to return a promise for await to work)
  console.log(result);
}

somefunc();

// In JavaScript, the await keyword is used in an asynchronous function
// to pause the execution of the function until a Promise is fulfilled or resolved.
// It can only be used within an async function.
// When you use the await keyword before a Promise, 
// it waits for that Promise to settle (either fulfilled or rejected) and 
// then resumes the execution of the async function.

