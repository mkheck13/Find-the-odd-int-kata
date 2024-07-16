// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).




// we will want a place to count the occurrences of each number
// will need an array to be sorted, we will use the .sort() method
// use a for loop to iterate thru the numbers
// then another for loop inside the other one to compare the the elements from the outside loop
// if a match is found then our count for that number is increased by one
// we then need to check to see if the count is odd for any of the numbers
// if it is odd then its returned as the result
function findOdd(A){
    let count = 0;
    let arr = A.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        for(let n = 0; n < arr.length; n++){
            if(arr[i] == arr[n]){
                count++;
            }
        }
        if(count % 2 !== 0){
            return arr[i]
        }
    }
}


// was looking at some of the other solutions and saw one that I could change into a function
// instead of using for loops and if statements 
// just use the .reduce() method
// I was pleased that I was able to make it work for the test cases
function findOdd(A){
    let arr = A.reduce((a, b) => a ^ b);
    return arr;
}