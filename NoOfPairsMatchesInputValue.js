// 2. Find number of pairs in an array which has the sum provided as a parameter
// For example:
// const arr1 = [4, 2, 5, 6, 8, 1];
// const sum = 6;
// numberOfPairs(arr1, sum);
// // Pais that matches are [4, 2] => 6. [5, 1] => 6
// So output 2

function findNumberOfPairsMatchesSumValue(inputArray, sumValue) {


  if (!Array.isArray(inputArray) || !(inputArray.length>=2) ){
    console.error("Invalid Array");
    return false;
  }

  if (typeof sumValue !== 'number'){
    console.error("Invalid sum value");
    return false;
  }

  //filtered out the non-numeric values
  inputArray = inputArray.filter((element)=> typeof element === 'number');
    

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
      numberCount[currentNumber] = numberCount[currentNumber] ?
      numberCount[currentNumber]++ : 1;
    
  }
  
  return countValue; //,numberCount;
}
  
const inputArray = [4, 2, 5, 6, 8, 1];
//[4,2,5,6,8,1,-2,0,true,'hello']
//[4, 2, 5, 6, 8, 1,-2,0]; => [4,2] , [5,1] , [6,0] , [8,-2]  
const sumValue = 6;

console.log(findNumberOfPairsMatchesSumValue(inputArray,sumValue));

// console.log(findNumberOfPairsMatchesSumValue([1], sumValue));
// console.log(findNumberOfPairsMatchesSumValue([], sumValue));
// console.log(findNumberOfPairsMatchesSumValue('hello', sumValue));
// console.log(findNumberOfPairsMatchesSumValue(true, sumValue));
// console.log(findNumberOfPairsMatchesSumValue(0, sumValue));

// console.log(findNumberOfPairsMatchesSumValue(inputArray, true));
// console.log(findNumberOfPairsMatchesSumValue(inputArray, 'hello'));
// console.log(findNumberOfPairsMatchesSumValue(inputArray, []));
// console.log(findNumberOfPairsMatchesSumValue(inputArray, ''));






  