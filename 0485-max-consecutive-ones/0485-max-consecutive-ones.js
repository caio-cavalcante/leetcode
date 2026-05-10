/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            sum++;
        } else if (nums[i] == 0) {
            if (max < sum) {
                max = sum;
            }
            sum = 0;
        }
    }

    return (max > sum ? max : sum);
};