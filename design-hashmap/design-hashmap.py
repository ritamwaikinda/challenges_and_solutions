class ListNode(object):
    def __init__(self, key):
        self.key = key
        self.val = None
        self.next = None

class MyHashMap:
    SIZE = 1000

    def __init__(self):
        self.hashing = [ListNode(-1) for _ in range(self.SIZE)]

    def put(self, key: int, value: int) -> None:
        head = self.hashing[key % self.SIZE]
        current = head.next
        while current:
            if current.key == key: break
            current = current.next
        else:
            current = ListNode(key)
            current.next = head.next
            head.next = current
        current.val = value

    def get(self, key: int) -> int:
        current = self.hashing[key % self.SIZE].next
        while current:
            if current.key == key: break
            current = current.next
        else:
            return -1
        return current.val

    def remove(self, key: int) -> None:
        current = self.hashing[key % self.SIZE]
        while current and current.next:
            if current.next.key == key: break
            current = current.next
        else:
            return None
        current.next = current.next.next