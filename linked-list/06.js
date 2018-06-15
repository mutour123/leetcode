/**
 * 给定一个链表，判断链表中是否有环。
 * 进阶：
 * 你能否不使用额外空间解决此题？
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let first = head
    let second = head
   
    while(first && first.next && second.next && second.next.next){
        first = first.next 
        second = second.next.next
        if(second === first){
            return true
        }
    }
    return false
};
