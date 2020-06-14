//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const root = new ListNode();
  let node = root;
  let carry = false;
  while (l1 || l2 || carry) {
    node = node.next = new ListNode();
    let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    if (carry) {
      num += 1;
    }
    carry = num > 9;
    if (carry) {
      num = num - 10;
    }
    node.val = num;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  return root.next;
};
