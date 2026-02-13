
/**
 * A* Pathfinding Service
 * Optimized for grid-based navigation with Manhattan heuristic.
 */

export interface Point {
  r: number;
  c: number;
}

export interface PathfindingResult {
  path: Point[];
  visited: Point[];
}

export const findPath = (
  grid: number[][],
  start: Point,
  end: Point,
  allowDiagonals: boolean = false
): PathfindingResult => {
  const rows = grid.length;
  const cols = grid[0].length;

  const heuristic = (a: Point, b: Point) => {
    return Math.abs(a.r - b.r) + Math.abs(a.c - b.c);
  };

  const openSet: Point[] = [start];
  const cameFrom: Map<string, Point> = new Map();

  const gScore: Map<string, number> = new Map();
  gScore.set(`${start.r},${start.c}`, 0);

  const fScore: Map<string, number> = new Map();
  fScore.set(`${start.r},${start.c}`, heuristic(start, end));

  const visited: Point[] = [];

  while (openSet.length > 0) {
    // Get node with lowest fScore
    let currentIdx = 0;
    for (let i = 1; i < openSet.length; i++) {
      const currentF = fScore.get(`${openSet[i].r},${openSet[i].c}`) ?? Infinity;
      const bestF = fScore.get(`${openSet[currentIdx].r},${openSet[currentIdx].c}`) ?? Infinity;
      if (currentF < bestF) {
        currentIdx = i;
      }
    }

    const current = openSet[currentIdx];

    if (current.r === end.r && current.c === end.c) {
      // Reconstruct path
      const path: Point[] = [];
      let temp = current;
      while (cameFrom.has(`${temp.r},${temp.c}`)) {
        path.push(temp);
        temp = cameFrom.get(`${temp.r},${temp.c}`)!;
      }
      path.push(start);
      return { path: path.reverse(), visited };
    }

    openSet.splice(currentIdx, 1);
    visited.push(current);

    // Neighbors
    const neighbors: Point[] = [];
    const directions = [
      { r: 0, c: 1 }, { r: 1, c: 0 }, { r: 0, c: -1 }, { r: -1, c: 0 }
    ];
    if (allowDiagonals) {
      directions.push({ r: 1, c: 1 }, { r: 1, c: -1 }, { r: -1, c: 1 }, { r: -1, c: -1 });
    }

    for (const dir of directions) {
      const nr = current.r + dir.r;
      const nc = current.c + dir.c;

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] !== 1) {
        neighbors.push({ r: nr, c: nc });
      }
    }

    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor.r},${neighbor.c}`;
      const tentativeGScore = (gScore.get(`${current.r},${current.c}`) ?? Infinity) + 1;

      if (tentativeGScore < (gScore.get(neighborKey) ?? Infinity)) {
        cameFrom.set(neighborKey, current);
        gScore.set(neighborKey, tentativeGScore);
        fScore.set(neighborKey, tentativeGScore + heuristic(neighbor, end));

        if (!openSet.find(p => p.r === neighbor.r && p.c === neighbor.c)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return { path: [], visited };
};
