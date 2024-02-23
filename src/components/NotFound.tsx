import "../styles/404.css";

export const NotFound = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <div className="fof">
            <h1>Error 404</h1>
            <p>Ooops! Looks like a programmer fell asleep..</p>
            <a className="btn btn-primary btn-lg mt-5" href="/">
              GO TO START
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
