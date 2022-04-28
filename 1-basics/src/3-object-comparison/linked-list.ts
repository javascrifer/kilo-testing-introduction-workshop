export interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

export function reverseLinkedList<T>(head: LinkedListNode<T>) {
  return head;
}
