// 测试图的基础添加
import Graph from '../../graph/Graph';
import { breadthFirstSearch, bfs } from '../../graph/breadthFirstSearch';
import { depthFirstSearch } from '../../graph/depthFirstSearch';

const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
vertices.forEach(v => {
  graph.addVertex(v);
});
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');

graph.addEdge('B', 'E');
graph.addEdge('B', 'F');

graph.addEdge('C', 'D');
graph.addEdge('C', 'G');

graph.addEdge('D', 'G');
graph.addEdge('D', 'H');

graph.addEdge('E', 'I');
console.log(graph.toString())

test('测试graph-basic', () => {

  expect(graph.vertices.length).toEqual(9);

});

test('测试graph广度优先遍历', () => {

  // const array: string[] = [];
  // breadthFirstSearch(graph, 'A', (e: string) => array.push(e));
  // console.log(array);
  // expect(array).toEqual(vertices);

  const { predecessors, distances } = bfs(graph, 'A');
  console.log(distances);
  expect(distances).toEqual({ A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2, I: 3 });

  // 打印最短路径
  const vertices = graph.getVertices();
  vertices.forEach(vertex => {
    // fixme: 用stack更合理
    const path = [];
    let predecessor = predecessors[vertex];
    if (predecessor != null) {
      path.push(predecessor);
      while (predecessor != 'A') {
        predecessor = predecessors[predecessor];
        path.push(predecessor);
      }
    }
    console.log(`${vertex}-${path.join('-')}`);
  });
});

test('测试graph深度优先遍历', () => {
  const { discoverTime, finishVisitTime } = depthFirstSearch(graph);
  console.log(discoverTime);
  console.log(finishVisitTime);
});

test('DAG 拓扑排序', () => {
  const directedGrap = new Graph(true);
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
  vertices.forEach(v => {
    directedGrap.addVertex(v);
  });
  directedGrap.addEdge('B', 'D');
  directedGrap.addEdge('B', 'E');
  directedGrap.addEdge('A', 'C');
  directedGrap.addEdge('C', 'F');
  directedGrap.addEdge('F', 'E');
  directedGrap.addEdge('A', 'D');

  const { discoverTime, finishVisitTime } = depthFirstSearch(directedGrap);
  console.log(discoverTime);
  console.log(finishVisitTime);

  // 按finishVisitTime从大到小
  const topSortedResult = vertices.sort((a, b) => {
    return finishVisitTime[b] - finishVisitTime[a];
  })
  console.log(`topSortedResult=${topSortedResult}`)
  expect(topSortedResult).toEqual(['B', 'A', 'D', 'C', 'F', 'E'])
})
