// You are given a singly linked list and an integer k. 
// Return the linked list, removing the k-th last element from the list. 

// remove -> prev.next = cur.next where cur is kth from last element
// advance a pointer k node into list
// theh start advancing fornt pointer and one pointer from head of list
// when front pointer hits the end of list, advance cur, set prev.next = cur.next


function removeKthFromLinkedList(head, k) {
    var vangard = head;

    for (var i = 0; i < k; i++) {
        vangard = vangard.next;
    }

    // if to be deleted element is head aka k is length of list
    if (vangard === null) {
        return head.next;
    }

    var prev = null;
    var cur = head;

    while (vangard) {
        vangard = vangard.next;
        prev = cur;
        cur = cur.next;

        // reached end
        if (vangard === null) {
            // delete
            prev.next = cur.next;
        }
        
    }

    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// var head = new ListNode(1);
// var link1 = new ListNode(2);
// var link2 = new ListNode(3);
// var link3 = new ListNode(4);
// var link4 = new ListNode(5);

// head.next = link1;
// link1.next = link2;
// link2.next = link3;
// link3.next = link4;

// console.log(JSON.stringify(removeKthFromLinkedList(head, 3)));

var head = new ListNode(1);
var link1 = new ListNode(2);

head.next = link1;
console.log(JSON.stringify(removeKthFromLinkedList(head, 2)));