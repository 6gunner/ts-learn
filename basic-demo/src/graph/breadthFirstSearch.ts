import Graph from "./Graph"
import Queue from "../queue/Queue"
import { Colors } from "./constants";
const initializeColors = vertices => {
  const colors = {};
  vertices.forEach(vertex => {
    colors[vertex] = Colors.WHITE;
  });
  return colors;
}
export const breadthFirstSearch = (graph: Graph, startVertex: string, callback: Function) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColors(vertices);
  const queue = new Queue<string>();
  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    colors[u] = Colors.GREY;
    const neighbors = adjList.get(u);
    neighbors.forEach(vertex => {
      // 如果没有访问过这个顶点，那么就入队列; 
      if (colors[vertex] == Colors.WHITE) {
        colors[vertex] = Colors.GREY;
        queue.enqueue(vertex)
      }
      // 否则不做处理
    })
    colors[u] = Colors.BLACK;

    if (callback) {
      callback(u);
    }
  }
}

/**
 * 计算graph里每一个顶点到startVertex的距离，最短路径
 * 
 * @param graph 
 * @param startVertex 
 */
export type BFSResult = {
  distances: object,
  predecessors: object
}
export function bfs(graph: Graph, startVertex: string): BFSResult {
  const distances = {};
  const predecessors = {}
  const vertices = graph.getVertices();
  vertices.forEach(vertex => {
    distances[vertex] = 0;
    predecessors[vertex] = null;
  });
  const adjList = graph.getAdjList();
  const colors = initializeColors(vertices);
  const queue = new Queue<string>();
  // 
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    colors[u] = Colors.GREY;
    const neighbors = adjList.get(u);
    neighbors.forEach((vertex) => {
      // 如果没有访问过这个顶点，那么就入队列; 
      if (colors[vertex] == Colors.WHITE) {
        colors[vertex] = Colors.GREY;
        distances[vertex] = distances[u] + 1;
        predecessors[vertex] = u;
        queue.enqueue(vertex)
      }
      // 否则不做处理
    })
    colors[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors
  }

}