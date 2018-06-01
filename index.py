class Solution(object):
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ret = maxv = minv = nums[0]

        for i in nums[1:]:
            if i >= 0:
                maxv = max(i, maxv * i)
                minv = min(i, minv * i)
            else:
                maxv_tmp = maxv
                maxv = max(i, minv * i)
                minv = min(i, maxv_tmp * i)
            
            ret = max(ret, maxv)

        return ret

Solution().maxProduct([2,3,-2,4])