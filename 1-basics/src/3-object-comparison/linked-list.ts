export interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

export function reverseLinkedList<T>(head: LinkedListNode<T>) {
  let node = head;
  let previous = null;

  while (node) {
    // save next or you lose it!!!
    const save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous;
}
