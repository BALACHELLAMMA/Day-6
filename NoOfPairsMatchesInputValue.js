// 2. Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// // Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2

function findNumberOfPairsMatchesInputValue(inputArray, sumValue) {

    

    //to store each value with it's count to find the pair
    const numberCount = {}; 
    //no of pairs
    let countValue = 0; 
  
    for (const currentNumber of inputArray) {
      const complementNumber = sumValue - currentNumber;
  
      if (numberCount[complementNumber]) {
        // If the complement exists in the numberCoumt, increment the count by the number of times the complement was there in array
        countValue += numberCount[complementNumber];
        // console.log(numberCount[complement] , countValue);
      }
  
      // Increment the count for the current number in the object

      if (numberCount[currentNumber]) {
        numberCount[currentNumber]++;
      } 
      else {
        numberCount[currentNumber] = 1;
      }

     
    }
  
    return countValue; //,numberCount;
}
  
const inputArray = [4,2,5,6,8,1,-2,0,true,'hello']
//[4, 2, 5, 6, 8, 1,-2,0]; => [4,2] , [5,1] , [6,0] , [8,-2]  
const sumValue = 2;

console.log(findNumberOfPairsMatchesInputValue(inputArray, sumValue));

  