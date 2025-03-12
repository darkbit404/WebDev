let x = "This is sample module for demonstrating how require() protects internal functions and variables."
console.log(x);

function calculateSum(a, b)
{
    const sum = a+b;
    console.log(sum);
}

function calculateDifference(c, d)
{
    const diff = c-d;
    console.log(diff);
}

//To export multiple variables, functions or methods we need to wrap them into objects.
module.exports = {calculateSum, calculateDifference};