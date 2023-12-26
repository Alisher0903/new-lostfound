import React, { useEffect, useState } from "react";
import "./defouldNav.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { api, byId } from "../api/api";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";

export const ItemNavs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(false);
  const [getMe, setGetme] = useState(false);

  useEffect(() => {
    getme()
  }, [])


  const openCurrentModal = () => setCurrentModal(!currentModal);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const goSearch = () => byId("search2").click();

  function getme() {
    axios.get(api + "current-user/", {
      headers: { Authorization: sessionStorage.getItem("jwtToken") },
    })
    .then((res) => {
      setGetme(res.data)
      console.log(res.data);
    })
    .catch(() => {})
  }

  return (
    <>
      <header>
        <Link id="search2" to="/search my profile"></Link>

        <nav className="fixed-top">
          <div className="mobile_nav p-3 d-md-none">
            <div className="mobilenav_box">
              <div className="nav_brand">
                <Link to="/">
                  <span>Back</span>
                  <span className="text-light">to</span>
                  <span>profile</span>
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
                      <h5 onClick={() => {
                        openCurrentModal()
                        getme()
                      }}>Profile</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="destop_nav d-none d-md-inline">
            <div className="container py-4">
              <div className="nav_brand2">
                <Link to="/">
                  <span>Back</span>
                  <span className="text-light">to</span>
                  <span>home</span>
                </Link>
              </div>
              <div className="nav_search">
                <div className="">
                  <button class="btn btn-success" onClick={goSearch}>
                    Search
                  </button>
                </div>
                {/* <div className="ms-5"> */}
                <Icon
                  className="ms-4"
                  icon="ri:user-line"
                  width="30"
                  color="#fff"
                />
                <h5 onClick={openCurrentModal}>Profile</h5>
                {/* </div> */}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Modal isOpen={currentModal} size="lg" scrollable>
        <ModalHeader
          toggle={openCurrentModal}
          className="text-light fs-4 fw-bolder"
        >
          Profile
        </ModalHeader>
        <ModalBody className="modal-body p-4 text-light modal-css">
          <div className="bot">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt=".."/>
          </div>
          <div>
            <b className="mb-3">Username:</b>
            <h4>{getMe.username}</h4>
          </div>
          <div>
          <b className="mb-3">Phone number:</b>

            <h2>{getMe.phone_number}</h2>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openCurrentModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
