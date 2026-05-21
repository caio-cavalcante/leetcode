/**
 * @param {string[]} tokens
 * @return {number}
 */
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
};

function calculate(num1, num2, op) {
    return operations[op] ? operations[op](num1, num2) : 0;
}

var evalRPN = function(tokens) {
    // run through the array
    // each number is put in a stack
    // when an operator is found:
    // evaluate the expression of the operator and last 2 numbers
    // pop 2 numbers and push the new result in the stack
    // 'divide' into the smallest array = ["N1", "N2", "OP"]
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (operations[token]) {
            let num2 = stack.pop(); 
            let num1 = stack.pop();

            let result = calculate(num1, num2, token);

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};