// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// assume nums1 and nums2 cannot be both empty.

function FindMedianSortedArrays (nums1, nums2){
    const exactMedianPos = (nums1.length + nums2.length) / 2;
    const medianPos = Math.ceil(exactMedianPos);

    let median = 0;
    let nums1Index = 0;
    let nums2Index = 0;

    // set correct median
    for (var i = 0; i < medianPos; i++) {
        const nums1Value = nums1[nums1Index]; 
        const nums2Value = nums2[nums2Index]; 

        // if both arrays have numbers left to compare and array 1 value is lower than array 2 value
        // or if array 2 is out of numbers
        if (nums1Value < nums2Value || nums2Value === undefined) {
            median = nums1[nums1Index];
            nums1Index++; 
        } else {
            median = nums2Value;
            nums2Index++;
        }

    }

    // if median is between 2 numbers
    if (exactMedianPos === medianPos) {
        let nextNumber = median;
        const nums1Value = nums1[nums1Index]; 
        const nums2Value = nums2[nums2Index]; 

        if (nums1Value && nums1Value) {
            nextNumber = nums1Value < nums2Value ? nums1Value : nums2Value;
        } else {
            nextNumber = nums1Value === undefined ? nums2Value : nums1Value;
        }
        return (median + nextNumber) / 2;
    }

    return median;
};

console.log(FindMedianSortedArrays([1, 3, 5, 6], [2, 5, 6])) // 5
console.log(FindMedianSortedArrays([1, 1], [2, 5, 6])) // 2
console.log(FindMedianSortedArrays([1, 1, 1], [2, 5, 6])) // 1.5
console.log(FindMedianSortedArrays([1, 1, 1, 1], [2, 5, 6])) // 1
console.log(FindMedianSortedArrays([3, 5, 6, 8], [1, 1, 2])) // 3