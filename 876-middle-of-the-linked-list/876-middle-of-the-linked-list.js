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
    let start = 0;
    let current = head;
    let middle = head;
    while(current.next !== null){
        start += 1
        current = current.next
    }
    
    for(let i=0; i<Math.ceil(start/2); i++){
        middle = middle.next;
    }
    
    return middle
};