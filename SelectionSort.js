/** Selection Sort **/

// basically sorts through an unsorted array or list
// and sorts it. 

// MY SOLUTION:
SelectionSort = (arr) => {
     let newArr = []
    for(i=0; i<arr.length; i++){
        let left = arr[i]
        for(j = i + 1; j<arr.length; j++){
        let right = arr[j]
        if(left <= right){
        newArr.push(left)
        left++
        }else if(left >= right){
        newArr.push(right)
        }
        return newArr
        }
        return false
}

// CORRECT SOLUTION
// compare contrast it from your solution
SelectionSort = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // keeps track of the index of the current
    // minimum element
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        // swaps them if the next number is lesser
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap the elements
    }
    newArr.push(arr[i]); // Add the current smallest element to newArr
  }
  return newArr;
}

console.log(SelectionSort([2, 5, 1, 4, 3]));
