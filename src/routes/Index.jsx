import Modal from "../components/Modal";

export default function Index() {
  return (
    <section className="container my-5 d-flex flex-column flex-md-row gap-5">
      <article className="col">
        <h1>Welcome to Munamii Cakery</h1>
        <p>
          We offer the most delicious cakes and cupcakes for all kinds of events
          and celebrations. Browse around to discover what you would like to
          buy.
        </p>
      </article>
      <hr />
      <article className="col">
        <h2>Subscribe to email list</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modal"
          >
            Subscribe
          </button>
        </form>
      </article>
      <Modal title="Thank you for subscribing" />
    </section>
  );
}
