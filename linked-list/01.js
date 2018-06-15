/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾的）节点，您将只被给予要求被删除的节点。
 * 比如：假设该链表为 1 -> 2 -> 3 -> 4  ，给定您的为该链表中值为 3 的第三个节点，
 * 那么在调用了您的函数之后，该链表则应变成 1 -> 2 -> 4 。
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */



class ListNode{
    constructor(val){
        this.val = val
        this.last = null
    }
}

class linkedList {
    constructor(){
        this.length = 0
        this.last = null
    }
    addNode(val){
        let node = new ListNode(val)
        this.last = node
    }
}



/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let temp = node.next
    node.val = temp.val
    node.next = temp.next
};
/**
 * 该题只给了链表中的一个节点， 也就是说只有后继， 没有前驱
 * 那么要怎样删除该点呢？
 * 
 * 巧妙的地方就是这里， 我们可以用后面的节点把该节点覆盖， 然后删除后面的那一个节点就好
 * 
 */