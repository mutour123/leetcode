# min-max-heap

JavaScript implementations for a MinHeap and MaxHeap.

# Test

```
yarn
yarn test
```

# Installation

```
yarn add min-max-heap
```

# Usage

You can import `MinHeap` and/or `MaxHeap`:
```javascript
import { MinHeap, MaxHeap } from 'min-max-heap';
```

After that, you can initialise a heap and use the `add`, `peek` and `pop` commands to manage its state:

```javascript
// Initialise heap
const heap = new MinHeap();

// Add new value to the heap
heap.add(1);                
heap.add(2);

// Get root value of the heap without removing it
heap.peek() // 2
heap.peek() // 2

// Get root value of the heap and remove it
heap.pop()  // 2
heap.pop()  // 1
```

# Examples

MinHeap example:

```javascript
import { MinHeap } from 'min-max-heap';

const heap = new MinHeap();

heap.add(1);
heap.add(2);
heap.add(3);
heap.add(4);
heap.add(5);

heap.peek() // 5
heap.pop()  // 5
heap.pop()  // 4
heap.peek() // 3
heap.pop()  // 3
```

MaxHeap example:

```javascript
import { MaxHeap } from 'min-max-heap';

const heap = new MinHeap();

heap.add(1);
heap.add(2);
heap.add(3);
heap.add(4);
heap.add(5);

heap.peek() // 1
heap.pop()  // 1
heap.pop()  // 2
heap.peek() // 3
heap.pop()  // 3
```
