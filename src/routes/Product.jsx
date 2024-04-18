import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Modal from "../components/Modal";

const data = [
  { id: 1, title: "Chocolate Cupcake", price: 2.99 },
  { id: 2, title: "Vanilla Cupcake", price: 2.49 },
  { id: 3, title: "Strawberry Cupcake", price: 3.49 },
  { id: 4, title: "Red Velvet Cupcake", price: 3.99 },
  { id: 5, title: "Lemon Cupcake", price: 2.79 },
  { id: 6, title: "Blueberry Cupcake", price: 3.29 },
  { id: 7, title: "Peanut Butter Cupcake", price: 3.49 },
  { id: 8, title: "Caramel Cupcake", price: 3.79 },
  { id: 9, title: "Classic Wedding Cake", price: 99.99 },
  { id: 10, title: "Elegant Wedding Cake", price: 129.99 },
  { id: 11, title: "Rustic Wedding Cake", price: 89.99 },
  { id: 12, title: "Modern Wedding Cake", price: 149.99 },
  { id: 13, title: "Vintage Wedding Cake", price: 109.99 },
  { id: 14, title: "Bohemian Wedding Cake", price: 119.99 },
  { id: 15, title: "Beach Wedding Cake", price: 99.99 },
  { id: 16, title: "Garden Wedding Cake", price: 109.99 },
];

export default function Product() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === Number(productId));

  return (
    <section className="container my-5">
      <ProductDetail product={product} />
      <Modal title="Thank you for your purchase" />
    </section>
  );
}
