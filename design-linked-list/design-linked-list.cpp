class MyLinkedList {
    int size;
    ListNode* head;
public:
    /** Initialize your data structure here. */
    MyLinkedList() {
        size = 0;
        head = new ListNode(0);
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    int get(int index) {
        if(index < 0 || index > size) return -1;
        ListNode* curr = head;
        for(int i=0;i<index+1;i++) curr = curr->next;
        return curr ? curr->val : -1;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    void addAtHead(int val) {
        addAtIndex(0, val);
    }
    
    /** Append a node of value val to the last element of the linked list. */
    void addAtTail(int val) {
        addAtIndex(size, val);
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    void addAtIndex(int index, int val) {
        if(index > size) return;
        if(index < 0) index = 0;
        ++size;
        
        ListNode* pred = head;
        for(int i=0;i<index; i++) pred = pred->next;
        
        ListNode* newNode = new ListNode(val);
        newNode->next = pred->next;
        pred->next = newNode;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    void deleteAtIndex(int index) {
        if(index >= size || index < 0) return;
        --size;
        ListNode* pred = head;
        for(int i=0;i<index;i++) pred = pred->next;
        
        ListNode* del = pred->next;
        pred->next = del->next;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */