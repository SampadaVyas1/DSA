class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function preOrderTraversal() {
  let result = [];
  function traverse() {
    if (node) {
      result.push(node.data);
      result = result.left;
    }
  }
  traverse(node);
  return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
preOrderTraversal(root);
