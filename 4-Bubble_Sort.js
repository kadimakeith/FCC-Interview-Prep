/**
 * Auth: Keith K. Kadima
 *
 * Description:
 *
 * Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs
 * between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some
 * of the common basic approaches and learn how they can be implemented.
 * 
 * Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end,
 * iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order.
 * The method continues looping through the array until no swaps occur at which point the array is sorted.
 *
 * This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity.
 * While simple, it is usually impractical in most situations.
 */

function bubbleSort(array) {
  
  let index = array.length - 1;
  
  for (let i = 0; i < index; ++i) {
    
    for (let j = 0; j < index; ++j) {
      
      if (array[j] > array[j+1]) {
        
        [array[j], array[j+1]] = [array[j+1], array[j]];
        
      }
      
    }
    
  }
  return array;

}
