import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Play, RefreshCw, Info, Activity, Eraser } from 'lucide-react';
import { findAStarPath, findDijkstraPath, findBfsPath, Point, PathfindingResult } from '../services/pathfinding';

type Algorithm = 'A*' | 'Dijkstra' | 'BFS';

// New Cell Types for multiple algorithms
const CELL_TYPE = {
  EMPTY: 0,
  WALL: 1,
  START: 2,
  END: 3,
  A_STAR_PATH: 4,
  A_STAR_VISITED: 5,
  DIJKSTRA_PATH: 6,
  DIJKSTRA_VISITED: 7,
  BFS_PATH: 8,
  BFS_VISITED: 9,
};

const ALGO_DETAILS = {
  'A*': {
    name: "A* Search",
    description: "A smart, heuristic-based algorithm that finds the shortest path by estimating the distance to the goal. It's efficient and optimal.",
    pathType: CELL_TYPE.A_STAR_PATH,
    visitedType: CELL_TYPE.A_STAR_VISITED,
    color: 'cyan',
    complexity: 'O(E log V)',
    find: findAStarPath,
  },
  'Dijkstra': {
    name: "Dijkstra's Algorithm",
    description: "Explores outwards from the start node, guaranteeing the shortest path but visiting more nodes than A* as it has no sense of direction.",
    pathType: CELL_TYPE.DIJKSTRA_PATH,
    visitedType: CELL_TYPE.DIJKSTRA_VISITED,
    color: 'amber',
    complexity: 'O(E log V)',
    find: findDijkstraPath,
  },
  'BFS': {
    name: "Breadth-First Search",
    description: "Explores all neighbors at the present depth prior to moving on to nodes at the next depth level. Unweighted and exhaustive.",
    pathType: CELL_TYPE.BFS_PATH,
    visitedType: CELL_TYPE.BFS_VISITED,
    color: 'violet',
    complexity: 'O(V + E)',
    find: findBfsPath,
  },
};

