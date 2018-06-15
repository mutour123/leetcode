const MaxHeap = require('../src/MaxHeap').default;
const { assert } = require('chai');

describe('max heap', function () {
    it('should show lowest supported number for empty heap', function () {
        const heap = new MaxHeap();

        assert.equal(heap.peek(), 0);
        assert.equal(heap.pop(), 0);
    })  

    it('should peek correctly when adding incremental numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(4);
        heap.add(5);

        assert.equal(heap.peek(), 5);
    })

    it('should pop correctly when adding incremental numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(1);
        heap.add(2);
        heap.add(3);
        heap.add(4);
        heap.add(5);

        assert.equal(heap.pop(), 5);
        assert.equal(heap.pop(), 4);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 1);
    })

    it('should peek correctly when adding decremental numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(5);
        heap.add(4);
        heap.add(3);
        heap.add(2);
        heap.add(1);

        assert.equal(heap.pop(), 5);
        assert.equal(heap.pop(), 4);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 1);
    })

    it('should pop correctly when adding decremental numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(5);
        heap.add(4);
        heap.add(3);
        heap.add(2);
        heap.add(1);

        assert.equal(heap.peek(), 5);
    })

    it('should peek correctly when adding changing numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);

        assert.equal(heap.peek(), 3);
    })

    it('should pop correctly when adding changing numbers', function () {
        const heap = new MaxHeap();
        
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        heap.add(2);
        heap.add(3);
        
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 3);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 2);
        assert.equal(heap.pop(), 2);
    })
});
