import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error.status == 404) {
    return (
      <div className="error-container container">
        <h1>
         Erorr 404: <br /> Developers are fixing it, grab a cup of tea in the meantime.
        </h1>
        <Link className="btn" path="/">go to home</Link>
      </div>
    );
  }
  return (
    <div className="error-container container">
      <h1>Error 404: <br /> Someting went Wrong :(</h1>
        <Link className="btn" path="/">go to home</Link>

    </div>
  );
}

export default ErrorPage;
