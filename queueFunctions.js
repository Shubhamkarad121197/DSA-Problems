let myQueue = [];

function enqueue(x) {
    myQueue.push(x);
}

function dequeue() {
    if (myQueue.length === 0) return "Queue is empty";
    return myQueue.shift();
}

function front() {
    if (myQueue.length === 0) return "Queue is empty";
    return myQueue[0];
}

function isEmpty() {
    return myQueue.length === 0;
}

function size() {
    return myQueue.length;
}

// Test
enqueue(5);
enqueue(15);
console.log(dequeue());   // 5
console.log(front());     // 15
console.log(isEmpty());   // false
console.log(size());      // 1
