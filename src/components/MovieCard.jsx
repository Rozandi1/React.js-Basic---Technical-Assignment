import React from "react";

function MovieCard(props) {
  console.log(props.movieCard);
  return (
    <>
      {props.movieCard.map((movie) => {
        return (
          <>
            <div id="daftar-anime" className="row">
              <div className="col-lg-6 my-3">
                <div className="card h-100">
                  <img src={movie.image_url} className="card-img-top" alt="skilvul" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2">
                      <span className={`badge bg-danger`}>{movie.type}</span>
                    </h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="card-body">
                    <a href={movie.url} className="btn btn-primary w-100 text-uppercase">
                      readmore
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-6 my-3">
                <div className="card h-100">
                  <img src={movie.image_url} className="card-img-top" alt="skilvul" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6 className="card-subtitle mb-2">
                      <span className={`badge bg-success`}>{movie.type}</span>
                    </h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="card-body">
                    <a href={movie.url} className="btn btn-primary w-100 text-uppercase">
                      readmore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MovieCard;
