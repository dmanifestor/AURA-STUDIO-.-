# AURA Studio — Mobile-First Interactive Homepage & Visual Journey

A bespoke, interactive single-page homepage for AURA Studio—an avant-garde digital design, branding, and architectural creative agency—engineered with mobile-first tactile interactions, mixed narrative-and-index navigation, rich visual storytelling, and Google Search Essentials / WCAG 2.2 AA compliance.

### User Review & Critical Decisions

> [!IMPORTANT]
> The four design decisions confirmed in Phase 1 have been integrated into this visual journey:
> - **Domain & Business**: High-end creative agency & design studio (**AURA Studio**).
> - **Images & Logo Choice (Stage 2)**: **Option B** — Curated contextual editorial imagery generated via `generate_image` alongside bespoke minimalist SVG brand marks and vector geometry.
> - **Storyboard Creation (Stage 3)**: **Option A** — Assistant presents the complete 5-scene narrative storyboard with interactive flow, key actions, and content transitions directly in this plan.
> - **Navigation Architecture**: **Mixed Navigation** — A cinematic storytelling narrative flow with a floating persistent quick-access drawer/indexer, allowing visitors to experience either a guided visual journey or instantaneously jump to key capability, work, or conversion sectors.

- **Confirmed Decision 1**: Agency identity centered on high-craft digital experiences, spatial architecture, and brand systems.
- **Confirmed Decision 2**: Curated high-resolution editorial imagery (16:9 cinematic hero, 4:3 bento work spotlights, 1:1 creative director showcase) with robust CSS fallback containers ensuring zero broken images.
- **Confirmed Decision 3**: Complete 5-scene visual journey storyboard:
  1. *Scene 1: The Overture (Hero & Brand Ethos)* — Oversized editorial typographic impact, brand statement, live client metric strip, and primary inquiry CTA.
  2. *Scene 2: Selected Case Studies (Interactive Bento Showcase)* — Category-filtered project grid, live interactive case preview lightbox modal, and architectural detail drawers.
  3. *Scene 3: Disciplines & Method (Interactive Service Accordion)* — Clean unboxed editorial numbering (`01. Spatial Architecture`, `02. Digital Systems`, `03. Brand Identities`) with interactive deep-dive panel and deliverable breakdowns.
  4. *Scene 4: The Collective (Studio Direction & Culture)* — Studio philosophy, leadership portraiture, and verifiable client citations.
  5. *Scene 5: Project Initiation (Interactive Scope Estimator & Contact Drawer)* — Fluid inquiry form with project scope toggles, budget selector, and direct contact confirmation.
- **Mobile Usability & SEO Baseline**: WCAG 2.2 AA compliant contrast and touch targets ($\ge 44\text{px}$), sub-15% sticky header cap, rich JSON-LD `ProfessionalService` structured data, semantic HTML5 landmarks, and keyboard trap protection.

---

### 1. Overview & Core Concept

- **What It Does**: AURA Studio's homepage welcomes visitors into an immersive visual and tactile presentation. It guides prospective clients through the studio's portfolio, design disciplines, creative philosophy, and engagement channels through smooth interactive scene navigation, quick-access jumping, and deep-dive modal explorations.
- **Target Audience / Persona**: Design-conscious founders, CMOs, luxury brands, cultural institutions, and architectural clients seeking transformative visual identity and digital products.
- **Key Value**: Delivers the visual prestige and tactile fluidity of award-winning agency websites while maintaining lightning-fast performance, rock-solid accessibility, and search engine discoverability.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Guided Exploration Flow*: The visitor enters Scene 1, observes the studio statement and primary reel preview, and scrolls or clicks "Explore Works" to transition through Scenes 2 through 5.
  2. *Direct Inquiry Flow*: A client wanting immediate engagement uses the persistent top bar CTA or floating indexer to jump straight to the Scene 5 Project Initiation form.
  3. *Case Study Lightbox Flow*: Visitors browsing Scene 2 click any project card to open an interactive full-screen case modal with challenge, solution, technology stack, and high-res visual gallery.
  4. *Mobile Drawer Flow*: On touch devices, a swipe-friendly bottom navigation bar and gesture-tolerant drawer provide thumb-friendly access to all scenes without obscuring more than 12% of the viewport.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Avant-Garde Minimalist & Editorial. Stark contrast, architectural hairline rules, deep obsidian backdrop (`#09090B`) with warm gallery paper text (`#F4F4F5`), and subtle graphite accents (`#27272A`).
  - *Color Palette & Mood*:
    - 60% Neutral Field: Obsidian `#09090B` and Studio Slate `#121215`.
    - 30% Structural Surfaces: Subtle borders (`rgba(255,255,255,0.08)`), matte card backgrounds (`#18181B`), muted captions (`#A1A1AA`).
    - 10% Accent Accentuation: Pure Alabaster White (`#FFFFFF`) and warm amber/ochre highlight (`#F59E0B`) for active state focus and critical conversion points.
  - *Typography & Hierarchy*:
    - Display / Headings: `Outfit` / `Plus Jakarta Sans` with tight tracking (`tracking-tight`) and refined balance (`text-wrap: balance`).
    - Body Copy: `DM Sans` / `Plus Jakarta Sans` at 15px/16px with generous line height (1.6) and comfortable line length (60–70ch).
    - Data & Metrology: `font-mono tabular-nums` for project numbers, year stamps, and metric counters.
  - *Component Styling & Zero-Pill Discipline*:
    - Metadata rendered strictly as unboxed text separated by subtle typographic dots (`·`).
    - No fake terminal prefixes, no decorative green pulsing dots, no code-comment titles.
    - Top navigation adheres strictly to the 3-zone contract (1-line Brand wordmark, 4 clean text links, 1 high-intent CTA).

