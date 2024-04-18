import image from "../assets/images/cake.jpg";
import ProductList from "../components/ProductList";

const data = [
  { id: 9, title: "Classic Wedding Cake", price: 99.99 },
  { id: 10, title: "Elegant Wedding Cake", price: 129.99 },
  { id: 11, title: "Rustic Wedding Cake", price: 89.99 },
  { id: 12, title: "Modern Wedding Cake", price: 149.99 },
  { id: 13, title: "Vintage Wedding Cake", price: 109.99 },
  { id: 14, title: "Bohemian Wedding Cake", price: 119.99 },
  { id: 15, title: "Beach Wedding Cake", price: 99.99 },
  { id: 16, title: "Garden Wedding Cake", price: 109.99 },
];

export default function Cakes() {
  return <ProductList products={data} image={image} />;
}
