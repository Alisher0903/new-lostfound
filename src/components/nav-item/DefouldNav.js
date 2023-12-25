import React, { useState } from "react";
import "./defouldNav.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { byId } from "../api/api";
import { Input } from "reactstrap";

export const ItemNavs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const goSearch = () => byId("search").click();

  return (
    <>
      <header>
        <Link id="search" to="/search"></Link>

        <nav className="fixed-top">
          <div className="mobile_nav p-3 d-md-none">
            <div className="mobilenav_box">
              <div className="nav_brand">
                <Link to="/">
                  <span>Lost</span>
                  <span className="text-light">and</span>
                  <span>Found</span>
                </Link>
              </div>
              <div className="burger-menu" onClick={toggleNavbar}>
                {isOpen ? "✕" : "☰"}
              </div>
            </div>
            <div className="mobilenav_heddin">
              <div
                className={
                  isOpen ? "nav-links-mobile show_mobile" : "nav-links-mobile"
                }
              >
                <ul>
                  <li>
                    <form class="d-flex justify-content-center" role="search">
                      <div className="w-75 d-flex justify-content-center">
                        {/* {(a=b) ? "uechdh" : "wutfdu"} */}
                        <button class="btn btn-success" type="submit">
                          Search
                        </button>
                      </div>
                    </form>
                  </li>
                  <li>
                    <div>
                      <Icon icon="ri:user-line" width="30" color="#fff" />
                      <h5>Profile</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="destop_nav d-none d-md-inline">
            <div className="container py-4">
              <div className="nav_brand">
                <Link to="/">
                  <span>Lost</span>
                  <span className="text-light">and</span>
                  <span>Found</span>
                </Link>
              </div>
              <div className="nav_search">
                  <div className="">
                    <button class="btn btn-success" onClick={goSearch}>
                      Search
                    </button>
                  </div>
                {/* <div className="ms-5"> */}
                  <Icon className="ms-4" icon="ri:user-line" width="30" color="#fff" />
                  <h5>Profile</h5>
                {/* </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
