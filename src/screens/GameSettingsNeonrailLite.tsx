// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - NeonRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Gauge, Keyboard, Pause, Settings, Shield, SlidersHorizontal, User, Volume2, X } from "lucide-react";


export type GameSettingsNeonrailLiteActionId = "upgrade-core-1" | "pause-2" | "close-3" | "casual-4" | "pilot-5" | "elite-6" | "reset-defaults-7" | "apply-config-8" | "return-to-runway-9" | "runway-1" | "arsenal-2" | "circuits-3" | "systems-4";

export interface GameSettingsNeonrailLiteProps {
  actions?: Partial<Record<GameSettingsNeonrailLiteActionId, () => void>>;

}

export function GameSettingsNeonrailLite({ actions }: GameSettingsNeonrailLiteProps) {
  return (
    <>
      {/* Background Layer (Simulating blurred gameplay) */}
      <div className="absolute inset-0 bg-game-blur opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-surface-dim/80 backdrop-blur-md z-0"></div>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex flex-col h-full py-8 bg-surface-container/20 backdrop-blur-xl fixed left-0 top-0 w-64 border-r border-primary-fixed/30 shadow-[4px_0_15px_rgba(0,219,231,0.1)] z-40 transition-colors duration-200 ease-in-out">
      <div className="px-6 mb-12">
      <h1 className="text-primary-fixed-dim font-display-lg drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">NEONRAIL</h1>
      <div className="mt-8 flex items-center gap-4">
      <div className="w-12 h-12 bg-primary-fixed/20 border border-primary-fixed/50 flex items-center justify-center">
      <User className="text-primary-fixed" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">OPERATOR_01</div>
      <div className="font-label-sm text-[10px] text-on-surface-variant mt-1">RANK: ELITE</div>
      </div>
      </div>
      </div>
      <div className="flex-1 px-4 space-y-2">
      <a className="flex items-center gap-4 px-4 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface hover:bg-primary-fixed/10 transition-colors duration-200 ease-in-out rounded-sm" href="#" data-action-id="runway-1" onClick={(event) => { event.preventDefault(); actions?.["runway-1"]?.(); }}>
      <Gauge aria-hidden={true} focusable="false" />
      <span>RUNWAY</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface hover:bg-primary-fixed/10 transition-colors duration-200 ease-in-out rounded-sm" href="#" data-action-id="arsenal-2" onClick={(event) => { event.preventDefault(); actions?.["arsenal-2"]?.(); }}>
      <Shield aria-hidden={true} focusable="false" />
      <span>ARSENAL</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-on-surface hover:bg-primary-fixed/10 transition-colors duration-200 ease-in-out rounded-sm" href="#" data-action-id="circuits-3" onClick={(event) => { event.preventDefault(); actions?.["circuits-3"]?.(); }}>
      <SlidersHorizontal aria-hidden={true} focusable="false" />
      <span>CIRCUITS</span>
      </a>
      {/* Active Tab */}
      <a className="flex items-center gap-4 px-4 py-3 font-label-sm text-label-sm uppercase tracking-widest bg-primary-container/20 text-primary-fixed border-l-4 border-primary-fixed shadow-[0_0_12px_rgba(0,219,231,0.4)] rounded-r-sm transition-colors duration-200 ease-in-out" href="#" data-action-id="systems-4" onClick={(event) => { event.preventDefault(); actions?.["systems-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span>SYSTEMS</span>
      </a>
      </div>
      <div className="px-6 mt-auto">
      <button className="w-full py-3 cyber-button font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed" type="button" data-action-id="upgrade-core-1" onClick={actions?.["upgrade-core-1"]}>
                      UPGRADE CORE
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-margin-mobile md:p-margin-desktop md:ml-64 w-full h-full">
      {/* TopAppBar (Mobile Only - simplified for settings overlay context, hiding full nav shell logic if strictly top destination, but showing header) */}
      <header className="md:hidden fixed top-0 w-full flex justify-between items-center px-margin-mobile py-panel-gap z-50 bg-transparent bg-gradient-to-b from-surface-dim to-transparent">
      <h1 className="font-display-mobile text-display-mobile text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">NEONRAIL LITE</h1>
      <div className="flex gap-4">
      <button className="text-primary dark:text-primary-fixed hover:text-primary hover:drop-shadow-[0_0_10px_rgba(225,253,255,1)] transition-colors duration-150 active:scale-95" type="button" aria-label="Pause" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Settings Panel */}
      <div className="cyber-panel w-full max-w-3xl p-6 md:p-8 flex flex-col gap-8 h-full md:h-auto md:max-h-[870px] overflow-y-auto mt-12 md:mt-0">
      <div className="flex justify-between items-center border-b border-primary-fixed/20 pb-4">
      <h2 className="font-headline-md text-headline-md text-primary-fixed neon-text-glow tracking-tighter uppercase">System Config</h2>
      <button className="text-on-surface-variant hover:text-primary-fixed transition-colors" type="button" aria-label="Close" data-action-id="close-3" onClick={actions?.["close-3"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Difficulty & Speed (Left Column) */}
      <div className="space-y-6">
      {/* Difficulty Section */}
      <div className="cyber-panel p-5 cyber-border-glow transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
      <Gauge className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Difficulty Protocol</h3>
      </div>
      <div className="flex gap-2">
      <button className="flex-1 py-2 cyber-button font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary-fixed" type="button" data-action-id="casual-4" onClick={actions?.["casual-4"]}>Casual</button>
      <button className="flex-1 py-2 cyber-button active font-label-sm text-label-sm uppercase" type="button" data-action-id="pilot-5" onClick={actions?.["pilot-5"]}>Pilot</button>
      <button className="flex-1 py-2 cyber-button font-label-sm text-label-sm uppercase text-error hover:text-error hover:border-error hover:shadow-[0_0_12px_rgba(255,180,171,0.5)] hover:bg-error/10" type="button" data-action-id="elite-6" onClick={actions?.["elite-6"]}>Elite</button>
      </div>
      </div>
      {/* Speed Multiplier */}
      <div className="cyber-panel p-5 cyber-border-glow transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
      <Bolt className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Overclock Speed</h3>
      </div>
      <span className="font-data-lg text-data-lg text-primary-fixed bg-primary-fixed/10 px-2 py-1 rounded-sm border border-primary-fixed/30">x1.5</span>
      </div>
      <div className="mt-4">
      <input max="3" min="1" step="0.1" type="range" defaultValue="1.5" />
      <div className="flex justify-between mt-2 font-label-sm text-[10px] text-on-surface-variant">
      <span>MIN (1.0x)</span>
      <span>MAX (3.0x)</span>
      </div>
      </div>
      </div>
      </div>
      {/* Audio & Input (Right Column) */}
      <div className="space-y-6">
      {/* Audio Controls */}
      <div className="cyber-panel p-5 cyber-border-glow transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
      <Volume2 className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Audio Feed</h3>
      </div>
      <div className="space-y-5">
      <div className="flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">SFX</span>
      <div className="w-32">
      <input max="100" min="0" type="range" defaultValue="80" />
      </div>
      <span className="font-data-lg text-[14px] text-primary-fixed w-8 text-right">80</span>
      </div>
      <div className="flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Music</span>
      <div className="w-32">
      <input max="100" min="0" type="range" defaultValue="45" />
      </div>
      <span className="font-data-lg text-[14px] text-primary-fixed w-8 text-right">45</span>
      </div>
      </div>
      </div>
      {/* Input Help */}
      <div className="cyber-panel p-5 border-t-2 border-t-secondary-fixed/50">
      <div className="flex items-center gap-3 mb-4">
      <Keyboard className="text-secondary-fixed" aria-hidden={true} focusable="false" />
      <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Input Matrix</h3>
      </div>
      <div className="space-y-3 font-label-sm text-label-sm text-on-surface-variant">
      <div className="flex justify-between border-b border-surface-variant pb-2">
      <span>Lane Switch</span>
      <div className="flex gap-2 text-primary-fixed">
      <span className="bg-surface-bright px-1 py-0.5 border border-surface-variant rounded">A</span> / <span className="bg-surface-bright px-1 py-0.5 border border-surface-variant rounded">D</span>
      </div>
      </div>
      <div className="flex justify-between border-b border-surface-variant pb-2">
      <span>Jump / Boost</span>
      <div className="flex gap-2 text-primary-fixed">
      <span className="bg-surface-bright px-2 py-0.5 border border-surface-variant rounded">SPACE</span>
      </div>
      </div>
      <div className="flex justify-between">
      <span>System Pause</span>
      <div className="flex gap-2 text-primary-fixed">
      <span className="bg-surface-bright px-1 py-0.5 border border-surface-variant rounded">ESC</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Action Area */}
      <div className="mt-auto pt-6 flex flex-col sm:flex-row justify-between gap-4 border-t border-primary-fixed/20">
      <button className="cyber-button px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-error hover:border-error" type="button" data-action-id="reset-defaults-7" onClick={actions?.["reset-defaults-7"]}>
                          Reset Defaults
                      </button>
      <div className="flex flex-col sm:flex-row gap-4">
      <button className="cyber-button px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed" type="button" data-action-id="apply-config-8" onClick={actions?.["apply-config-8"]}>
                              Apply Config
                          </button>
      <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 font-label-sm text-label-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(116,245,255,0.6)] hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="return-to-runway-9" onClick={actions?.["return-to-runway-9"]}>
                              Return to Runway
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
