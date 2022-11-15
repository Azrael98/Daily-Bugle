import { React } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  let data;
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Daily Bugle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => {
                          props.updateCountryName("India");
                          props.updateCountry("in");
                        }}
                      >
                        India
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => {
                          props.updateCountryName("USA");
                          props.updateCountry("us");
                        }}
                      >
                        USA
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => {
                          props.updateCountryName("Russia");
                          props.updateCountry("ru");
                        }}
                      >
                        Russia
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => {
                          props.updateCountryName("Australia");
                          props.updateCountry("au");
                        }}
                      >
                        Australia
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-3">
            <input
              type="text"
              className="form-control "
              placeholder="Type to Search..."
              value={props.value}
              onChange={(e) => {
                data = e.target.value;
              }}
            />
          </div>
          <button
            onClick={() => {
              props.setSearch(data);
            }}
          >
            <Link type="button" class="btn btn-primary" to="/search">
              Search
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
