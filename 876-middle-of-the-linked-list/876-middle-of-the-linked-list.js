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
    while(current !== null && current.next !== null){
        current = current.next.next
        middle = middle.next
        // if(current.next !== null){
        //     current = current.next
        // }
    }  
    
    /*
    You can land on a null value. You wont be able to go any further, but you can LAND on it.
    while (current != null (if you land on a null, it can't read current.next) && current.next !== null)
    
    
    */
    
    return middle
};