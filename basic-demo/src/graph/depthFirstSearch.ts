import Graph from "./Graph";
import { Colors } from "./constants";

const initializeColors = vertices => {
  const colors = {};
  vertices.forEach(vertex => {
    colors[vertex] = Colors.WHITE;
  });
  return colors;
}
type DFSResult = {
  discoverTime: {},
  finishVisitTime: {}
}
/**
 * 深度遍历图
 * @param graph 
 */
export function depthFirstSearch(graph: Graph): DFSResult {

  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColors(vertices);

  const discoverTime = {};
  const finishVisitTime = {};
  const time = { count: 0 }

  vertices.forEach(vertex => {
    finishVisitTime[vertex] = 0;
    discoverTime[vertex] = 0;
  });

  for (let i = 0; i < vertices.length; i++) {
    let vertex = vertices[i];
    if (colors[vertex] == Colors.WHITE) {
      dfsVisit(vertex, colors, discoverTime, finishVisitTime, time, adjList);
    }
  }
  return {
    discoverTime,
    finishVisitTime
  }
}


function dfsVisit(vertex: string, colors: {}, discoverTime: {}, finishVisitTime: {},
  time: { count: number }, adjList: Map<string, string[]>) {

  // 标记已经访问过
  colors[vertex] = Colors.GREY;
  discoverTime[vertex] = ++time.count
  const neighborhoods = adjList.get(vertex);
  neighborhoods.forEach(w => {
    if (colors[w] == Colors.WHITE) {
      dfsVisit(w, colors, discoverTime, finishVisitTime, time, adjList);
    }
  });
  colors[vertex] = Colors.BLACK;
  finishVisitTime[vertex] = ++time.count
}

