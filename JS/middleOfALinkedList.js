//Find the middle of a linked list
//input: 0 1 2 3 4
//output: 2

//input: 0 1 2 3 4 5
//output: 3

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newValue = new Node(value);
    if (!this.head) {
      this.head = newValue;
      return;
    }

    let current = this.head;
    while (current.next)
      current = current.next;

    current.next = newValue;
  }

  findMiddle() {
    let slow = this.head, fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }
}

const list = new LinkedList();
[10, 20, 30, 40, 50, 60].forEach(v => list.append(v));

console.log(list.findMiddle());