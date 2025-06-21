function createNode(data) {
  return { data: data, next: null };
}

let head = null;

function insertAtEnd(data) {
  const newNode = createNode(data);
  if (head === null) {
    head = newNode;
    return;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

function insertAtBeginning(data) {
  const newNode = createNode(data);
  newNode.next = head;
  head = newNode;
}

function deleteNode(value) {
  if (head === null) {
    console.log("List is empty");
    return;
  }

  if (head.data === value) {
    head = head.next;
    return;
  }

  let current = head;
  while (current.next !== null && current.next.data !== value) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;
  } else {
    console.log("Value not found");
  }
}

function printList() {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " -> ";
    current = current.next;
  }
  console.log(result + "null");
}


insertAtEnd(10);
insertAtEnd(20);
insertAtEnd(30);
insertAtBeginning(5);
printList();         // 5 -> 10 -> 20 -> 30 -> null

deleteNode(10);
printList();         // 5 -> 20 -> 30 -> null

deleteNode(100);     // Value not found
