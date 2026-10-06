class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    
    hasDuplicate(nums) {
        let inArr = new Set()

        for(const num of nums){
            if(inArr.has(num)){
                return true
            }
            inArr.add(num)
        }
        return false
    }
}
