import React from "react"; //rafce shortcut creates functional arrow function component
import Post from './Post'
const Nav = (props) => {

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="http://google.com">Chirper</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="http://google.com"> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://google.com">Chirps</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://google.com">Add a Chirp</a>
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
    </div>
  );
};

export default Nav;
