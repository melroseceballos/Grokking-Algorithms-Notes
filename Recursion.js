/** Recursion **/

/** Base case - the absolute minimum requirement that the
function has to meet in order to no longer continue
the recursion **/

/** Recursive case - it is when the function hasnt
met the base case so the recursive case keeps calling itself/recursion
until base case is met **/


/** all functions go into a call stack 
which is like a priority queue. a stack can push or pop a function
if the function is too large. it takes up too much memory 
because the call stack takes up memory. A way to prevent this
is by using a tail recursion**/

// TAIL RECURSION 
/** is a type of recursion function that is called at the end of the a function 
better for memory and sometimes faster than 
normal recursions **/