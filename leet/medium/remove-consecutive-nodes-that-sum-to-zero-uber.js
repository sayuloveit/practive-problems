// Given a linked list of integers, remove all consecutive nodes that sum up to 0.

// Example:
// Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
// Output: 10

// The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.

// keep prev, cur node (for to link when sums to 0 are removed)
// iterate through list , update prev and cur, current sum
// if a added cur node node makes sum 0 -> remove section, reset sum
// attached prev.next to cur.next, update cur to attached node (cur.next), keep prev same
// updated changed flag to true
// repeat until one iteration to end of list with no changes 

function removeConsecutiveSumTo0(head) {
    while (head && head.val === 0) {
        head = head.next;
    }

    var start = head;
    var end;

    // outer loop iterate for each node
    while (start) {
        var prev = null;
        var end = head;
        var isModified = false;

        var sum = 0;

        // inner loop to check from start node till end of linked list
        while (end) {
            sum += end.val;
            if (sum === 0) {
                prev.next = end.next;
                isModified = true;
                break;
            }

            end = end.next;
        }

        prev = head;
        head = head.next;
    }
}

function Node(val) {
    this.val = val;
    this.next = null;
}

var head = new Node(10);
var link1 = new Node(5);
var link2 = new Node(-3);
var link3 = new Node(-3);
var link4 = new Node(1);
var link5 = new Node(4);
var link6 = new Node(-4);

head.next = link1;
link1.next = link2;
link2.next = link3;
link3.next = link4;
link4.next = link5;
link5.next = link6;

console.log(JSON.stringify(removeConsecutiveSumTo0(head)));