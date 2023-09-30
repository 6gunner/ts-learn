/**
 * 使用邻接表来表示图
 */
class Graph {
  isDirected: boolean;
  vertices: string[];
  // 邻接表
  adjList: Map<string, string[]>;
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }
  /**
   * 添加顶点
   * @param v 
   */
  addVertex(v: string) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }
  /**
   * 添加边
   */
  addEdge(v: string, w: string) {
    const list: string[] = this.adjList.get(v);
    if (!list.includes(w)) {
      list.push(w);
    }
    if (!this.isDirected) {
      const wList = this.adjList.get(w);
      wList.push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    this.vertices.forEach(v => {
      s += `${v} -> `;
      const neighbors = this.adjList.get(v);
      neighbors.forEach(n => {
        s += `${n} `;
      })
      s += `\n`;
    })
    return s;
  }
}

export default Graph