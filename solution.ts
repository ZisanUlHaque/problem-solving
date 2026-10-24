// Problem 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n: number): string {
    let result = "";
    
    // Loop through each row from 1 up to n
    for (let i = 1; i <= n; i++) {
        let spaces = n - i; // Number of spaces needed
        let hashes = i;     // Number of # needed
        
        // Add the spaces, then the hashes
        let row = " ".repeat(spaces) + "#".repeat(hashes);
        
        result += row;
        
        // Add a newline if it's not the very last row
        if (i < n) {
            result += "\n";
        }
    }
    return result;
};

// Problem 2: Grading Students
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades: number[]): number[] {
    let finalGrades: number[] = [];
    
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        
        // If grade is less than 38, no rounding happens
        if (grade < 38) {
            finalGrades.push(grade);
        } else {
            // Find the next multiple of 5
            let remainder = grade % 5;
            let nextMultipleOf5 = grade + (5 - remainder);
            
            // If the difference is less than 3, round up
            if (nextMultipleOf5 - grade < 3) {
                finalGrades.push(nextMultipleOf5);
            } else {
                // Otherwise, keep the original grade
                finalGrades.push(grade);
            }
        }
    }
    
    return finalGrades;
};

// Problem 3: Time Conversion
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s: string): string {
    // Extract AM or PM from the end of the string
    let amPm = s.substring(8, 10);
    
    // Extract hours, minutes, and seconds
    let hours = s.substring(0, 2);
    let minutes = s.substring(3, 5);
    let seconds = s.substring(6, 8);
    
    if (amPm === "AM") {
        // Special case: 12 AM is 00 in 24-hour time
        if (hours === "12") {
            hours = "00";
        }
    } else { // It is PM
        // If it's PM, add 12 to the hours, except if it's already 12 PM
        if (hours !== "12") {
            // Convert string to number, add 12, then convert back to string
            let hoursNumber = parseInt(hours) + 12;
            hours = hoursNumber.toString();
        }
    }
    
    return hours + ":" + minutes + ":" + seconds;
};

// Problem 4: String Repeat
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n: number, s: string): string {
    let result = "";
    
    // Loop n times, adding the string s to our result each time
    for (let i = 0; i < n; i++) {
        result += s;
    }
    
    return result;
};

// Problem 5: Reversed Strings
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str: string): string {
    let reversed = "";
    
    // Start from the last character and go backwards to the first
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
};

// Problem 6: Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr: number[]): number {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        // Only add the number if it is strictly greater than 0
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    
    return sum;
};

// Problem 7: Grasshopper — Summation
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num: number): number {
    let sum = 0;
    
    // Add every number from 1 up to 'num'
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    
    return sum;
};

// Problem 8: Convert a Boolean to a String
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b: boolean): string {
    // Check if b is strictly equal to true
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
};

// Problem 9: Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n: number): string[] {
    let result: string[] = [];
    
    for (let i = 1; i <= n; i++) {
        // Check BOTH 3 and 5 first
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            // Divisible only by 3
            result.push("Fizz");
        } else if (i % 5 === 0) {
            // Divisible only by 5
            result.push("Buzz");
        } else {
            // Not divisible by either, convert number to string
            result.push(i.toString());
        }
    }
    
    return result;
};

// Problem 10: Running Sum of 1D Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums: number[]): number[] {
    let result: number[] = [];
    let currentTotal = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Add the current number to our running total
        currentTotal += nums[i];
        // Save the current total into our result array
        result.push(currentTotal);
    }
    
    return result;
};

// Problem 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts: number[][]): number {
    let highestWealth = 0;
    
    // Loop through each customer
    for (let i = 0; i < accounts.length; i++) {
        let currentCustomer = accounts[i];
        let customerWealth = 0;
        
        // Loop through the current customer's bank accounts to sum their money
        for (let j = 0; j < currentCustomer.length; j++) {
            customerWealth += currentCustomer[j];
        }
        
        // If this customer has more money than our previous highest, update it
        if (customerWealth > highestWealth) {
            highestWealth = customerWealth;
        }
    }
    
    return highestWealth;
};

// Problem 12: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    // uniqueCount acts as a pointer for where the next unique number should go
    let uniqueCount = 1; 
    
    // Start at index 1 and compare to the previous element
    for (let i = 1; i < nums.length; i++) {
        // If current number is different from the one before it, it's unique
        if (nums[i] !== nums[i - 1]) {
            // Place it at the uniqueCount position
            nums[uniqueCount] = nums[i];
            uniqueCount++; // Move the pointer forward
        }
    }
    
    return uniqueCount;
};

