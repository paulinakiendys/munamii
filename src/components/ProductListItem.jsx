import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function ProductListItem({ product, image }) {
  return (
    <div key={product.id} className="col-md-6 col-lg-3 mb-3">
      <div className="card">
        <img
          src={image}
          className="img-fluid object-fit-cover"
          alt={product.title}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Price: ${product.price}</p>
          <NavLink className="btn btn-success" to={`/products/${product.id}`}>
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};
