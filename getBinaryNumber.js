function generateBinaryNumbers(N) {
    let result = [];
    let queue = [];

    queue.push("1");

    for (let i = 0; i < N; i++) {
        let curr = queue.shift();
        result.push(curr);

        queue.push(curr + "0");
        queue.push(curr + "1");
    }

    return result;
}

console.log(generateBinaryNumbers(5)); // ['1', '10', '11', '100', '101']