/* import the arithmetic module we defined in the first file using require('./arithmetic'). */
const arithmetic = require('./arithmetic.js');

/* calculations using the functions of the module */
const result = arithmetic.division(4000, 2) + arithmetic.subtract(25, 2);
console.log(result);    /* display the result: 2023 */