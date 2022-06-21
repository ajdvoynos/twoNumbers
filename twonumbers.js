import { ListNode } from "./linkedListUtils";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, addOne) {
  if(!l1 && !l2 && !addOne) return;
  var sum = (l1?.val ?? 0) + (l2?.val ?? 0) + !!addOne;
  return new ListNode(sum < 10 ? sum : sum % 10, addTwoNumbers(l1?.next, l2?.next, sum >= 10));
};

export { addTwoNumbers }