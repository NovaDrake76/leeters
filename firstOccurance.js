/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let arr = haystack.split('')
    let phrase = ""
    let point = 0
    let firstIndex = -1

    for (let i = 0; i <= arr.length; i++) {
        if (needle.length == phrase.length) {
            firstIndex = i - needle.length
            break
        }

        if (arr[i] == needle[point]) {
            phrase = phrase + arr[i]
            point += 1
        } else {
            i = i - phrase.length
            phrase = ""
            point = 0
            firstIndex = -1

        }
    }

    return firstIndex

};

// You just need to use IndexOf, like this:
//   return haystack.indexOf(needle)
// lmao