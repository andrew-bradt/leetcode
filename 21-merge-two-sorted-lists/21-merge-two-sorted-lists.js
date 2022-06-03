/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list2 && list1) return list1;
  if (!list1 && list2) return list2;
  let mergedHead;

  if (list1.val <= list2.val) {
    mergedHead = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    mergedHead = new ListNode(list2.val);
    list2 = list2.next;
  }

  let mergedPointer = mergedHead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      mergedPointer.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      mergedPointer.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    mergedPointer = mergedPointer.next;
  }
  
  while (list1) {
    mergedPointer.next = new ListNode(list1.val);
    list1 = list1.next;
    mergedPointer = mergedPointer.next;
  }

  while (list2) {
    mergedPointer.next = new ListNode(list2.val);
    list2 = list2.next;
    mergedPointer = mergedPointer.next;
  }

  return mergedHead;
};