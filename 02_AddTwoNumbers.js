function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var flag = 0;
    let result;
    let lastNode;
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
        flag = parseInt(sum / 10);
        sum = sum % 10;

        let newNode = new ListNode(sum);
        if (lastNode) {
            lastNode.next = newNode;
            lastNode = newNode;
        } else {
            lastNode = result = newNode;
        }

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    if (flag === 1) {
        lastNode.next = new ListNode(1);
    }

    return result;
};
