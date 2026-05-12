/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let set = new Set(nums);
    let pair = [];

    for (let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];

        if (set.has(goal) && nums.indexOf(goal) !== i) {
            return pair = [i, nums.indexOf(goal)];
        }
    }

    return [];
};