// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - NeonRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type GameplayNeonrailLiteActionId = "pause-1" | "energy-settings-2";

export interface GameplayNeonrailLiteProps {
  actions?: Partial<Record<GameplayNeonrailLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayNeonrailLite({ actions, runtime }: GameplayNeonrailLiteProps) {
  void runtime;
  return (
    <>
      {/* GAMEPLAY CANVAS LAYER (Z-10) */}
      <div className="absolute inset-0 z-10 cityscape-bg" data-alt="A sprawling, dark cyberpunk cityscape at night, viewed from a high vantage point as if flying past it. The architecture is dense, brutalist, and futuristic, silhouetted against a pitch-black sky. Faint, glowing cyan and magenta lights emanate from distant windows and towering holographic billboards, casting a moody, high-contrast glow over the urban canyon. The atmosphere is tense, fast-paced, and cinematic, establishing a light-as-material neon aesthetic.">
      {/* Floor Grid Overlay */}
      <div className="absolute bottom-0 w-full h-[60%] cyber-grid perspective-[1000px]" style={{transform: "rotateX(60deg) scale(2)", transformOrigin: "bottom"}}></div>
      {/* Rail System (3 Distinct Lanes) */}
      <div className="absolute inset-y-0 w-full flex flex-col justify-center items-center gap-16 md:gap-24">
      {/* Lane 1 (Top) */}
      <div className="w-full h-1 bg-primary-fixed/20 relative" style={{animation: "rail-glow 2s infinite ease-in-out"}}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-primary-fixed/50"></div>
      {/* Collectible (Energy Shard) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 neon-glow-tertiary" style={{animation: "entity-approach 4s linear infinite 1.5s"}}>
      <div className="w-6 h-6 border-2 border-tertiary-container rotate-45 flex items-center justify-center bg-tertiary-container/20 backdrop-blur-sm">
      <div className="w-2 h-2 bg-tertiary-container rounded-full" style={{animation: "particle-flicker 0.1s infinite"}}></div>
      </div>
      </div>
      </div>
      {/* Lane 2 (Middle) - Player Lane */}
      <div className="w-full h-1 bg-primary-fixed/40 relative shadow-[0_0_15px_rgba(0,219,231,0.5)]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-primary-fixed drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
      {/* Player Vehicle */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 z-30 neon-glow-primary" style={{animation: "vehicle-hover 0.5s ease-in-out infinite"}}>
      {/* Engine Trail */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent to-primary-fixed opacity-80 blur-sm"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent to-white opacity-60"></div>
      {/* Vehicle Core */}
      <div className="w-12 h-4 border border-primary-fixed bg-surface-container/80 backdrop-blur-md relative overflow-hidden flex items-center">
      <div className="w-full h-[1px] bg-primary-fixed absolute top-1/2 -translate-y-1/2"></div>
      <div className="h-full w-2 bg-primary-fixed absolute right-0"></div>
      </div>
      </div>
      {/* Obstacle (Neon Barrier) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 neon-glow-secondary z-20" style={{animation: "entity-approach 3s linear infinite"}}>
      <div className="w-4 h-16 bg-surface-container/50 border-2 border-secondary-container backdrop-blur-xl relative flex justify-center overflow-hidden">
      {/* Warning stripes */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,75,137,0.3)_4px,rgba(255,75,137,0.3)_8px)]"></div>
      <div className="h-full w-[2px] bg-secondary-container animate-pulse"></div>
      </div>
      </div>
      </div>
      {/* Lane 3 (Bottom) */}
      <div className="w-full h-1 bg-primary-fixed/20 relative" style={{animation: "rail-glow 2s infinite ease-in-out 1s"}}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-primary-fixed/50"></div>
      </div>
      </div>
      {/* Speed Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: "repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 102px)", animation: "scroll-grid 0.5s linear infinite"}}></div>
      </div>
      {/* HUD LAYER (Z-50) */}
      <div className="absolute inset-0 pointer-events-none z-50 flex flex-col justify-between">
      {/* TopAppBar (From JSON, adapted as HUD Header) */}
      <nav className="fixed top-0 w-full bg-transparent text-primary dark:text-primary-fixed font-headline-md text-headline-md tracking-tighter bg-gradient-to-b from-surface-dim to-transparent flat no shadows transition-colors duration-150 active:scale-95 flex justify-between items-center px-margin-mobile py-panel-gap z-50 pointer-events-auto">
      {/* Brand / Anchor */}
      <div className="font-display-lg text-display-mobile text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">NEONRAIL LITE</div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4">
      <button aria-label="Pause" className="material-symbols-outlined hover:text-primary hover:drop-shadow-[0_0_10px_rgba(225,253,255,1)] transition-colors" style={{fontVariationSettings: "'FILL' 0"}} type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
                          pause
                      </button>
      <button aria-label="Energy Settings" className="material-symbols-outlined hover:text-primary hover:drop-shadow-[0_0_10px_rgba(225,253,255,1)] transition-colors" style={{fontVariationSettings: "'FILL' 0"}} type="button" data-action-id="energy-settings-2" onClick={actions?.["energy-settings-2"]}>
                          bolt
                      </button>
      </div>
      </nav>
      {/* Secondary HUD Data (Score, Level, Energy) */}
      <div className="absolute top-[80px] left-margin-mobile flex flex-col gap-unit pointer-events-auto">
      {/* Score */}
      <div className="font-data-lg text-data-lg text-primary-fixed drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">
                      SCORE: 12,450
                  </div>
      <div className="flex items-center gap-panel-gap mt-2">
      {/* Level Chip */}
      <div className="bg-primary-fixed text-[#000000] font-label-sm text-label-sm px-2 py-1 rounded-sm uppercase shadow-[0_0_10px_rgba(0,219,231,0.4)]">
                          LEVEL: 03
                      </div>
      {/* Energy Progress Bar */}
      <div className="flex items-center gap-2">
      <span className="font-label-sm text-label-sm text-tertiary-container uppercase drop-shadow-[0_0_5px_rgba(52,252,13,0.5)]">Energy</span>
      <div className="w-32 md:w-48 h-[2px] bg-tertiary-container/10 relative mt-[1px]">
      <div className="absolute left-0 top-0 h-full w-[75%] bg-gradient-to-r from-transparent to-tertiary-container"></div>
      <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_8px_rgba(52,252,13,1)]"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
