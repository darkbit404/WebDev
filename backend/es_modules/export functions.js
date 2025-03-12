export let x = "This is sample module for demonstrating how ES Modules work in Node.js"
console.log(x);

export function calculateSum(a, b)
{
    const sum = a+b;
    console.log(sum);
}

export function calculateDifference(c, d)
{
    const diff = c-d;
    console.log(diff);
}