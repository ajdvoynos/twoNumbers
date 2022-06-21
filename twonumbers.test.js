import { ListNode, toArray } from './linkedList';
import { expect, test } from 'vitest'
import { addTwoNumbers,  toLinkedList } from './twonumbers';

test('fromArrayLinkedList', ()=>{
  const input = [4,5,6]
  const actual = toLinkedList(input);
  expect(actual.val).toBe(4);
  expect(actual.next.val).toBe(5);
  expect(actual.next.next.val).toBe(6);
})

test('toArrayLinkedList', ()=>{
  const input = new ListNode(7, new ListNode(0, new ListNode(8)));
  const expected = [7,0,8];
  const actual = toArray(input);  
  expect(actual).toStrictEqual(expected);
});

test('twoNumbers', ()=>{
  const input = [[2,4,3], [5,6,4]];
  const expected = [7,0,8]
  const actual = addTwoNumbers(toLinkedList(input[0]), toLinkedList(input[1]));
  expect(expected).toStrictEqual(toArray(actual));
})
