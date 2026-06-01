---
name: NeonRail UI
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ffb1c3'
  on-secondary: '#66002c'
  secondary-container: '#ff4b89'
  on-secondary-container: '#590026'
  tertiary: '#e4ffd6'
  on-tertiary: '#053900'
  tertiary-container: '#34fc0d'
  on-tertiary-container: '#106f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c3'
  on-secondary-fixed: '#3f0019'
  on-secondary-fixed-variant: '#8f0041'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-rt:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  panel-gap: 8px
---

## Brand & Style
The design system is engineered for high-velocity engagement, targeting players who value precision, speed, and a "cyberpunk-minimal" aesthetic. The interface must feel like a high-performance heads-up display (HUD) that lives on top of the game world without obstructing the side-scrolling action.

The style is a fusion of **Minimalism** and **Glassmorphism**, set against a **High-Contrast** dark canvas. It utilizes "light-as-material" logic, where UI elements don't just occupy space—they emit light. The emotional response should be one of focused adrenaline: the interface is sharp, glowing, and strictly functional, stripping away traditional chrome in favor of energized lines and translucent data panels.

## Colors
The palette is built on a "Void" foundation (#0a0a0c) to ensure maximum contrast for neon accents. 

- **Primary (Neon Blue):** Used for standard interactive elements, progress bars, and primary navigation. It represents the "player state."
- **Secondary (Neon Pink):** Reserved for high-energy actions, shop items, and "boost" indicators.
- **Success (Lime):** Dedicated to score milestones and health recovery.
- **Warning (Yellow):** Used exclusively for hazard alerts and critical timers.
- **Surfaces:** All containers use a semi-transparent version of the neutral color (alpha 60-80%) to allow the game world to remain visible beneath the UI.

## Typography
Typography reflects a balance between futuristic geometry and technical precision. 

- **Display & Headlines:** Use **Sora** for its aggressive, wide geometric stance. It should be used for level titles and "Game Over" screens.
- **Body Text:** **Hanken Grotesk** provides high legibility for descriptions and settings, maintaining a sharp, contemporary feel.
- **Data & Metrics:** **JetBrains Mono** is utilized for scores, timers, and multipliers. The monospaced nature prevents "character jumping" during rapid numerical increments, ensuring the score feels stable even at high speeds.

## Layout & Spacing
The layout follows a **HUD-first** philosophy. Most UI elements are anchored to the corners or the top edge of the screen to preserve a clear "runway" in the center for side-scrolling gameplay.

- **Grid:** A fluid layout that pushes critical data (Score/Life) to the top-left and secondary actions (Pause/Settings) to the top-right.
- **Density:** Spacing is tight (4px increments) to maximize the playfield. 
- **Safe Areas:** Adhere strictly to device notch/home-indicator safe areas, but extend glowing borders into these margins to maintain immersion.

## Elevation & Depth
This system eschews traditional shadows for **Light Emission** and **Glassmorphism**.

1.  **Backdrop Blurs:** Every menu panel must use a `backdrop-filter: blur(12px)` with a slightly tinted background (20% Primary Color) to create a sense of depth without opaque occlusion.
2.  **Glowing Outlines:** Depth is defined by the intensity of the border glow. 
    - *Level 0 (Background):* No border.
    - *Level 1 (Panels):* 1px solid border at 30% opacity.
    - *Level 2 (Interactive):* 1px solid border at 100% opacity with a 4px outer bloom (box-shadow) of the same color.
3.  **Tonal Stacking:** Higher-priority information is displayed in pure white (#FFFFFF) on top of the vibrant neon glows.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To reinforce the "cyberpunk-minimal" aesthetic, all buttons, panels, and input fields should have 90-degree corners. For specialized "Hero" buttons (like "Start Run"), use a 45-degree clipped corner (chamfer) on the top-right and bottom-left to create a dynamic, directional feel without introducing curves.

## Components
- **Neon Buttons:** Rectangular, no fill (ghost style) with a 1px Primary color border. On hover/active, the button gains a subtle 10% Primary color fill and the border glow intensity increases.
- **HUD Chips:** Small, monospaced labels used for multipliers (e.g., "x2.0"). These use a solid fill of the Primary color with black text for maximum punch.
- **Progress Bars:** Thin 2px lines. The background is a 10% opacity track; the "fill" is a solid neon gradient with a glowing "head" at the leading edge.
- **Glass Cards:** Used for post-game statistics. Large, sharp-edged containers with a 12px blur and a hairline Primary border.
- **Interactive States:** Use "Pulse" animations on the border-glow for warning states and "Flicker" (simulating a neon tube) for rare/epic item rewards.