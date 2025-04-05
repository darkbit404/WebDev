/*In JavaScript everything happens inside the execution context.
  Execution context consists of Memory (Variable Environment) and Code (Thread of execution).*/
var n = 2;

function square(num){
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

/*A global execution context is created.
  This is created in two phases:
  1) Memory Creation: JS allocates memory to all the variables and functions.
        As soon it encounters a variable it reserves memory for the variable and allocates special
        value i.e. undefined. 
        In case of functions the whole function code is copied as value in the memory space.
  2) Code Execution: Runs through whole JS code line by line and it executes the code.
        The point when all functions and every calculation is done.
        As it encounters a variables it assigns the value stored in place of undefined.
        If any calculation or sync code is encountered it completes execution stores the result
        in a variable in memory component and moves on.
        As a function is encountered it moves to further lines.
        Whenever a function is envoked or called a new execution context is created to execute the 
        code in the function.
        When a return value is encountered in a function the code execution is returned back to where 
        the function was called and value to be retruned is allocated to the variable.
        Once execution of function finishes the new execution context is deleted.*/