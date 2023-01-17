(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.PriorityQueue = factory());
})(this, (function () { 'use strict';

/**
 * @copyright can-dy-jack 2023
 */

/**
 * @class PriorityQueue
 */
var PriorityQueue = function PriorityQueue(
    data,
    compare
) {
    if ( data === void 0 ) data = [];
    if ( compare === void 0 ) compare = function (a, b) {
        return a === b ? 0 : a > b ? 1 : -1;
    };

    this.data = data;
    this.compare = compare;
    this.size = data.length;
    if (this.size > 0) {
        for (var i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            this._up(i);
        }
    }
};

PriorityQueue.prototype.push = function push (val) {
    this.data.push(val);
    this.size++;

    if (this.size === 1) {
        return;
    }

    var idx = this.size - 1;
    while (idx > 0) {
        var parent = Math.floor((idx - 1) / 2);
        var cur = this.data[parent];
        if (this.compare(val, cur) >= 0) {
            break;
        }
        this.data[idx] = cur;
        idx = parent;
    }
    this.data[idx] = val;
};

PriorityQueue.prototype.peek = function peek () {
    return this.data[0];
};

PriorityQueue.prototype.pop = function pop () {
    if (this.isEmpty()) { return undefined; }

    var top = this.data[0];
    this.size--;
    if (this.isEmpty()) {
        return this.data.pop();
    }
    this.data[0] = this.data.pop();
    this._up(0);
    return top;
};

PriorityQueue.prototype._up = function _up (pos) {
    var half = Math.floor(this.size / 2);
    var val = this.data[pos];
    while (pos < half) {
        var more = pos * 2 + 1;
        var right = more + 2;
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
};

PriorityQueue.prototype.isEmpty = function isEmpty () {
    return this.size === 0;
};

return PriorityQueue;

}));
