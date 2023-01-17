import PriorityQueue from '../index.js';

const NUM = 1e5;

const data = [];
for (let i = 0; i < NUM; i++) {
    data.push({
        value: Math.random()
    });
}

const heap = new PriorityQueue(data, (a, b) => a.value - b.value);

console.time(`push ${NUM}`);
for (let i = 0; i < NUM; i++) {
    heap.push(data[i]);
}
console.timeEnd(`push ${NUM}`); // push 100000: 47.846ms

console.time(`pop ${NUM}`);
for (let i = 0; i < NUM; i++) {
    heap.pop();
}
console.timeEnd(`pop ${NUM}`); // pop 100000: 153.495ms
