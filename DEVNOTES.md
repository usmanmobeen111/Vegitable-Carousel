# 📓 FreshSlice — Developer Notes

> Private notes explaining what was built, key decisions, and how to extend the project.

---

## What Was Built

A complete redesign of the Vegetable Carousel from scratch, replacing the basic vertical placeholder layout with a **cinematic full-screen horizontal Swiper slider**.

---

## Key Components

### `Navbar.tsx`
- Fixed position, `z-50`, rendered above the slider at all times.
- Uses a vertical gradient (`rgba(0,0,0,0.75) → transparent`) instead of a solid background so it melts visually into each slide.
- Logo: `LuLeaf` icon from `react-icons/lu` inside a frosted-glass square + "FreshSlice" wordmark.
- **Nothing on the right side** — kept clean per spec.

### `FruitSlider.tsx`
- Wraps Swiper with `loop={false}` — hard boundaries, no looping.
- Tracks `activeIndex` via `onSlideChange`. This is **critical** — it passes `isActive` to each `SlideItem` so Framer Motion animations replay on every slide.
- Swiper CSS (`swiper/css` + `swiper/css/pagination`) is imported here as JS imports, not in CSS, to avoid Tailwind @import chain conflicts.

### `SlideItem.tsx`
- **Layer stack (bottom → top):**
  1. `<img>` background at `opacity: 0.18` — dark, moody atmosphere
  2. `rgba(0,0,0,0.52)` overlay — deepens the darkness
  3. `AnimatePresence` content — only renders when `isActive === true`
- **The letter-mask trick:**
  ```css
  backgroundImage: url(fruit.image)
  backgroundSize: cover
  backgroundPosition: center
  WebkitBackgroundClip: text
  backgroundClip: text
  color: transparent
  ```
  This clips the full-brightness image to the letter shape. The rest of the slide is dark so the contrast is dramatic.
- **Why `onMouseEnter/Leave` instead of Framer `whileHover`?**
  Framer Motion's `whileHover` with `style` background colors can conflict with `AnimatePresence` exit animations. Direct DOM style mutation is simpler and reliable here.
- **`AnimatePresence mode="wait"`** — waits for the exit animation to finish before mounting the new slide's content. Prevents overlap.

### `index.css`
- Global reset: `*, html, body, #root { height: 100%; overflow: hidden; }`
- Swiper pagination overrides:
  - Inactive: `8×8px`, `rgba(180,180,180,0.5)` circle
  - Active: `26×8px` elongated pill, `rgba(255,255,255,0.95)`
  - Custom `gap` between dots using flexbox on `.swiper-pagination`

---

## Responsive Strategy
- All font sizes use `clamp(min, preferred-vw, max)` — no hard breakpoints needed for the core visual.
- Navbar wordmark hides on `< sm` screens (`hidden sm:block`).
- Description `maxWidth` uses `clamp(270px, 38vw, 500px)`.

---

## How to Extend

**Change the brand name:** Edit the `<span>` in `Navbar.tsx`.

**Change the brand icon:** Swap `LuLeaf` for any icon from `react-icons` — e.g. `GiAvocado`, `MdEco`, `TbApple`.

**Add a fruit:** Push a new object to `src/data/fruits.ts` and drop the image in `public/img/`.

**Add a color-accent per slide:** The `color` field in `fruits.ts` (e.g. `"#2C5282"` for Blueberry) is available on each `fruit` prop in `SlideItem`. You could use it to tint the dot pagination or add a subtle glow to the letter.

**Add arrow navigation:** Install `Navigation` from `swiper/modules`, import `swiper/css/navigation`, and add `<div className="swiper-button-prev" />` / `<div className="swiper-button-next" />` inside the `<Swiper>`.

---

## Dependencies Added/Used
| Package | Version | Why |
|---|---|---|
| `swiper` | ^12 | Pre-installed, used for touch slider |
| `framer-motion` | ^12 | Pre-installed, used for all animations |
| `react-icons` | ^5 | Pre-installed, used for navbar leaf icon |
| `tailwindcss` | v4 | Pre-installed, utility classes + @theme tokens |
