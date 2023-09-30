import Stack from "../../stack/Stack";
import Queue from "../../queue/Queue";

function openLock(deadends: string[], target: string): number {

  // 将问题转化为一个图的bfs遍历问题
  const startVetex = "0000";
  // 已经访问过的顶点 
  const visited: Set<string> = new Set();
  const queue: Queue<string> = new Queue();
  queue.enqueue(startVetex);

  deadends.forEach(item => {
    visited.add(item);
  })
  let { predecessors } = bftVisit(queue, visited, target);

  const path = new Stack();
  let t = target;
  while (t != '0000') {
    path.push(t);
    t = predecessors[t];
  }
  path.push('0000');
  let s = path.pop();
  let depth = 0;
  while (!path.imEmpty()) {
    s += `-> ${path.pop()}`
    depth++;
  }
  console.log(s);

  return depth;
};

/**
 * 
 * @param queue 
 * @param visited 
 * @param target 
 * @returns 
 */
function bftVisit(queue: Queue<string>, visited: Set<string>, target: string) {
  // 上一级

  const predecessors = {}
  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    if (vertex == target) {
      break;
    }
    // 相当于是遍历顶点的边，然后push到队列里，每个顶点有8个边
    for (let i = 0; i < 4; i++) {
      // 向上滚动
      let vetex1 = minusVetex(vertex, i);
      if (!visited.has(vetex1)) {
        predecessors[vetex1] = vertex;
        queue.enqueue(vetex1);
        visited.add(vetex1);
      }
      // 向下滚动
      let vetex2 = addVetex(vertex, i);
      if (!visited.has(vetex2)) {
        predecessors[vetex2] = vertex;
        queue.enqueue(vetex2);
        visited.add(vetex2);
      }
    }
    visited.add(vertex);
  }
  return { predecessors }
}

function replaceAt(string: string, index: number, replace: any) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

/**
 * 向下滑动一块
 */
function minusVetex(vetex: string, index: number) {
  let num = Number.parseInt(vetex.charAt(index));
  if (num == 0) {
    return replaceAt(vetex, index, '9');
  } else {
    let newNum = num - 1;
    return replaceAt(vetex, index, newNum);
  }
}

/**
 * 向上滑动一块
 */
function addVetex(vetex: string, index: number) {
  let num = Number.parseInt(vetex.charAt(index));
  if (num == 9) {
    return replaceAt(vetex, index, '0');
  } else {
    let newNum = num + 1;
    return replaceAt(vetex, index, newNum);
  }
}
export default openLock;