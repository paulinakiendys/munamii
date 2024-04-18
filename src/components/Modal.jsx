import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Modal({ title }) {
  return (
    <div
      className="modal fade"
      id="modal"
      tabIndex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            mollitia harum dignissimos aspernatur quod ipsam voluptas molestiae
            fuga non.
          </div>
          <div className="modal-footer">
            <NavLink to={`/products`}>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Continue shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
};