const Games: React.FC = () => {
  const [gridSize, setGridSize] = useState(21);
  const [grid, setGrid] = useState<number[][]>([]); 
  const [isSimulating, setIsSimulating] = useState(false);
  const [allowDiagonals, setAllowDiagonals] = useState(true);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm>('A*');

  useEffect(() => {
    const handleResize = () => {
      setGridSize(window.innerWidth < 640 ? 15 : 21);
    };
    
    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize START and END to prevent re-creation on every render
  const START = React.useMemo(() => ({ r: 1, c: 1 }), []);
  const END = React.useMemo(() => ({ r: gridSize - 2, c: gridSize - 2 }), [gridSize]);

  const initGrid = useCallback((clearPathsOnly = false) => {
    setGrid(prevGrid => {
      // If grid dimensions change or grid is not initialized, create new
      const currentSize = prevGrid.length;
      if (currentSize !== gridSize || prevGrid.length === 0) {
          const newGrid = Array(gridSize).fill(0).map(() => Array(gridSize).fill(CELL_TYPE.EMPTY));
          newGrid[START.r][START.c] = CELL_TYPE.START;
          newGrid[END.r][END.c] = CELL_TYPE.END;
          
          for (let i = 0; i < gridSize * gridSize * 0.25; i++) {
            const r = Math.floor(Math.random() * gridSize);
            const c = Math.floor(Math.random() * gridSize);
            if ((r === START.r && c === START.c) || (r === END.r && c === END.c)) continue;
            if (newGrid[r][c] === CELL_TYPE.EMPTY) newGrid[r][c] = CELL_TYPE.WALL;
          }
          return newGrid;
      }

      const newGrid = clearPathsOnly 
        ? prevGrid.map(row => row.map(cell => (cell > 3 ? CELL_TYPE.EMPTY : cell)))
        : Array(gridSize).fill(0).map(() => Array(gridSize).fill(CELL_TYPE.EMPTY));

      if (!clearPathsOnly) {
        newGrid[START.r][START.c] = CELL_TYPE.START;
        newGrid[END.r][END.c] = CELL_TYPE.END;
        
        for (let i = 0; i < gridSize * gridSize * 0.25; i++) {
          const r = Math.floor(Math.random() * gridSize);
          const c = Math.floor(Math.random() * gridSize);
          if ((r === START.r && c === START.c) || (r === END.r && c === END.c)) continue;
          if (newGrid[r][c] === CELL_TYPE.EMPTY) newGrid[r][c] = CELL_TYPE.WALL;
        }
      }
      return newGrid;
    });
  }, [START, END, gridSize]);

  useEffect(() => {
    initGrid();
  }, [initGrid]);

  const runSimulation = async () => {
    if (isSimulating) return;
    
    const baseGrid = grid.map(row => row.map(cell => (cell > 3 ? 0 : cell)));
    
    setIsSimulating(true);

    const details = ALGO_DETAILS[selectedAlgorithm];
    const { path, visited } = details.find(baseGrid, START, END, allowDiagonals);

    // Optimized visualization
    const visitedBatch = [];
    for (let i = 0; i < visited.length; i++) {
      const node = visited[i];
      if (baseGrid[node.r][node.c] === CELL_TYPE.EMPTY) {
        visitedBatch.push(node);
      }
    }
    
    // Render visited nodes in batches for speed
    for (let i = 0; i < visitedBatch.length; i += 15) {
        const batch = visitedBatch.slice(i, i + 15);
        setGrid(prev => {
            const next = [...prev.map(row => [...row])];
            batch.forEach(node => {
                next[node.r][node.c] = details.visitedType;
            });
            return next;
        });
        await new Promise(r => setTimeout(r, 1));
    }

    if (path.length > 0) {
      for (const node of path) {
        if (baseGrid[node.r][node.c] === CELL_TYPE.EMPTY || grid[node.r][node.c] >= CELL_TYPE.A_STAR_VISITED) {
          setGrid(prev => {
            const next = [...prev.map(row => [...row])];
            next[node.r][node.c] = details.pathType;
            return next;
          });
          await new Promise(r => setTimeout(r, 20));
        }
      }
    }

    setIsSimulating(false);
  };

  const getCellColor = (cell: number) => {
    switch(cell) {
      case CELL_TYPE.WALL: return 'bg-slate-700';
      case CELL_TYPE.START: return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]';
      case CELL_TYPE.END: return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]';
      
      case CELL_TYPE.A_STAR_PATH: return 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.4)]';
      case CELL_TYPE.A_STAR_VISITED: return 'bg-cyan-500/10';
      
      case CELL_TYPE.DIJKSTRA_PATH: return 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]';
      case CELL_TYPE.DIJKSTRA_VISITED: return 'bg-amber-500/10';

      case CELL_TYPE.BFS_PATH: return 'bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]';
      case CELL_TYPE.BFS_VISITED: return 'bg-violet-500/10';

      default: return 'bg-slate-800/50';
    }
  };

  const currentAlgoDetails = ALGO_DETAILS[selectedAlgorithm];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Interactive <span className="text-cyan-500">Prototypes</span></h1>
          <p className="text-slate-400 max-w-2xl">Verified technical demos showcasing AI pathfinding and real-time algorithmic execution in game environments.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <section className="glass-panel p-8 rounded-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <div>
                <h2 className="text-2xl font-bold">Pathfinding Simulation</h2>
                <p className="text-slate-400 text-sm">Comparing classic AI navigation algorithms.</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={() => setAllowDiagonals(!allowDiagonals)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all border ${
                    allowDiagonals ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
                >
                  Diagonals: {allowDiagonals ? 'ON' : 'OFF'}
                </button>
                <button onClick={() => initGrid(true)} className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors" title="Clear Paths">
                  <Eraser size={20} />
                </button>
                <button onClick={() => initGrid(false)} className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors" title="New Maze">
                  <RefreshCw size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 bg-slate-900/50 p-3 sm:p-2 rounded-xl gap-4 sm:gap-0">
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start pl-0 sm:pl-2">
                    <label htmlFor="algo-select" className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden xs:inline">Algorithm:</label>
                    <div className="relative w-full sm:w-auto">
                        <select
                            id="algo-select"
                            value={selectedAlgorithm}
                            onChange={(e) => setSelectedAlgorithm(e.target.value as Algorithm)}
                            disabled={isSimulating}
                            className={`appearance-none w-full sm:w-auto pl-4 pr-10 py-2 sm:py-1.5 rounded-lg text-sm font-bold bg-white/5 border border-white/10 text-white focus:outline-none focus:border-${currentAlgoDetails.color}-500 transition-colors cursor-pointer text-center sm:text-left`}
                        >
                            {(Object.keys(ALGO_DETAILS) as Algorithm[]).map(algo => (
                                <option key={algo} value={algo} className="bg-slate-900 text-slate-300">
                                    {ALGO_DETAILS[algo].name}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
                <button 
                  disabled={isSimulating}
                  onClick={runSimulation}
                  className={`w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-${currentAlgoDetails.color}-500 text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-${currentAlgoDetails.color}-400 disabled:opacity-50 transition-all shadow-lg shadow-${currentAlgoDetails.color}-500/20 active:scale-95`}
                >
                  <Play size={18} /> <span className="whitespace-nowrap">Run Simulation</span>
                </button>
            </div>

            <div className="grid gap-0.5 bg-slate-900 p-1 rounded-xl aspect-square w-full max-w-[500px] mx-auto" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
              {grid.map((row, r) => row.map((cell, c) => (
                <div 
                  key={`${r}-${c}`}
                  className={`aspect-square rounded-[1px] sm:rounded-sm transition-all duration-200 ${getCellColor(cell)}`}
                />
              )))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-emerald-500 rounded-sm" /> Start</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-red-500 rounded-sm" /> Target</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-700 rounded-sm" /> Wall</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-cyan-500 rounded-sm" /> A*</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-amber-500 rounded-sm" /> Dijkstra</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-violet-500 rounded-sm" /> BFS</div>
            </div>
          </section>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Gamepad2 className="text-cyan-400" /> Pipeline Status
            </h2>
            
            <div className={`glass-panel p-8 rounded-2xl bg-gradient-to-br from-${currentAlgoDetails.color}-500/5 to-transparent border-${currentAlgoDetails.color}-500/10 transition-all`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`px-3 py-1 bg-${currentAlgoDetails.color}-500/20 text-${currentAlgoDetails.color}-400 border border-${currentAlgoDetails.color}-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                  <Activity size={12} className="inline mr-1" /> {currentAlgoDetails.name}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{currentAlgoDetails.name} Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {currentAlgoDetails.description}
              </p>
              <div className={`flex items-center gap-2 text-${currentAlgoDetails.color}-400 text-xs font-mono font-bold uppercase`}>
                <Info size={14} /> Efficiency: {currentAlgoDetails.complexity}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-white/5">
              <h3 className="text-lg font-bold mb-3">Technical Highlights</h3>
              <ul className="text-slate-400 text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                  <span>A*: Heuristic-based, direct pathfinding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span>Dijkstra: Explores all directions, finds shortest unweighted path.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
                  <span>BFS: Exhaustive search, best for unweighted grids.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
