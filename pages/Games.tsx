
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Play, RefreshCw, Info, Activity } from 'lucide-react';
import { findPath, Point } from '../services/pathfinding';

const Games: React.FC = () => {
  const GRID_SIZE = 15;
  // 0: empty, 1: wall, 2: start, 3: end, 4: final path, 5: explored
  const [grid, setGrid] = useState<number[][]>([]); 
  const [isSimulating, setIsSimulating] = useState(false);
  const [allowDiagonals, setAllowDiagonals] = useState(false);

  const START: Point = { r: 1, c: 1 };
  const END: Point = { r: GRID_SIZE - 2, c: GRID_SIZE - 2 };

  const initGrid = useCallback(() => {
    const newGrid = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
    newGrid[START.r][START.c] = 2; // Start
    newGrid[END.r][END.c] = 3; // End
    
    // Procedural obstacle generation
    for (let i = 0; i < 50; i++) {
      const r = Math.floor(Math.random() * GRID_SIZE);
      const c = Math.floor(Math.random() * GRID_SIZE);
      // Avoid placing walls on start or end
      if ((r === START.r && c === START.c) || (r === END.r && c === END.c)) continue;
      if (newGrid[r][c] === 0) newGrid[r][c] = 1;
    }
    setGrid(newGrid);
  }, []);

  useEffect(() => {
    initGrid();
  }, [initGrid]);

  const simulatePath = async () => {
    if (isSimulating) return;
    
    // Clear previous simulation results
    const baseGrid = grid.map(row => row.map(cell => (cell === 4 || cell === 5 ? 0 : cell)));
    setGrid(baseGrid);
    
    setIsSimulating(true);

    const { path, visited } = findPath(baseGrid, START, END, allowDiagonals);

    // 1. Visualize Search Process (Exploration)
    for (let i = 0; i < visited.length; i++) {
      const node = visited[i];
      if (grid[node.r][node.c] === 0) {
        setGrid(prev => {
          const next = [...prev.map(row => [...row])];
          next[node.r][node.c] = 5;
          return next;
        });
        // Throttle for visualization
        if (i % 3 === 0) await new Promise(r => setTimeout(r, 10));
      }
    }

    // 2. Visualize Final Optimal Path
    if (path.length > 0) {
      for (const node of path) {
        if (baseGrid[node.r][node.c] === 0 || baseGrid[node.r][node.c] === 5) {
          setGrid(prev => {
            const next = [...prev.map(row => [...row])];
            next[node.r][node.c] = 4;
            return next;
          });
          await new Promise(r => setTimeout(r, 30));
        }
      }
    }

    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Interactive <span className="text-cyan-500">Prototypes</span></h1>
          <p className="text-slate-400 max-w-2xl">Verified technical demos showcasing AI pathfinding and real-time algorithmic execution in game environments.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <section className="glass-panel p-8 rounded-3xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold">A* Pathfinding Simulation</h2>
                <p className="text-slate-400 text-sm">Optimized heuristic navigation.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setAllowDiagonals(!allowDiagonals)}
                  className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all border ${
                    allowDiagonals ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
                >
                  Diagonals: {allowDiagonals ? 'ON' : 'OFF'}
                </button>
                <button onClick={initGrid} className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors">
                  <RefreshCw size={20} />
                </button>
                <button 
                  disabled={isSimulating}
                  onClick={simulatePath}
                  className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg font-bold flex items-center gap-2 hover:bg-cyan-400 disabled:opacity-50 transition-all"
                >
                  <Play size={18} /> Run A*
                </button>
              </div>
            </div>

            <div className="grid grid-cols-15 gap-1 bg-slate-900 p-2 rounded-xl aspect-square" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
              {grid.map((row, r) => row.map((cell, c) => (
                <div 
                  key={`${r}-${c}`}
                  className={`aspect-square rounded-sm transition-all duration-200 ${
                    cell === 1 ? 'bg-slate-700' :
                    cell === 2 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                    cell === 3 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' :
                    cell === 4 ? 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.4)]' :
                    cell === 5 ? 'bg-cyan-500/10' :
                    'bg-slate-800/50'
                  }`}
                />
              )))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-500 rounded" /> Start</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded" /> Target</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-700 rounded" /> Wall</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-cyan-500/10 rounded" /> Visited</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-cyan-500 rounded" /> Optimal</div>
            </div>
          </section>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Gamepad2 className="text-cyan-400" /> Pipeline Status
            </h2>
            
            <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Activity size={12} className="inline mr-1" /> Optimized Logic
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">A* Algorithm Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Implemented a high-performance A-Star pathfinding solution using Manhattan distance heuristics. The system evaluates node costs (f = g + h) to ensure the shortest path is found with minimal exploration cycles.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                <Info size={14} /> Efficiency: O(E log V) Complexity
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-white/5">
              <h3 className="text-lg font-bold mb-3">Technical Highlights</h3>
              <ul className="text-slate-400 text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                  <span>Weighted cost evaluation for optimal navigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                  <span>Robust obstacle avoidance with procedurally generated constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                  <span>Real-time visualization of the search frontier and closed set.</span>
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
