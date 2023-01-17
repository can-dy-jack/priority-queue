# priority-queue
> Priority queue(优先队列) implementation in JavaScript

> 学习项目，参考自：[mourner/tinyqueue](https://github.com/mourner/tinyqueue)

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

