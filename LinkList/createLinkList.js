class List {
  constructor(val) {
    this.head = {
      val: val,
      next: null,
    };
    this.tail = this.head;
  }
  appendNode(val) {
    const newobj = {
      val: val,
      next: null,
    };
    this.tail.next = newobj;
    this.tail = newobj;
  }
  deleteNode() {}
  displayList() {
    let traverList = this.head;
    while (traverList.next !== null) {
      console.log(traverList.val);
      traverList = traverList.next;
    }
    console.log(traverList.val);
  }
  findLengthOfLinkList() {
    let length = 0;
    let traverList = this.head;

    while (traverList.next !== null) {
      traverList = traverList.next;
      length++;
      //   console.log(traverList);
    }
    length++;
    return length;
  }
  addNodeToEnd(val) {
    const lastNode = {
      val: val,
      next: null,
    };
    let traverList = this.head;
    while (traverList.next !== null) {
      traverList = traverList.next;
    }
    traverList.next = lastNode;
    traverList = lastNode;
  }

  size() {
    let count = 1;
    let traverList = this.head;
    while (traverList.next !== null) {
      traverList = traverList.next;
      count++;
    }
    return count;
  }

  addNodeAtAnyIndex(index, val) {
    let i = 0;
    if (index < 0 || index > this.size()) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      const newObj = {
        val: val,
        next: null,
      };
      const nextNode = this.head;
      this.head = newObj;
      newObj.next = nextNode;
      return;
    }
    let prev = this.head;
    while (i < index - 1) {
      prev = prev.next;
      i++;
    }
    const newObj = {
      val: val,
      next: null,
    };
    let holdNextNode = prev.next;
    prev.next = newObj;
    newObj.next = holdNextNode;
  }
  isPalindrome() {
    let string1 = "";
    let string2 = "";
    let node = this.head;

    while (node != null) {
      string1 = string1 + node.val;
      string2 = node.val + string2;
      node = node.next;
    }
    console.log(string1, string2);
    return string1 === string2;
  }
  // reverseList() {
  //   let node = this.head;
  //   let prev = null;
  //   while (node != null) {
  //     let newnode = node.next;
  //     node.next = prev;
  //     prev = node;
  //     node = newnode;
  //   }
  //   console.log(prev);
  // }

  reverseList() {
    let prev = null;
    let newnode = this.head;
    while (newnode.next != null) {
      let node = newnode.next;
      newnode.next = prev;
      prev = newnode;
      console.log(prev)
      newnode = node;
    }
  }
}

const list = new List(12);
list.appendNode(22);
list.appendNode(21);
list.addNodeToEnd(11);

let length = list.findLengthOfLinkList();
// console.log(list.size());
// list.addNodeAtAnyIndex(0, 34);
// list.addNodeAtAnyIndex(3, 10);

// list.displayList();
// console.log(list.isPalindrome());
list.reverseList();
// console.log(length);

console.log(list);
