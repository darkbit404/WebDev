function calculateSum(a, b)
{
    const sum = a+b;
    console.log(sum);
}

//To access the variables, methods and functions from external modules we need explictly export the them in external module.
module.exports = calculateSum;