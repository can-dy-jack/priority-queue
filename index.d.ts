export default class PriorityQueue<T> {
    public data: T[];
    public size: number;
    constructor(
        data?: T[],
        compare?: (a: T, b: T) => number
    );
    push(val: T) : void;
    peek() : T | undefined;
    pop() : T | undefined;
    isEmpty() : boolean;
}