/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        // Extract the last digit: 121 % 10 = 1
        const lastDigit = x % 10;
        // Build the reversed number: (0 * 10) + 1 = 1
        reversed = (reversed * 10) + lastDigit;
        // Remove the last digit: Math.floor(121 / 10) = 12
        x = Math.floor(x / 10);
    }

    return original === reversed;
};