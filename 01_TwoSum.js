/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 第一种方法，直接hash表，key存跟value的差，value寸下标。一边寸一边查，查到直接输出。
let twoSum = function(nums, target) {
    var map = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        // console.log(map[target-value] === undefined);
        if (map[target-value] !== undefined) {
            return [map[target-value], i]
        }
        map[nums[i]] = i
    }
    return [0, 0]
};

console.log(twoSum([2, 7, 11, 15], 26));

