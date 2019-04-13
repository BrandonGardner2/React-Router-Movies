import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span key={movie.id} className="saved-movie">
          <NavLink to={`/${movie.id}`}>{movie.title}</NavLink>
        </span>
      ))}
      <NavLink to="/" className="home-button">
        Home
      </NavLink>
    </div>
  );
};

export default SavedList;
