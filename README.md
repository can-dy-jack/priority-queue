# priority-queue ![npm version](https://img.shields.io/npm/v/@kartjim/priority-queue?style=flat-square) ![Node.js CI](https://github.com/can-dy-jack/priority-queue/actions/workflows/test.yml/badge.svg)
> Priority queue(优先队列) implementation in JavaScript

## install
```sh
npm i @kartjim/priority-queue
```

## import
```js
import PriorityQueue from '@kartjim/priority-queue';
```

or use CDN:
```js
<script src="https://cdn.jsdelivr.net/npm/@kartjim/priority-queue@1.0.2/priorityqueue.min.js"></script>
```

## use
```js
const data = [];
for (let i = 0; i < 50; i++) {
    data.push(~~(50 * Math.random()));
}

const sorted = data.slice().sort((a, b) => a - b);

const heap = new PriorityQueue();
for (let i = 0; i < data.length; i++) {
    heap.push(data[i]);
}

heap.peek() === sorted[0] // true

let ans = [];
while (!heap.isEmpty()) {
    ans.push(heap.pop());
}

ans == sorted // deeply equal
```


## API
- constructor
  - `constructor(data?: T[],compare?: (a: T, b: T) => number);`
- `push(val: T) : void;`
  - push an element into PriorityQueue
- `peek() : T | undefined;`
  - get the top element
- `pop() : T | undefined;`
  - pop an element, and return it
- `isEmpty() : boolean;`
  - check if the PriorityQueue is empty

