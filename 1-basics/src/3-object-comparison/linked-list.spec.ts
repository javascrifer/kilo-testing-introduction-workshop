import { reverseLinkedList, LinkedListNode } from './linked-list';

describe('reverseLinkedList', () => {
  it('your test cases goes here', () => {
    const linkedList: LinkedListNode<number> = {
      value: 3,
      next: {
        value: 5,
        next: {
          value: 10,
          next: {
            value: 35,
            next: null,
          },
        },
      },
    };
    const reversedLinkedList: LinkedListNode<number> = {
      value: 35,
      next: {
        value: 10,
        next: {
          value: 5,
          next: {
            value: 3,
            next: null,
          },
        },
      },
    };
    expect(reverseLinkedList(linkedList)).toStrictEqual(reversedLinkedList);
  });
});
