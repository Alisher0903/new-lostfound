import React, { useEffect, useState, useRef } from "react";
import "./defouldNav.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { api, byId } from "../api/api";
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";

import { createPopper } from "@popperjs/core";
import { toast } from "react-toastify";
export const ItemNavs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(false);
  const [getMe, setGetme] = useState(false);

  useEffect(() => {
    getme();
  }, []);

  const openCurrentModal = () => setCurrentModal(!currentModal);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const goSearch = () => byId("search2").click();

  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  let popperInstance = null;

  const openModal = () => {
    setShowModal(true);
    popperInstance = createPopper(buttonRef.current, modalRef.current, {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            boundary: document.querySelector(".app"),
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top"],
          },
        },
      ],
    });
  };

  const closeModal = () => {
    setShowModal(false);
    if (popperInstance) {
      popperInstance.destroy();
    }
  };

  function getme() {
    axios
      .get(api + "current-user/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setGetme(res.data);
        console.log(res.data);
      })
      .catch(() => {});
  }

  function editProfile() {
    const addData = new FormData();
    addData.append("username", byId("username").value);
    addData.append("image", byId("avatar").files[0]);

    axios.put(api + "profile/edit/", addData, {
      headers: { Authorization: sessionStorage.getItem("jwtToken") },
    })
    .then(() => {
      openCurrentModal();
      toast.success("Profile successfully edit");
      getme();
    })
    .catch(() => toast.error("Something is error"));
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
                  <span>home</span>
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
                      <h5
                        onClick={() => {
                          openCurrentModal();
                          getme();
                        }}
                      >
                        Profile
                      </h5>
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
                <div className="search-avatar">
                  <img
                    className="img-fluid"
                    src={
                      getMe.image !== null
                        ? "https://lostfound.pythonanywhere.com/" + getMe.image
                        : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    }
                    alt=".."
                  />
                </div>

                <h5 ref={buttonRef} onClick={openModal} className="mt-2">
                  Profile
                </h5>
                <div
                  className="app"
                  style={{
                    position: "relative",
                  }}
                >
                  {showModal && (
                    <div
                      className="row"
                      ref={modalRef}
                      style={{
                        position: "absolute",
                        top: "4rem",
                        width: "20rem",
                        left: "-13rem",
                        background: "rgb(255,255,255)",
                        background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(34,129,195,1) 85%)",
                        padding: "20px",
                        boxShadow: "0px 0px 10px 2px rgba(0,0,0,0.3)",
                        borderRadius: "3rem",
                      }}
                    >
                      <div className="col-7"></div>
                      <button
                        className="col-3 float-end"
                        onClick={closeModal}
                        style={{
                          padding: "8px 16px",
                          fontSize: "14px",
                          backgroundColor: "lightcoral",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          color: "white",
                        }}
                      >
                        X
                      </button>

                      <div className="search-avatar-pr col-12">
                        <img
                          className="img-fluid"
                          src={
                            getMe.image !== null
                              ? "https://lostfound.pythonanywhere.com/" +
                                getMe.image
                              : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                          }
                          alt=".."
                        />
                      </div>

                      <div className="col-12 d-flex" style={{flexDirection: "column", justifyContent: "center"}}>
                          <h4 className="mt-3 text-center">{getMe.username}</h4>
                          <h4 className="mt-3 text-center">{getMe.phone_number}</h4>
                      </div>
                      <div className="col-12 mt-3 d-flex justify-content-center">

                          <button className="edit-button" onClick={() => {
                              openCurrentModal()
                              closeModal()
                          }} >Edit</button>
                      </div>
                    </div>
                  )}
                </div>
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
            <img
              style={{
                width: "300px",
                borderRadius: "10rem",
                height: "300px",
                objectFit: "cover"

              }}
              src={
                getMe.image !== null
                  ? "https://lostfound.pythonanywhere.com/" + getMe.image
                  : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              }
              alt=".."
            />
          </div>
          <div>
            <b className="mb-3">Username:</b>
            <Input type="text" id="username" className="bg-secondary mt-3" defaultValue={getMe.username}/>

          </div>
          <div>
            <b className="mb-3">Avatar:</b>

            <Input type="file" id="avatar" className="bg-secondary mt-3"/>
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
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-success"
            onClick={editProfile}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
