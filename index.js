/**
 * @copyright can-dy-jack 2023
 */

/**
 * @class PriorityQueue
 */
export default class PriorityQueue {
    constructor(
        data = [],
        compare = function (a, b) {
            return a === b ? 0 : a > b ? 1 : -1;
        }
    ) {
        this.data = data;
        this.compare = compare;
        this.size = data.length;
        if (this.size > 0) {
            for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
                this._up(i);
            }
        }
    }

    push(val) {
        this.data.push(val);
        this.size++;

        if (this.size === 1) {
            return;
        }

        let idx = this.size - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            let cur = this.data[parent];
            if (this.compare(val, cur) >= 0) {
                break;
            }
            this.data[idx] = cur;
            idx = parent;
        }
        this.data[idx] = val;
    }

    peek() {
        return this.data[0];
    }

    pop() {
        if (this.isEmpty()) return undefined;

        const top = this.data[0];
        this.size--;
        if (this.isEmpty()) {
            return this.data.pop();
        }
        this.data[0] = this.data.pop();
        this._up(0);
        return top;
    }

    _up(pos) {
        let half = Math.floor(this.size / 2);
        let val = this.data[pos];
        while (pos < half) {
            let more = pos * 2 + 1;
            let right = more + 2;
            if (right < this.size && this.compare(this.data[right], this.data[more]) < 0) {
                more = right;
            }
            if (this.compare(this.data[more], val) >= 0) {
                break;
            }
            this.data[pos] = this.data[more];
            pos = more;
        }
        this.data[pos] = val;
    }

    isEmpty() {
        return this.size === 0;
    }
}
