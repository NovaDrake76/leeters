/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    if (x < 10) {
        return true
    }
    const strx = x.toString()
    const chars = strx.split('')
    let result = true

    for (i = 0; i < chars.length; i++) {
        if (chars[i] != chars[chars.length - 1 - i]) {
            result = false
            break
        }
    }

    return result
};