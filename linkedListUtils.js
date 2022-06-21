export function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export function toArray(node){
  var arr = [];
  while(node){
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

export function toLinkedList(arr, i = 0){
  if(i == arr.length) return;
  return new ListNode(arr[i], toLinkedList(arr, ++i))
}