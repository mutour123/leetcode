const EMPTY_NODE = {
    left: null,
    right: null,
    parent: null,
    value: null
};

class AbstractHeap {
    constructor(comparator = (a, b) => a < b) {
        this.root = { ...EMPTY_NODE };
        this.comparator = comparator;
        this._searchQueue = [];
    }

    add(value) {
        const emptyNode = this._findEmptyNode();
        const filledNode = this._addValueToNode(value, emptyNode);
        this._rebalanceBottomUpFromNode(filledNode);
    }

    peek() {
        return this._isHeapEmpty()
            ? this._getEmptyHeapValue()
            : this.root.value;
    }

    pop() {
        if (this._isHeapEmpty()) {
            return this._getEmptyHeapValue();
        }

        const minValue = this.root.value;
        this.root.value = null;
        this._rebalanceTopDown();
        return minValue;
    }

    _findEmptyNode() {
        const emptyNode = this._findEmptyNodeRecursively(this.root);
        this._searchQueue = [];
        return emptyNode;
    }

    _findEmptyNodeRecursively(node) {
        if (node.value === null) {
            return node;
        }

        this._searchQueue.push(node.left, node.right);
        return this._findEmptyNodeRecursively(this._searchQueue.shift());
    }

    _rebalanceBottomUpFromNode(node) {
        let currentNode = node;
        while (currentNode.parent && this.comparator(currentNode.value, currentNode.parent.value)) {
            this._swapNodeValues(currentNode, currentNode.parent);
            currentNode = currentNode.parent;
        }
    }

    _rebalanceTopDown() {
        let currentNode = this.root;
        while (currentNode.left.value || currentNode.right.value) {
            const smallestChildNode = this._getSmallestOfTwoNodes(currentNode.left, currentNode.right);
            this._swapNodeValues(currentNode, smallestChildNode);
            currentNode = smallestChildNode;
        }
    }

    _getSmallestOfTwoNodes(nodeA, nodeB) {
        if (!nodeA.value) {
            return nodeB;
        }

        if (!nodeB.value) {
            return nodeA;
        }

        return this.comparator(nodeA.value, nodeB.value)
            ? nodeA
            : nodeB;
    }

    _isHeapEmpty() {
        return this.root.value === null;
    }

    _getEmptyHeapValue() {
        return this.comparator(0, Number.MAX_SAFE_INTEGER)
            ? Number.MAX_SAFE_INTEGER
            : 0;
    }

    _addValueToNode(value, node) {
        node.left = { ...EMPTY_NODE, parent: node };
        node.right = { ...EMPTY_NODE, parent: node };
        node.value = value;
        return node;
    }

    _swapNodeValues(nodeA, nodeB) {
        const tmpValue = nodeA.value;
        nodeA.value = nodeB.value;
        nodeB.value = tmpValue;
    }
}

exports.default = AbstractHeap;
