import PropTypes from "prop-types";
import image from "../assets/images/logo.png";

export default function ProductDetail({ product }) {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="Logo" />
        </div>
        <div className="col-md-8 bg-light-subtle">
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              beatae modi mollitia reprehenderit saepe perspiciatis pariatur
              aperiam aspernatur velit. Labore pariatur amet autem. Error, enim
              pariatur. Cumque vero quam eaque!
            </p>
            <form>
              <fieldset>
                <legend>Selection A</legend>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radio"
                    id="radio1"
                  />
                  <label className="form-check-label" htmlFor="radio1">
                    Lorem, ipsum dolor.
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radio"
                    id="radio2"
                  />
                  <label className="form-check-label" htmlFor="radio2">
                    Lorem ipsum dolor sit.
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend>Selection B</legend>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="check1"
                  />
                  <label className="form-check-label" htmlFor="check1">
                    Lorem, ipsum.
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="check2"
                  />
                  <label className="form-check-label" htmlFor="check2">
                    Lorem ipsum dolor sit amet.
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  Buy
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
