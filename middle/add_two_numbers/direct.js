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
  return NumberToList(listToNumber(l1) + listToNumber(l2));
};

function listToNumber(list) {
  const array = [];
  let node = list;
  while (node !== null) {
    array.unshift(node.val);
    node = node.next;
  }
  return BigInt(array.join(""));
}

function NumberToList(number) {
  const string = String(number);
  const array = Array.prototype.slice.call(string).reverse();
  const root = new ListNode(array[0]);
  let node = root;
  for (let i = 1; i < array.length; i++) {
    const currentNode = new ListNode(array[i]);
    node = node.next = currentNode;
  }
  return root;
}
