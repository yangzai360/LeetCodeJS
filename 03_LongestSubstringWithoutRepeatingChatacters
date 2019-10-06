/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    let map = {};
    for (let i = 0 ; i < s.length; i++) {
        const char = s.charAt(i);
        if (map[char] === undefined || map[char] < start) {
            if (i - start + 1 > maxLength) {
                maxLength = i - start + 1
            }
        } else {
            start = map[char] + 1
        }
        map[char] = i
    }
    return maxLength
    // my old swift 2.0 version
    // var start = 0
    // var i = 0
    // var maxLength = 0
    // var dictionary = [Character:Int]()
    // for char in s.characters {
    //     if dictionary[char] == nil || dictionary[char] < start{
    //         // if new appear.
    //         if i - start + 1 > maxLength {
    //             maxLength = i - start + 1
    //         }
    //     } else {
    //         // if this already appear.
    //         start = dictionary[char]! + 1
    //     }
    //     dictionary[char] = i
    //     i += 1
    // }
    // return maxLength
};
