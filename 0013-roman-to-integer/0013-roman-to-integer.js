/**
 * @param {string} s
 * @return {number}
 */
var singleChar = function(c) {
    switch (c) {
        case 'I':  return 1; break;
        case 'V': return 5; break;
        case 'X':  return 10; break;
        case 'L': return 50; break;
        case 'C':  return 100; break;
        case 'D': return 500; break;
        case 'M':  return 1000; break;
        default: return 0;
    }
}

var romanToInt = function(s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = singleChar(s[i]);
        const next = singleChar(s[i+1]);

        if (curr < next) {
            sum -= curr;
        } else {
            sum += curr;
        }
    }

    return sum;
};