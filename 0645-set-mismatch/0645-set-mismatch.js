/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [0, 0]; // duplicate, missing

    // First pass: find the duplicate by marking visited indices with negative numbers
    for (let i = 0; i < nums.length; i++) {
        let n = Math.abs(nums[i]);
        nums[n - 1] = -nums[n - 1];
        
        // If it's positive after flipping, it means it was already negative (visited twice)
        if (nums[n - 1] > 0) {
            res[0] = n;
        }
    }

    // Second pass: find the missing number (the index that remains positive)
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n > 0 && i + 1 !== res[0]) {
            res[1] = i + 1;
            return res;
        }
    }
    
    return res;
};