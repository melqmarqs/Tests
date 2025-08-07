/* Given an array of integers (nums) and an integer (target),
return the indices of the two number such that they add up
to target. You may assume that each input would have exactly
one solution, and you may not use the same element twice.

example: 
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] === 9, we return [0, 1]
*/

function two_sum(nums, target) {
    let num_to_index = new Map();

    for (let index in nums) {
        let num = nums[index];

        let complement = target - num;

        if (complement in num_to_index)
            return [+num_to_index[complement], +index];
        
        num_to_index[num] = index;
    }

    return [];
}

function test() {
    let listOfTests = [
        {
            nums: [2,8,11,15,7],
            target: 9,
            solution: [0,4]
        },
        {
            nums: [11,3,5,2,8,15],
            target: 5,
            solution: [1,3]
        },
        {
            nums: [3,2,4],
            target: 6,
            solution: [1,2]
        },
        {
            nums: [2,5,5,11],
            target: 10,
            solution: [1,2]
        },
        {
            nums: [10,1000,2001,3000,4000,5000],
            target: 5001,
            solution: [2,3]
        },
    ];

    for (let test of listOfTests) {
        let indices = two_sum(test.nums, test.target);
        let result = JSON.stringify(test.solution) === JSON.stringify(indices) ? 'passed' : 'rejected';
        console.log('------')
        console.log(result.toUpperCase());
        console.log('expected', test.solution);
        console.log('output', indices);
    }
}

test();