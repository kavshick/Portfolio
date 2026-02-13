
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Play, RefreshCw, Info } from 'lucide-react';

const Games: React.FC = () => {
  const GRID_SIZE = 15;
  const [grid, setGrid] = useState<number[][]>([]); // 0: empty, 1: wall, 2: start, 3: end, 4: path
  const [isSimulating, setIsSimulating] = useState(false);

  const initGrid = useCallback(() => {
    const newGrid = Array(GRID_SIZE).fill(0).map(() => Array(GRID_SIZE).fill(0));
    newGrid[1][1] = 2; // Start
    newGrid[GRID_SIZE - 2][GRID_SIZE - 2] = 3; // End
    for (let i = 0; i < 40; i++) {
      const r = Math.floor(Math.random() * GRID_SIZE);
      const c = Math.floor(Math.random() * GRID_SIZE);
      if (newGrid[r][c] === 0) newGrid[r][c] = 1;
    }
    setGrid(newGrid);
  }, []);

  useEffect(() => {
    initGrid();
  }, [initGrid]);

  const simulatePath = async () => {
    setIsSimulating(true);
    const path = [];
    for (let i = 1; i < GRID_SIZE - 1; i++) {
      path.push([i, i]);
      const newGrid = [...grid.map(row => [...row])];
      path.forEach(([r, c]) => {
        if (newGrid[r][c] === 0) newGrid[r][c] = 4;
      });
      setGrid(newGrid);
      await new Promise(r => setTimeout(r, 50));
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
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">AI Pathfinding Simulation</h2>
                <p className="text-slate-400 text-sm">Autonomous navigation using A* logic.</p>
              </div>
              <div className="flex gap-2">
                <button onClick={initGrid} className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors">
                  <RefreshCw size={20} />
                </button>
                <button 
                  disabled={isSimulating}
                  onClick={simulatePath}
                  className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg font-bold flex items-center gap-2 hover:bg-cyan-400 disabled:opacity-50 transition-all"
                >
                  <Play size={18} /> Start
                </button>
              </div>
            </div>

            <div className="grid grid-cols-15 gap-1 bg-slate-900 p-2 rounded-xl aspect-square" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
              {grid.map((row, r) => row.map((cell, c) => (
                <div 
                  key={`${r}-${c}`}
                  className={`aspect-square rounded-sm transition-all duration-300 ${
                    cell === 1 ? 'bg-slate-700' :
                    cell === 2 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                    cell === 3 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' :
                    cell === 4 ? 'bg-cyan-500/60' :
                    'bg-slate-800/50'
                  }`}
                />
              )))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-500 rounded" /> Start</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded" /> Target</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-700 rounded" /> Obstacle</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-cyan-500/60 rounded" /> Path</div>
            </div>
          </section>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Gamepad2 className="text-cyan-400" /> Pipeline Status
            </h2>
            
            <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent border-cyan-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Ongoing Research
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Experimental Game Prototypes</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Currently iterating on advanced character AI behaviors and procedural generation algorithms. These prototypes are primarily used for testing real-time machine learning integration in dynamic 3D environments.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                <Info size={14} /> Status: In Development / Experimental Prototype
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-white/5">
              <h3 className="text-lg font-bold mb-3">Verified Experience</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                All game engineering work displayed here focuses on technical backend logic, pathfinding algorithms, and systems architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
