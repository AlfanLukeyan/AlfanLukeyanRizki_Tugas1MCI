/* Asynchronous functions with Promises */
const learnWebProgramming = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Have learned web programming with React.js and Node.js");
    }, 5000);
  });
};

/* Implementation of life targets */
async function firstTarget() {
  try {
    const result = await learnWebProgramming();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
