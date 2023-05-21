/** Binary Search **/

/**
* best used for searching in a sorted list/array
- cuts a list in half and determines which half to explore
depending on what the user needs
**/

// Exercise 1: pass had to redo 2x
// had issues with syntax 
// fixed it and it worked

// REMEMBER TO TRIPLE CHECK EVERYTHING
// take time when checking code
BinarySearch = (arr,pick) => {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
 if(arr[mid] === pick){
   return mid
 }else if(arr[mid] <= pick){
		low = mid + 1
}else if (arr[mid] >= pick ){
		high = mid - 1
}
    }
  return false
}

console.log(BinarySearch([1,3,4,5], 3))
