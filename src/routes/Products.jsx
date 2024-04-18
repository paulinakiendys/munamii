import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <div className="container my-5">
        <div className="d-flex justify-content-center my-3">
          <NavLink className="nav-link" to={`cupcakes`}>
            <button type="button" className="btn btn-link btn-lg">
              Cupcakes
            </button>
          </NavLink>
          <NavLink className="nav-link" to={`cakes`}>
            <button type="button" className="btn btn-link btn-lg">
              Wedding cakes
            </button>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
