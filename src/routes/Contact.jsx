import Modal from "../components/Modal";

export default function Contact() {
  return (
    <section className="container my-5 d-flex flex-column flex-md-row gap-5">
      <article className="col">
        <h1>Contact us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">
              Your message
            </label>
            <textarea
              className="form-control"
              id="textarea"
              rows="3"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modal"
          >
            Submit
          </button>
        </form>
      </article>
      <hr />
      <article className="col">
        <h2>Home delivery service</h2>
        <p>
          Available throughout the city of Stockholm and Malmö with an
          additional cost.
        </p>
        <h2>Pickup location</h2>
        <p>
          Via la Costa Avenue, Blue Port gated neighborhood. We will send you
          the GPS location via WhatsApp.
        </p>
        <p>
          Orders must be placed 2 days in advance for greater security,
          processing, and availability.
        </p>
        <h2>Operating hours</h2>
        <p>Tuesday to Saturday, 9 a.m. to 2 p.m.</p>
      </article>
      <Modal title="Thank you for contacting us" />
    </section>
  );
}
