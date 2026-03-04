

# Audit & Improvement Plan: SuperRelatórios Responsiveness & Usability

## Audit Findings

### Critical Issues

1. **Landing Page Hero**: `min-h-screen` on mobile wastes space; text `text-primary-dark` on blue bg has poor contrast; CTA buttons stack poorly on small screens
2. **AppLayout sidebar**: Uses custom sidebar instead of shadcn Sidebar component; `bg-gradient-subtle` class referenced but not defined in CSS; sidebar has no collapse mechanism on desktop
3. **Dashboard `dashboard-viewport`**: `overflow: hidden` on desktop clips content; on mobile `overflow-y: auto` but combined with `mobile-bottom-bar` causes content hidden behind fixed bar
4. **ReportBuilder**: Has its own sticky header BUT is rendered inside `AppLayout` which already has a header — double header issue; mobile step indicators lack sufficient touch targets; connector lines between steps too short
5. **ReportDetail**: Header actions (Share, Download, Dropdown) all inline — breaks on mobile, no responsive wrapping; no mobile bottom bar for CTAs
6. **Settings**: Desktop sidebar and mobile selector both render simultaneously due to `lg:hidden` vs `hidden lg:block` — but the mobile section renders `w-full` pushing content
7. **Pricing cards**: `scale-105` on highlighted plan causes layout shift on mobile; buttons use `asChild` inconsistently
8. **Footer**: `bg-primary-dark` maps to `hsl(220 91% 20%)` — extremely dark; footer links lack touch targets
9. **`sidebar-background` CSS var**: Set to `249 250 251` (raw RGB values, not HSL) — broken
10. **`App.css`**: Contains Vite boilerplate (`#root` max-width, padding, text-align center) that interferes with layout
11. **Mobile touch targets**: Global CSS rule forces `min-height: 48px` and `padding: 12px 16px` on ALL buttons/links at mobile — causes oversized elements in cards and sidebars
12. **`bg-gradient-subtle`**: Used in Dashboard, Reports, Folders but never defined — falls back to nothing

### Moderate Issues

- Cards use `border-0` inconsistently — some have borders, some don't
- `card-hover` applies `hover:-translate-y-1` which causes layout shifts
- `hover-scale` class used but never defined
- `hover:scale-105` on buttons causes visual jitter
- ReportShowcase "Criar Meu Relatório Agora" button is not linked to anything
- Several CTAs in ReportExamples not linked (Ver Exemplo, Gerar Relatório Modelo)
- `line-clamp-*` used without `@tailwindcss/line-clamp` (built into Tailwind v3.3+, OK)

### Minor Issues

- Animations use `animationDelay` inline styles without initial hidden state — content flashes
- `DocumentExamples` not shown in Index (it is — but between Features and HowItWorks, redundant with ReportShowcase)
- Copyright says 2024

---

## Implementation Plan

### Phase 1: Fix Critical CSS/Layout Bugs

**1.1 Fix `App.css` boilerplate**
- Remove Vite default styles (`#root` max-width, padding, text-align) that constrain layout

**1.2 Fix broken CSS variables**
- Fix `sidebar-background: 249 250 251` → proper HSL `210 20% 98%`
- Add missing `bg-gradient-subtle` utility class

**1.3 Fix overly aggressive mobile touch targets**
- Remove the global `button, a[role="button"]` rule that forces 48px min-height on ALL buttons
- Instead, apply `.touch-target` class only where needed (primary CTAs, nav items)

**1.4 Fix `hover-scale` missing class**
- Add `hover-scale` utility to index.css

### Phase 2: Landing Page Polish

**2.1 Hero section**
- Reduce mobile height from `min-h-screen` to `min-h-[85vh]` for mobile, keep screen for desktop
- Fix contrast: use `text-white` consistently; remove `text-primary-dark` on dark bg
- Add proper spacing and sizing for mobile buttons

**2.2 Connect orphan CTAs**
- ReportShowcase "Criar Meu Relatório Agora" → Link to `/app/novo-relatorio`
- ReportExamples buttons → Link to report builder with templates
- Footer copyright → 2025

**2.3 Header mobile improvements**
- Ensure mobile CTA button is visible and accessible

### Phase 3: App Layout & Navigation

**3.1 Fix double header in ReportBuilder**
- ReportBuilder renders inside AppLayout (which has header) but also has its own sticky header
- Solution: ReportBuilder should be a standalone route outside AppLayout, OR remove its custom header

**3.2 Improve AppLayout responsive behavior**
- Add proper mobile bottom navigation for Dashboard/Reports/Folders
- Ensure sidebar doesn't clash with content on tablet breakpoints

### Phase 4: Page-Level Responsive Fixes

**4.1 Dashboard**
- Fix `dashboard-viewport overflow-hidden` clipping content
- Ensure KPI cards and folders grid works on all breakpoints
- Fix bottom bar overlap with content

**4.2 ReportDetail**
- Make header actions responsive: stack on mobile, inline on desktop
- Add mobile bottom bar with Export/Share CTAs
- Improve Paper component rendering on mobile

**4.3 ReportsList**
- Fix list view on mobile: stack columns vertically
- Ensure filter selects are full-width on mobile

**4.4 Settings**
- Fix layout where mobile selector and desktop sidebar can coexist incorrectly
- Ensure settings content area has proper max-width

**4.5 Folders**
- Ensure empty state CTA is properly linked

### Phase 5: Micro-interactions & Polish

**5.1 Remove jittery hover effects**
- Replace `hover:scale-105` on buttons with subtler `hover:scale-[1.02]`
- Replace `hover:-translate-y-1` with `hover:-translate-y-0.5` and add `will-change-transform`

**5.2 Fix animation flash**
- Add `opacity-0` initial state to elements with `animate-fade-in` delay

**5.3 Consistent card styling**
- Standardize cards: all use border, `rounded-2xl`, consistent shadow

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/App.css` | Remove Vite boilerplate |
| `src/index.css` | Fix sidebar var, add missing utilities, fix touch target rule, add gradient-subtle |
| `src/App.tsx` | Move ReportBuilder outside AppLayout |
| `src/components/Hero.tsx` | Fix contrast, mobile sizing |
| `src/components/ReportShowcase.tsx` | Connect CTA |
| `src/components/ReportExamples.tsx` | Connect CTAs |
| `src/components/Footer.tsx` | Fix year, improve mobile |
| `src/pages/app/Dashboard.tsx` | Fix viewport overflow, bottom bar |
| `src/pages/app/ReportDetail.tsx` | Add responsive header, mobile CTAs |
| `src/pages/app/ReportBuilder.tsx` | Remove duplicate header (now standalone) |
| `src/pages/app/ReportsList.tsx` | Fix mobile list view |
| `src/pages/app/Settings.tsx` | Fix layout structure |
| `src/components/AppLayout.tsx` | Clean up, fix gradient |
| `src/components/ui/button.tsx` | Tone down hover:scale |
| `tailwind.config.ts` | Add missing utilities if needed |

### Estimated scope: ~15 files, focused on CSS fixes, responsive layout corrections, and connecting orphan CTAs.

