import { ListNode } from "./linkedList";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const toNumber = (node) =>{
    var digits = [];
    while(node){
      digits.push(node.val)
      node = node.next;
    }
    var number = digits.reverse().join('');
    
    return parseFloat(number);
  }
  var number1 = toNumber(l1);
  var number2 = toNumber(l2);
  var sum = number1 + number2;
  var arr = sum.toString().split("").reverse().map(x=> parseInt(x));
  var result = toLinkedList(arr);
  return result;
};

const toLinkedList = (arr, i = 0) => {
  if(i == arr.length) return;
  return new ListNode(arr[i], toLinkedList(arr, ++i))
}

export { addTwoNumbers, toLinkedList }