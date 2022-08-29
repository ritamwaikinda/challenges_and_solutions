/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    let middle = head;
    while(current.next !== null){
        current = current.next
        middle = middle.next
        if(current.next !== null){
            current = current.next
        }
    }  
    return middle
};