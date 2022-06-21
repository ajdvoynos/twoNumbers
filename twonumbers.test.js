import { ListNode, toArray, toLinkedList } from './linkedListUtils';
import { expect, test, describe } from 'vitest'
import { addTwoNumbers } from './twonumbers';

describe('utils', ()=>{
  test('toLinkedList', ()=>{
    const input = [4,5,6]
    const actual = toLinkedList(input);
    expect(actual.val).toBe(4);
    expect(actual.next.val).toBe(5);
    expect(actual.next.next.val).toBe(6);
  })

  test('toLinkedListLarge', ()=>{
    const input = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    const actual = toLinkedList(input)
    expect(actual).toBeTruthy();
  })
  
  test('toArray', ()=>{
    const input = new ListNode(7, new ListNode(0, new ListNode(8)));
    const expected = [7,0,8];
    const actual = toArray(input);  
    expect(actual).toStrictEqual(expected);
  });

  test('toArrayLarge', ()=>{
    const input = JSON.parse('{"val":1,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":0,"next":{"val":1,"next":null}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}');
    const expected = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    const actual = toArray(input);
    expect(actual).toStrictEqual(expected);
  });
})

describe('twoNumbers', ()=>{
  test('baseCase', ()=>{
    const input = [[2,4,3], [5,6,4]];
    const expected = [7,0,8]
    const actual = addTwoNumbers(toLinkedList(input[0]), toLinkedList(input[1]));
    expect(toArray(actual)).toStrictEqual(expected);
  })

  test('differentSizeArray', () => {
    const input = [[9,9,9,9,9,9,9],[9,9,9,9]];
    const expected = [8,9,9,9,0,0,0,1]
    const actual = addTwoNumbers(toLinkedList(input[0]), toLinkedList(input[1]));
    expect(toArray(actual)).toStrictEqual(expected);
  });
  
  test('largeInput', ()=>{
    const input = [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[5,6,4]];
    const expected = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
    const actual = addTwoNumbers(toLinkedList(input[0]), toLinkedList(input[1]));
    expect(toArray(actual)).toStrictEqual(expected);
  })
})