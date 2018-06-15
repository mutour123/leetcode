const AbstractHeap = require('./AbstractHeap').default;

class MaxHeap extends AbstractHeap {
    constructor() {
        super((a, b) => a > b);
    }
}

exports.default = MaxHeap;
