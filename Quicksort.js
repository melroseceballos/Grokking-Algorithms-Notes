/** QUICKSORT 
faster than selection sort and is more commonly used 

-
PSEUDOCODE
- pick a pivot point
- divide the array into subarrays depending if they are smaller or bigger 
than the pivot
- call quicksort recursively on both subarrays
- combine and done
**/

const quickSort = (arr) => {
  if (arr.length < 2) return arr; // Base case: an array with 0 or 1 element is already sorted
  const pivot = arr[0]; // Choosing the first element as the pivot
  const less = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  const sortedLess = quickSort(less); // Recursively sort the elements less than the pivot
  const sortedGreater = quickSort(greater); // Recursively sort the elements greater than the pivot
  return [...sortedLess, pivot, ...sortedGreater]; // Concatenate the sorted sub-arrays with the pivot in between
};