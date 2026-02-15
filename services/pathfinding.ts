
/**
 * Pathfinding Algorithms Service
 * Includes A*, Dijkstra, and BFS implementations.
 */

export interface Point {
  r: number;
  c: number;
}

export interface PathfindingResult {
  path: Point[];
  visited: Point[];
}

// Helper to reconstruct path from cameFrom map
const reconstructPath = (cameFrom: Map<string, Point>, current: Point): Point[] => {
  const path: Point[] = [current];
  let temp = current;
  while (cameFrom.has(`${temp.r},${temp.c}`)) {
    temp = cameFrom.get(`${temp.r},${temp.c}`)!;
    path.push(temp);
  }
  return path.reverse();
};

// Helper for getting neighbors
const getNeighbors = (grid: number[][], node: Point, allowDiagonals: boolean): Point[] => {
  const rows = grid.length;
  const cols = grid[0].length;
  const neighbors: Point[] = [];
  const directions = [
    { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 0, c: -1 }, { r: -1, c: 0 }
  ];
  if (allowDiagonals) {
    directions.push({ r: 1, c: 1 }, { r: 1, c: -1 }, { r: -1, c: 1 }, { r: -1, c: -1 });
  }

  for (const dir of directions) {
    const nr = node.r + dir.r;
    const nc = node.c + dir.c;
    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== 1) {
      neighbors.push({ r: nr, c: nc });
    }
  }
  return neighbors;
};

// 1. A* Search
export const findAStarPath = (
  grid: number[][],
  start: Point,
  end: Point,
  allowDiagonals: boolean = false
): PathfindingResult => {
  const heuristic = (a: Point, b: Point) => Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
  
  const openSet: Point[] = [start];
  const cameFrom: Map<string, Point> = new Map();
  const gScore: Map<string, number> = new Map();
  const fScore: Map<string, number> = new Map();
  const visited: Point[] = [];

  gScore.set(`${start.r},${start.c}`, 0);
  fScore.set(`${start.r},${start.c}`, heuristic(start, end));

  while (openSet.length > 0) {
    let currentIdx = 0;
    for (let i = 1; i < openSet.length; i++) {
      const currentF = fScore.get(`${openSet[i].r},${openSet[i].c}`) ?? Infinity;
      const bestF = fScore.get(`${openSet[currentIdx].r},${openSet[currentIdx].c}`) ?? Infinity;
      if (currentF < bestF) currentIdx = i;
    }

    const current = openSet[currentIdx];
    if (current.r === end.r && current.c === end.c) {
      return { path: reconstructPath(cameFrom, current), visited };
    }

    openSet.splice(currentIdx, 1);
    visited.push(current);

    const neighbors = getNeighbors(grid, current, allowDiagonals);
    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.r},${neighbor.c}`;
      const tentativeGScore = (gScore.get(`${current.r},${current.c}`) ?? Infinity) + 1;

      if (tentativeGScore < (gScore.get(neighborKey) ?? Infinity)) {
        cameFrom.set(neighborKey, current);
        gScore.set(neighborKey, tentativeGScore);
        fScore.set(neighborKey, tentativeGScore + heuristic(neighbor, end));
        if (!openSet.some(p => p.r === neighbor.r && p.c === neighbor.c)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return { path: [], visited };
};

// 2. Dijkstra's Algorithm (A* without heuristic)
export const findDijkstraPath = (
  grid: number[][],
  start: Point,
  end: Point,
  allowDiagonals: boolean = false
): PathfindingResult => {
  const openSet: Point[] = [start];
  const cameFrom: Map<string, Point> = new Map();
  const dist: Map<string, number> = new Map();
  const visited: Point[] = [];

  dist.set(`${start.r},${start.c}`, 0);

  while (openSet.length > 0) {
    // Dijkstra picks node with smallest distance
    openSet.sort((a, b) => (dist.get(`${a.r},${a.c}`) ?? Infinity) - (dist.get(`${b.r},${b.c}`) ?? Infinity));
    const current = openSet.shift()!;

    visited.push(current);
    if (current.r === end.r && current.c === end.c) {
      return { path: reconstructPath(cameFrom, current), visited };
    }

    const neighbors = getNeighbors(grid, current, allowDiagonals);
    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.r},${neighbor.c}`;
      const newDist = (dist.get(`${current.r},${current.c}`) ?? Infinity) + 1;

      if (newDist < (dist.get(neighborKey) ?? Infinity)) {
        dist.set(neighborKey, newDist);
        cameFrom.set(neighborKey, current);
        if (!openSet.some(p => p.r === neighbor.r && p.c === neighbor.c)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return { path: [], visited };
};

// 3. Breadth-First Search (BFS)
export const findBfsPath = (
  grid: number[][],
  start: Point,
  end: Point,
  allowDiagonals: boolean = false
): PathfindingResult => {
  const queue: Point[] = [start];
  const cameFrom: Map<string, Point> = new Map();
  const visited: Point[] = [];
  const visitedSet: Set<string> = new Set();

  visitedSet.add(`${start.r},${start.c}`);

  while (queue.length > 0) {
    const current = queue.shift()!;
    visited.push(current);

    if (current.r === end.r && current.c === end.c) {
      return { path: reconstructPath(cameFrom, current), visited };
    }

    const neighbors = getNeighbors(grid, current, allowDiagonals);
    for (const neighbor of neighbors) {
      const key = `${neighbor.r},${neighbor.c}`;
      if (!visitedSet.has(key)) {
        visitedSet.add(key);
        cameFrom.set(key, current);
        queue.push(neighbor);
      }
    }
  }
  return { path: [], visited };
};
