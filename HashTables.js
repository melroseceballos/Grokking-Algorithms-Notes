/**
- Takes a string and stores the value in a list
- it then returns the index of which the value of such string is stored
- The index must be constant or else your hash function is not working
- it must not also give the same number all the time or else you get collisions

- you now have a hash table! A hash function and array together!
*/

// CACHE:
// caching is when the data is saved in storage
// so that users don't need to constantly request to servers

/** PREVENTING COLLISIONS:: Avoid as much as possible 
- happens when data are stored in the same place
- instead, create a subarray/linkedlist inside that block 
- that way when that block is reached, instead of getting
- the overwritten value, you can loop through
- the subarray to get the value 

*/