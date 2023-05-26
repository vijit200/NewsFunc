import React from "react";
import {
  Link
} from "react-router-dom";





export default function Navbar(props) {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand" href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Apple_News_icon_%28iOS%29.png/600px-Apple_News_icon_%28iOS%29.png" width="30" height="30" class="d-inline-block align-top mr-2" alt=""></img>
          Newsly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">
              business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/entertainment">
              entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/health">
              health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/science">
              science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sports">
              sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/technology">
              technology
              </Link>
            </li>
          </ul>
        </div>
        <a href="/" class="btn btn-primary btn-sm active" role="button" aria-pressed="true" onClick={props.toggleMode}>{props.mode}</a>
      </nav>
    </div>
  );
}
