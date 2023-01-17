import {test} from 'tape';
import PriorityQueue from '../index.js';

// create data
const data = [];
for (let i = 0; i < 50; i++) {
    data.push(~~(50 * Math.random()));
}

const sorted = data.slice().sort((a, b) => a - b);

test('maintains a default params PriorityQueue', (t) => {
    const heap = new PriorityQueue();
    for (let i = 0; i < data.length; i++) {
        heap.push(data[i]);
    }

    t.equal(heap.peek(), sorted[0]);

    let ans = [];
    while (!heap.isEmpty()) {
        ans.push(heap.pop());
    }

    t.deepEqual(ans, sorted);
    // console.log(ans);

    t.end();
});

test('get data from constructor', (t) => {
    const heap = new PriorityQueue(data.slice());

    let ans = [];
    while (!heap.isEmpty()) {
        ans.push(heap.pop());
    }

    t.deepEqual(ans, sorted);

    t.end();
});

test('push and pop some elements', (t) => {
    const heap = new PriorityQueue();

    t.same(heap.data, []);
    heap.push(3);
    heap.push(2);
    t.equal(heap.pop(), 2);
    t.equal(heap.pop(), 3);
    t.equal(heap.pop(), undefined);

    t.end();
});
