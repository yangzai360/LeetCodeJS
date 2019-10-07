/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) {
        return ''
    } else if (s.length === 1) {
        return s;
    } else {
        let minStart = 0;
        let maxLen = 1;
        let i = 0;
        while (i < s.length) {
            if (s.length - 1 <= maxLen / 2) {
                break
            }
            let j = i;
            let k = i;
            while (k < s.length - 1 && s.charAt(k + 1) === s.charAt(k)) {
                k += 1
            }
            i = k + 1;
            while (k < s.length - 1 && j > 0 && s.charAt(k + 1) === s.charAt(j - 1)) {
                k += 1;
                j -= 1;
            }
            let newLen = k - j + 1;
            if (newLen > maxLen) {
                minStart = j;
                maxLen = newLen;
            }
        }
        return s.substr(minStart, maxLen);
    }
};

/*
class Solution {
    // t = O(N^2), s = O(1)
    func longestPalindrome(s: String) -> String {

        let nss = NSString(UTF8String: s)!

        if nss.length == 0 {
            return ""
        } else if nss.length == 1 {
            return s
        } else {
            var min_start: Int = 0
            var max_len: Int = 1
            var i = 0
            while i < nss.length {
                if nss.length - i <= max_len / 2 {
                    break
                }
                var j = i
                var k = i
                while k < nss.length - 1 && nss.characterAtIndex(k + 1) == nss.characterAtIndex(k) {
                    k += 1
                }
                i = k + 1
                while k < nss.length - 1 && j > 0 && nss.characterAtIndex(k + 1) == nss.characterAtIndex(j - 1) {
                    k += 1
                    j -= 1
                }
                let new_len = k - j + 1
                if new_len > max_len {
                    min_start = j
                    max_len = new_len
                }
            }
            return nss.substringWithRange(NSMakeRange(min_start, max_len))
        }
    }
}
*/

/* 4ms version
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return "";
        }
//         保存起始位置，测试了用数组似乎能比全局变量稍快一点
        int[] range = new int[2];
        char[] str = s.toCharArray();
        for (int i = 0; i < s.length(); i++) {
//             把回文看成中间的部分全是同一字符，左右部分相对称
//             找到下一个与当前字符不同的字符
            i = findLongest(str, i, range);
        }
        return s.substring(range[0], range[1] + 1);
    }

    public static int findLongest(char[] str, int low, int[] range) {
//         查找中间部分
        int high = low;
        while (high < str.length - 1 && str[high + 1] == str[low]) {
            high++;
        }
//         定位中间部分的最后一个字符
        int ans = high;
//         从中间向左右扩散
        while (low > 0 && high < str.length - 1 && str[low - 1] == str[high + 1]) {
            low--;
            high++;
        }
//         记录最大长度
        if (high - low > range[1] - range[0]) {
            range[0] = low;
            range[1] = high;
        }
        return ans;
    }
}
* */
