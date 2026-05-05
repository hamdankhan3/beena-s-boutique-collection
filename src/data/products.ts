import unstitched from "@/assets/cat-unstitched.jpg";
import nighty from "@/assets/cat-nighty.jpg";
import men from "@/assets/cat-men.jpg";
import perfumes from "@/assets/cat-perfumes.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import hero from "@/assets/hero-woman.jpg";

export type Category =
  | "women-stitched"
  | "women-unstitched"
  | "nighty"
  | "men-stitched"
  | "men-unstitched"
  | "perfumes"
  | "women-accessories"
  | "women-undergarments"
  | "men-undergarments";

export type Product = {
  id: string;
  name: string;
  price: number; // PKR
  image: string;
  category: Category;
  description: string;
  darazUrl?: string;
};

export const categoryMeta: Record<Category, { label: string; image: string }> = {
  "women-stitched": { label: "Women — Stitched", image: hero },
  "women-unstitched": { label: "Women — Unstitched", image: unstitched },
  nighty: { label: "Nighty", image: nighty },
  "men-stitched": { label: "Men — Stitched", image: men },
  "men-unstitched": { label: "Men — Unstitched", image: unstitched },
  perfumes: { label: "Perfumes", image: perfumes },
  "women-accessories": { label: "Women Accessories", image: accessories },
  "women-undergarments": { label: "Women Undergarments", image: nighty },
  "men-undergarments": { label: "Men Undergarments", image: men },
};

export const featuredCategories: Category[] = [
  "women-stitched",
  "women-unstitched",
  "men-stitched",
  "nighty",
  "perfumes",
  "women-accessories",
];

export const products: Product[] = [
  { id: "ws-01", name: "Emerald Embroidered Suit", price: 6500, image: hero, category: "women-stitched", description: "A flowing stitched suit with delicate gold thread embroidery on premium chiffon." },
  { id: "ws-02", name: "Ivory Silk Anarkali", price: 8900, image: hero, category: "women-stitched", description: "Stitched anarkali in ivory silk, hand-finished." },
  { id: "wu-01", name: "Cream Lawn 3-Piece", price: 3200, image: unstitched, category: "women-unstitched", description: "Premium summer lawn 3-piece — shirt, trouser & dupatta." },
  { id: "wu-02", name: "Pearl Cotton 3-Piece", price: 3800, image: unstitched, category: "women-unstitched", description: "Soft cotton unstitched 3-piece in a quiet ivory tone." },
  { id: "ng-01", name: "Blush Cotton Nighty", price: 1800, image: nighty, category: "nighty", description: "Breathable cotton nighty with a relaxed cut." },
  { id: "ng-02", name: "Mist Grey Nighty", price: 1900, image: nighty, category: "nighty", description: "Soft pastel nighty with ruffle hem." },
  { id: "ms-01", name: "Ivory Stitched Kurta", price: 4200, image: men, category: "men-stitched", description: "Crisp ivory kurta with subtle emerald button detail." },
  { id: "ms-02", name: "Charcoal Shalwar Kameez", price: 5500, image: men, category: "men-stitched", description: "Tailored shalwar kameez in charcoal cotton blend." },
  { id: "mu-01", name: "Premium Wash & Wear", price: 2400, image: unstitched, category: "men-unstitched", description: "Unstitched wash & wear fabric, 4 metres." },
  { id: "pf-01", name: "Amber Oud — 50ml", price: 3500, image: perfumes, category: "perfumes", description: "Warm oud with amber and vanilla base notes." },
  { id: "pf-02", name: "Citrus Bloom — 50ml", price: 2900, image: perfumes, category: "perfumes", description: "Fresh citrus opening with white floral heart." },
  { id: "wa-01", name: "Emerald Silk Scarf", price: 1500, image: accessories, category: "women-accessories", description: "Pure silk scarf in deep emerald." },
  { id: "wa-02", name: "Tan Leather Handbag", price: 4800, image: accessories, category: "women-accessories", description: "Compact tan leather top-handle bag." },
  { id: "wug-01", name: "Cotton Comfort Set", price: 1200, image: nighty, category: "women-undergarments", description: "Soft cotton everyday comfort set." },
  { id: "mug-01", name: "Classic Cotton Brief — 3 Pack", price: 1100, image: men, category: "men-undergarments", description: "Breathable cotton briefs, pack of three." },
];
