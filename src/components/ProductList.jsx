import PropTypes from "prop-types";
import ProductListItem from "./ProductListItem";

export default function ProductList({ products, image }) {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} image={image} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
};