- **Mobile-First & SEO Architecture**:
  - Full-width touch targets with minimum 44px hitboxes and generous finger padding.
  - Strict sticky surface height cap below 15% of mobile viewport.
  - Embedded JSON-LD schema (`ProfessionalService`) specifying studio coordinates, opening hours, area served, and key offerings.
  - Full semantic DOM hierarchy (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) ensuring non-JS crawlers and screen readers receive complete content.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Mixed Navigation (Story Stream + Section Indexer)**
  - *Chosen Approach*: Deliver both continuous scroll with smooth scene transitions and a floating micro-indexer (desktop right edge / mobile bottom sheet toggle) that exposes direct anchors.
  - *Why*: Accommodates both exploratory visitors wanting visual immersion and decision-makers seeking immediate credentials or pricing.
  - *Alternatives Considered*: Pure linear scrolling (forces impatient visitors to scroll through every section) or pure tabbed app (loses editorial pacing and visual impact).

- **Decision 2: Image Generation Strategy (Batch Generated Visuals + SVG Fallbacks)**
  - *Chosen Approach*: Generate high-impact editorial visuals in a single parallel batch via `generate_image`:
    1. `hero_cinematic_studio_architecture` (16:9)
    2. `case_study_minimalist_spatial_branding` (4:3)
    3. `case_study_digital_interactive_sculpture` (4:3)
    4. `case_study_luxury_editorial_typography` (4:3)
    5. `studio_creative_director_portrait` (1:1)
    All image slots backed by structured CSS/SVG fallback containers with zero reliance on external placeholder services.
  - *Why*: Ensures pristine aesthetic cohesion without network flakiness.

- **Decision 3: Interactive Project Inquiry Engine vs Static Form**
  - *Chosen Approach*: A responsive 3-step interactive scope builder (Discipline Selection $\rightarrow$ Timeline & Budget $\rightarrow$ Contact Details) with instant summary generation and validation.
  - *Why*: Dramatically increases engagement and gives prospective clients tangible clarity on collaboration scope.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Navigation Bar                              │
│   [AURA STUDIO]   ──   [Works · Disciplines · Studio · Journal]   ──   │
│                        [Start a Project]                               │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│                    Mixed Navigation Controller                         │
│       (Active Section Spy, Direct Anchor Jumps, Keyboard Arrows)       │
└──────┬───────────────────────────┼──────────────────────────────┬──────┘
       │                           │                              │
┌──────▼───────┐            ┌──────▼───────┐              ┌───────▼──────┐
│   Scene 1    │            │   Scene 2    │              │   Scene 3    │
│  The Hero &  │            │ Selected     │              │ Disciplines  │
│ Brand Ethos  │            │ Bento Works  │              │  & Method    │
└──────┬───────┘            └──────┬───────┘              └───────┬──────┘
       │                           │                              │
       │                   ┌───────▼───────┐                      │
       │                   │ Case Lightbox │                      │
       │                   │ Detail Modal  │                      │
       │                   └───────────────┘                      │
┌──────▼───────┐                                          ┌───────▼──────┐
│   Scene 4    │                                          │   Scene 5    │
│ The Studio & │                                          │ Project Est. │
│ Social Proof │                                          │ & Inquiry    │
└──────────────┘                                          └───────┬──────┘
                                                                  │
                                                          ┌───────▼──────┐
                                                          │ Studio Footer│
                                                          │ SEO JSON-LD  │
                                                          └──────────────┘
```

- **Data Model & State**:
  - `activeSceneId`: Currently highlighted viewport scene (`'hero' | 'works' | 'disciplines' | 'studio' | 'contact'`).
  - `activeCaseModal`: Nullable project entity for full-fidelity modal inspection.
  - `filterCategory`: Active portfolio filter (`'all' | 'spatial' | 'digital' | 'brand'`).
  - `inquiryState`: Client inquiry builder selections (disciplines, timeline, budget tier, contact info, submission status).
- **Interactive State Transitions**:
  - Floating indexer auto-synchronizes with scroll position via IntersectionObserver with debounced highlight.
  - Category filters animate project grid layout seamlessly.
  - Full modal locks background scroll and traps keyboard focus with `Escape` dismiss.
  - Form validation provides immediate inline feedback with clear error messaging.
