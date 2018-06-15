const MinHeap = require('../src/MinHeap').default;
const { assert } = require('chai');

describe('min heap', function () {
    it('should show highest supported number for empty heap', function () {
        const heap = new MinHeap();

        assert.equal(heap.peek(), Number.MAX_SAFE_INTEGER);
        assert.equal(heap.pop(), Number.MAX_SAFE_INTEGER);
    })  

    it('should peek correctly when adding incremental numbers', function () {
        const heap = new MinHeap();
        
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(4);
        heap.add(5);

        assert.equal(heap.peek(), 1);
    })

    it('should pop correctly when adding incremental numbers', function () {
        const heap = new MinHeap();
        
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(4);
        heap.add(5);

        assert.equal(heap.pop(), 1);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 4);
        assert.equal(heap.pop(), 5);
    })

    it('should peek correctly when adding decremental numbers', function () {
        const heap = new MinHeap();
        
        heap.add(5);
        heap.add(4);
        heap.add(3);
        heap.add(2);
        heap.add(1);

        assert.equal(heap.pop(), 1);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 4);
        assert.equal(heap.pop(), 5);
    })

    it('should pop correctly when adding decremental numbers', function () {
        const heap = new MinHeap();
        
        heap.add(5);
        heap.add(4);
        heap.add(3);
        heap.add(2);
        heap.add(1);

        assert.equal(heap.peek(), 1);
    })

    it('should peek correctly when adding changing numbers', function () {
        const heap = new MinHeap();
        
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);

        assert.equal(heap.peek(), 2);
    })

    it('should pop correctly when adding changing numbers', function () {
        const heap = new MinHeap();
        
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 3);
    })
});

