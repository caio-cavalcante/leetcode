/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let pair = [0, 0]; // [duplicate, missing]

    for (let i = 0; i < nums.length; i++) {
        let count = nums.filter(num => num === i+1).length;
        if (count == 2) pair[0] = i+1;
        if (count == 0) pair[1] = i+1;
    }
             
    return pair;
};