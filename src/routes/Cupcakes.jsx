import image from "../assets/images/cupcake.jpg";
import ProductList from "../components/ProductList";

const data = [
  { id: 1, title: "Chocolate Cupcake", price: 2.99 },
  { id: 2, title: "Vanilla Cupcake", price: 2.49 },
  { id: 3, title: "Strawberry Cupcake", price: 3.49 },
  { id: 4, title: "Red Velvet Cupcake", price: 3.99 },
  { id: 5, title: "Lemon Cupcake", price: 2.79 },
  { id: 6, title: "Blueberry Cupcake", price: 3.29 },
  { id: 7, title: "Peanut Butter Cupcake", price: 3.49 },
  { id: 8, title: "Caramel Cupcake", price: 3.79 },
];

export default function Cupcakes() {
  return <ProductList products={data} image={image} />;
}