// Problem 13: Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]): boolean {
    // We use a simple JavaScript object as a dictionary to remember numbers we've seen
    let seenNumbers: { [key: number]: boolean } = {};
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        
        // If we have already seen this number, we found a duplicate!
        if (seenNumbers[currentNum] === true) {
            return true;
        }
        
        // Mark this number as seen for future checks
        seenNumbers[currentNum] = true;
    }
    
    // If loop finishes without finding duplicates, return false
    return false;
};

// Problem 14: Move Zeroes
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums: number[]): void {
    // Keep track of where to place the next non-zero number
    let insertPosition = 0;
    
    // Step 1: Move all non-zero numbers to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPosition] = nums[i];
            insertPosition++;
        }
    }
    
    // Step 2: Fill the rest of the array with zeroes
    for (let i = insertPosition; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// Problem 15: Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1: number[], m: number, nums2: number[], n: number): void {
    // Start from the back to avoid overwriting elements in nums1
    let p1 = m - 1; // Last valid element in nums1
    let p2 = n - 1; // Last element in nums2
    let pMerge = m + n - 1; // Very last empty spot in nums1
    
    // While there are still elements in nums2 to merge
    while (p2 >= 0) {
        // If nums1 has elements left AND the nums1 element is bigger
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[pMerge] = nums1[p1]; // Place nums1 element at the end
            p1--;
        } else {
            // Otherwise, place the nums2 element at the end
            nums1[pMerge] = nums2[p2];
            p2--;
        }
        pMerge--; // Move our empty spot pointer backwards
    }
};

// Problem 16: 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: number[]): number[][] {
    // Step 1: Sort the array so we can use the "two pointer" method easily
    nums.sort((a, b) => a - b);
    let result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers to avoid duplicate triplets in our answer
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;             // Pointer just after 'i'
        let right = nums.length - 1;  // Pointer at the very end

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // We found a triplet that equals zero!
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for the 'left' pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the 'right' pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                // Move both pointers inward to look for other combinations
                left++;
                right--;
            } else if (sum < 0) {
                // If sum is too small, move left pointer up to increase the sum
                left++;
            } else {
                // If sum is too big, move right pointer down to decrease the sum
                right--;
            }
        }
    }
    return result;
};

// Problem 17: Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits: number[]): number[] {
    // Start from the last digit (the ones place)
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the digit is less than 9, we can just add 1 and we're done!
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        
        // If the digit is 9, it becomes 0 and we carry the 1 to the next loop iteration
        digits[i] = 0;
    }
    
    // If we finished the loop, it means ALL digits were 9 (like [9, 9, 9])
    // They are now all 0s. We need to add a 1 to the very front.
    digits.unshift(1);
    return digits;
};

// Problem 18: Reverse String
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s: string[]): void {
    let left = 0; // Pointer at the start
    let right = s.length - 1; // Pointer at the end
    
    // Swap characters until the pointers meet in the middle
    while (left < right) {
        // Save the left letter temporarily
        let temp = s[left]; 
        
        // Move right letter to the left spot
        s[left] = s[right]; 
        
        // Put the temporarily saved left letter into the right spot
        s[right] = temp;
        
        // Move pointers towards the center
        left++;
        right--;
    }
};

// Problem 19: Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s: string): number {
    let length = 0;
    let foundWord = false;
    
    // Loop backwards from the end of the string
    for (let i = s.length - 1; i >= 0; i--) {
        // If the character is not a space
        if (s[i] !== ' ') {
            foundWord = true; // We found the start of the last word
            length++;         // Count the character
        } 
        // If we hit a space AFTER finding characters, the word is over
        else if (foundWord === true) {
            break;
        }
    }
    
    return length;
};

// Problem 20: Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs: string[]): string {
    // If the array is empty, there is no common prefix
    if (strs.length === 0) return "";
    
    // Assume the first whole word is the common prefix to start
    let prefix = strs[0];
    
    // Check our assumed prefix against the rest of the words
    for (let i = 1; i < strs.length; i++) {
        let currentWord = strs[i];
        
        // While the current word does NOT start with our prefix
        while (currentWord.indexOf(prefix) !== 0) {
            // Chop off the last letter of the prefix and try again
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If the prefix gets chopped down to nothing, they have nothing in common
            if (prefix === "") {
                return "";
            }
        }
    }
    
    return prefix;
};