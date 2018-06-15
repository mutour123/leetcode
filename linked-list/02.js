/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 说明：
 * 给定的 n 保证是有效的。
 * 进阶：
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {//使用后继的方式处理， 当是最后一个元素时使用前驱的方式处理， 当只有一个元素且n为1时特殊处理返回null
    let first = head
    let head1 = head
    let second = null
    let len = 0
    while(head1.next){
        len++
        head1 = head1.next
    }
    len++
    if(n > len || (n ===1&&len ==1) ){//如果n大于链表长度， 就返回null
        return null
    }
   
    if(n == 1){//删除最后一个节点, 使用前驱删除
        first = first.next
        second = head
        while(first.next){
            first = first.next
            second = second.next
        }
        second.next = null
    }else{
        //不是删除最后一个节点， 使用后继删除法
        for(let i = 1; i < n; i++){
            first = first.next
        }
        second = head

        while(first.next){
            first = first.next
            second = second.next
        }
        if(second.next){//如果是最后一个就删除节点本身，不需要后继， 不是就删除后继节点
            second.val = second.next.val
            second.next = second.next.next
        }
        
    }
    return head
   
};

/**
 * 以上方法使用后继删除的方式比较复杂，如下说明
 * 
 * 该题目有几个问题存在？
 * 如果使用后继删除的方式， 如果是最后一个元素， 删除本身， 需要使用前驱删除的特殊处理方式， 如果元素以后一个， n为一个， 返回null, 
 * 
 * 如果使用前驱的方式删除， 只有当n为1， len为1, 和当为最前面一个
 * 
 * 
 * 以下方法使用前驱删除法
 * 
 */



var removeNthFromEnd = function(head, n){
    let first = head
    let head1 = head
    let len = 0
    let second = null
    let front = null

    while(head1.next){
        len ++
        head1 = head1.next
    }
    len ++

    if((len === 1 && n === 1) ||len < n){
        return null
    }
    //如果是第一个元素， 
    if(n == len){
        head = head.next
    }else{//是最后一个，可以使直接使用前驱处理 
        for(let i = 1; i < n ; i++){
            first = first.next
        }
        second = head
        front = head
        while (first.next) {
            first = first.next
            front = second
            second = second.next
        }

        if(second.next){
            front.next = second.next
        }else{
            front.next = null
        }
    }
    return head
 }
 
 