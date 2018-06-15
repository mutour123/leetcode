/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2//当其中一个链表为空，直接返回另一个链表
    if(!l2) return l1
    //如果两个链表都不为空， 得到head
    let head = null
    let other = null
    let temp = null
    
    if(l1.val <= l2.val){
        head = l1
        other = l2
    }else{
       head = l2
       other = l1
    }
    let current = head//将当前操作节点指向head

    while(current.next && other){  
        if(current.next.val <= other.val){
            current = current.next
        }else{
              temp = current.next
            current.next = other
            current = current.next
            other = temp
        }  
    }
    if(!current.next){
        current.next = other
    }
    return head

};

