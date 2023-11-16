class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  // обход в глубину
  // 3 types: in order / pre order / post order
  traverseDFS(cb, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, cb);
    }

    if (method === 'inOrder') {
      return this.inOrder(this.root, cb);
    }

    return this.postOrder(this.root, cb);
  }

  // 1. действие с node
  // 2. идем по левому поддереву
  // 3. идем по правому поддереву
  preOrder(node, cb) {
    if (!node) {
      return;
    }

    if (cb) {
      cb(node);
    }

    this.preOrder(node.left, cb);
    this.preOrder(node.right, cb);
  }

  // 1. идем по левому поддереву
  // 2. действие с node
  // 3. идем по правому поддереву
  inOrder(node, cb) {
    if (!node) {
      return;
    }

    this.inOrder(node.left, cb);

    if (cb) {
      cb(node);
    }

    this.inOrder(node.right, cb);
  }

  // 1. идем по левому поддереву
  // 2. идем по правому поддереву
  // 3. действие с node
  postOrder(node, cb) {
    if (!node) {
      return;
    }

    this.postOrder(node.left, cb);
    this.postOrder(node.right, cb);

    if (cb) {
      cb(node);
    }
  }

  // обход в ширину
  traverseBFS(cb) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      cb(node);

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

// пример дерева
//     8
//   6   9
//  5      12
//           20
//        13
//           14
//              16

// пример вывода

// traverseDFS
// preOrder =>    8 6 5 9 12 20 13 14 16
// inOrder =>     5 6 8 9 12 13 14 16 20
// postOrder =>   5 6 16 14 13 20 12 9 8

// traverseBFS
// 8 6 9 5 12 20 13 14 16
