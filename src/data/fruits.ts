export type Fruit = {
  id: number;
  name: string;
  image: string;
  description: string;
  color: string;
};

export const fruits: Fruit[] = [
  {
    id: 1,
    name: "Beans",
    image: "/img/Beans.jpg",
    description:
      "Rich in plant-based protein and fiber, beans bring a grounded, earthy flavor that fuels your body and keeps you energized throughout the day.",
    color: "#6B4F3A", // earthy brown
  },
  {
    id: 2,
    name: "Berries",
    image: "/img/Berries.jpg",
    description:
      "A vibrant mix of nature’s finest, berries deliver a burst of antioxidants, balancing sweetness and tartness in every bite.",
    color: "#9B2C2C", // deep berry red
  },
  {
    id: 3,
    name: "Blueberry",
    image: "/img/Blueberry.jpg",
    description:
      "Tiny but powerful, blueberries are packed with antioxidants and offer a deep, juicy sweetness with every bite.",
    color: "#2C5282", // rich blue
  },
  {
    id: 4,
    name: "Cherry",
    image: "/img/Cherry.jpg",
    description:
      "Bold in color and flavor, cherries combine natural sweetness with a subtle tart edge that refreshes instantly.",
    color: "#C53030", // cherry red
  },
  {
    id: 5,
    name: "Coconut",
    image: "/img/Coconut.jpg",
    description:
      "Smooth, creamy, and tropical, coconut delivers hydration and richness, giving you a taste of island freshness.",
    color: "#F7FAFC", // soft off-white
  },
  {
    id: 6,
    name: "Kiwi",
    image: "/img/Kiwi.jpg",
    description:
      "Bright green and tangy, kiwi is loaded with vitamin C and delivers a refreshing zing that wakes up your senses.",
    color: "#68D391", // fresh green
  },
  {
    id: 7,
    name: "Mango",
    image: "/img/Mango.jpg",
    description:
      "Golden, juicy, and irresistibly sweet, mango is the king of fruits, offering a rich tropical flavor experience.",
    color: "#F6AD55", // warm mango orange
  },
  {
    id: 8,
    name: "Orange",
    image: "/img/Orange.jpg",
    description:
      "Fresh and zesty, oranges are bursting with citrus energy, delivering a perfect balance of sweetness and acidity.",
    color: "#ED8936", // vibrant orange
  },
  {
    id: 9,
    name: "Strawberry",
    image: "/img/Strawberry.jpg",
    description:
      "Soft, fragrant, and naturally sweet, strawberries bring a classic flavor that feels both comforting and indulgent.",
    color: "#E53E3E", // strawberry red
  },
];