/**
 * @param {string} s
 * @return {number}
 */

const dict = [
    {
        symbol: "I",
        value: 1
    }, {
        symbol: "V",
        value: 5
    }, {
        symbol: "X",
        value: 10
    }, {
        symbol: "L",
        value: 50
    }, {
        symbol: "C",
        value: 100
    }, {
        symbol: "D",
        value: 500
    }, {
        symbol: "M",
        value: 1000
    }
]

var romanToInt = function (s) {
    result = 0
    const arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        let currentInteger = dict.find((e) => e.symbol == arr[i])
        let nextInteger = dict.find((e) => e.symbol == arr[i + 1]) || 0


        if (nextInteger.value != 0 && currentInteger.value < nextInteger.value) {
            result += nextInteger.value - currentInteger.value
            arr.splice(i + 1, 1)

        } else {
            result += currentInteger.value
        }

    }

    console.log(result)
    return result

};

romanToInt("MMCCCXCIX")