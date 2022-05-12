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
const hasCycle = function(head) {
 if (!head) return false;

  let hare = head;
  let tortoise = head;

  while(hare) {
    if (!hare.next) return false;
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) return true;
  }
  
  return false;
};