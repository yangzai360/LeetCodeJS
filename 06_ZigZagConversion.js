/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    let strArray = new Array(numRows).fill('');
    let direct = true;
    let lineMark = 0;
    for (const char in s) {
        strArray[lineMark] += s[char];
        if ((lineMark === numRows - 1  && direct) || (lineMark === 0  && !direct)) {
            direct = !direct;
        }
        lineMark += direct ? 1 : -1
    }
    let resultStr = '';
    for (let str in strArray) {
        resultStr += strArray[str];
    }
    return resultStr
};

console.log(convert('LEETCODEISHIRING', 4));
