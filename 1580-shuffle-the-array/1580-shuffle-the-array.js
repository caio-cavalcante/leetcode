/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = [];
    let pair = [];

    for (let i = 0; i < n; i++) {
        if (!ans) {
            ans[i] = [nums[i], nums[i + n]];
        } else {
            pair = [nums[i], nums[i + n]];
            ans.push(...pair);
        }

        pair = [0, 0];
    }
    
    return ans;
};