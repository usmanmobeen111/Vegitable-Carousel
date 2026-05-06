# 🍓 FreshSlice — Vegetable & Fruit Carousel

> A cinematic, full-screen fruit/vegetable slider built with React, Swiper, Framer Motion, and TailwindCSS v4.

---

## ✨ Features

- **Full-screen horizontal slides** — each fruit/vegetable occupies the entire viewport
- **Letter-mask effect** — a giant first letter (e.g. "B" for Blueberry) clips the fruit image at full brightness, while the rest of the slide is dark and moody
- **Framer Motion animations** — every slide transition re-triggers entrance animations for the letter, title, divider, description, and button
- **Glassmorphism Navbar** — fixed top bar with a leaf logo and gradient fade into the slide
- **Custom dot pagination** — inactive dots: gray 50% transparent · active dot: white elongated pill
- **Swipe-bounded** — first slide blocks leftward swipe, last slide blocks rightward (no looping)
- **Overview button** — frosted-glass pill with a smooth fill-on-hover effect
- **Fully responsive** — fluid `clamp()` sizing for letter, title, and description across all screen sizes

---

## 🛠 Tech Stack

| Technology | Role |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| TypeScript | Type safety |
| TailwindCSS v4 | Utility-first styling |
| Swiper 12 | Touch-enabled slider |
| Framer Motion 12 | Entrance & exit animations |
| react-icons 5 | Navbar leaf icon |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed glassmorphism top bar with logo
│   ├── FruitSlider.tsx  # Swiper wrapper, activeIndex tracking
│   └── SlideItem.tsx    # Full-screen slide with letter-mask effect
├── data/
│   └── fruits.ts        # Fruit/vegetable data (name, image, description, color)
├── App.tsx              # Root layout
└── index.css            # Global styles + Swiper pagination overrides
public/
└── img/                 # Fruit/vegetable images (Blueberry.jpg, Cherry.jpg, …)
```

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

---

## ➕ Adding a New Fruit / Vegetable

1. Add the image to `public/img/YourFruit.jpg`
2. Open `src/data/fruits.ts` and append a new entry:

```ts
{
  id: 10,
  name: "Watermelon",
  image: "/img/Watermelon.jpg",
  description: "Your description here.",
  color: "#38A169",
}
```

That's it — the slider picks it up automatically.

---

## 🎨 Design Notes

- The **letter-mask** trick uses CSS `background-clip: text` + `background-image: url(image)` on the `<h1>`, making the fruit image visible exclusively inside the letter shape.
- The **dark atmosphere** is achieved with two layers: the background image at `opacity: 0.18` + a `rgba(0,0,0,0.52)` overlay on top.
- **Pagination pills** are customized via `.swiper-pagination-bullet` and `.swiper-pagination-bullet-active` in `index.css`.
- Animations **re-trigger on every slide** because `FruitSlider` tracks `activeIndex` and passes `isActive` to each `SlideItem`, which uses `AnimatePresence mode="wait"`.

---

## 📄 License

MIT — free to use, modify, and distribute.
