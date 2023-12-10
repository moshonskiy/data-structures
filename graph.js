class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(id, value) {
    this.nodes[id] = value;
  }

  addEdge(startNode, endNode) {
    if (!this.nodes[startNode] || !this.nodes[endNode]) {
      throw new Error('Start or end node does not exist');
    }

    if (this.edges[startNode] && !this.edges[startNode].has(endNode)) {
      this.edges[startNode].add(endNode);
    } else {
      this.edges[startNode] = new Set([endNode]);
    }
  }

  hasEdge(startNode, endNode) {
    if (!this.edges[startNode]) {
      return false;
    }

    return this.edges[startNode].has(endNode);
  }

  getAllEdges(node) {
    return this.edges[node];
  }

  removeNode(nodeId) {
    this.nodes[nodeId] = undefined;
    Reflect.deleteProperty(this.edges, nodeId);

    for (const edgeId in this.edges) {
      this.edges[edgeId].delete(nodeId);
    }
  }

  removeEdge(startNode, endNode) {
    if (!this.edges[startNode] || !this.edges[startNode].has(endNode)) {
      throw new Error('Edge does not exist');
    }

    this.edges[startNode].delete(endNode);
  }
}

