/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [];
    let iTarget = 0;

    for (let i = 1; i <= n; i++) {
        if (iTarget == target.length) break;

        res.push("Push");

        if (i === target[iTarget]) {
            iTarget++;
        } else {
            res.push("Pop");
        }
    }

    return res;
};