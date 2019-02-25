import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span key={movie.id} className="saved-movie">
          <Link to={`/${movie.id}`}>{movie.title}</Link>
        </span>
      ))}
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
};

export default SavedList;
