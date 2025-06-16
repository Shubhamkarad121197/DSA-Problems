function generateBinaryNumbers(n) {
  let queue = [];
  queue.push("1");

  for (let i = 0; i < n; i++) {
    let front = queue.shift();
    console.log(front);

    queue.push(front + "0");
    queue.push(front + "1");
  }
}

// Test
generateBinaryNumbers(5);
