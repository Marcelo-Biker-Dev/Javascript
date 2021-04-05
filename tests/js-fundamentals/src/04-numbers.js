/**
 * Convert a binary String to a Number
 */
exports.binaryToDecimal = function(str) {
    return parseInt(parseInt(str,2),10);
};

/**
 * Add two Numbers with a precision of 2
 */
exports.add =  function(a, b) {
    num = a + b;
    return parseFloat((num).toFixed(2));
};

/**
 * Multiply two Numbers with a precision of 4
 */
exports.multiply =  function(a, b) {
    num = a * b;
    return parseFloat((num).toPrecision(4));

};
