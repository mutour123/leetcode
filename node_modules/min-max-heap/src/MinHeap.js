const AbstractHeap = require('./AbstractHeap').default;

class MinHeap extends AbstractHeap {
    constructor() {
        super((a, b) => a < b);
    }
}

exports.default = MinHeap;
