import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { api } from "../../api/api";
import { Button, Col, Modal, ModalBody, Row } from "reactstrap";

function LostItems() {
    const [lost, setLost] = useState([]);
    const [lostInfo, setLostInfo] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getLost();
    }, []);

    const openModal = () => setModal(!modal);

    // getLost
    const getLost = () => {
        axios.get(`${api}item/`)
            .then(res => {
                setLost(res.data.filter(t => t.type == "LOST"))
            })
            .catch(() => console.log("lost klemadi!!!"))
    }

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        700: { items: 3 },
        1000: { items: 4 },
    }
    console.log(lostInfo);

    return (
        <div style={{
            marginTop: "5rem",
        }}>
            <h1 className="text-center fs-1 mb-5 fw-bolder">
                <span style={{ color: "#CF1010" }}>Lost </span>
                product
            </h1>

            <div className="text-center">
                <AliceCarousel
                    items={lost.map((item, i) =>
                        <div key={i} className="p-4 lost_items">
                            <img src={item.image} alt="img" />
                            <h4>{item.name}</h4>
                            <p>Location: {item.city}</p>
                            <button onClick={() => {
                                setLostInfo(item);
                                openModal();
                            }}>Info</button>
                        </div>
                    )}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={5000}
                    infinite
                    mouseTracking
                    disableButtonsControls
                />
            </div>

            {/* info modal */}
            <Modal isOpen={modal} centered scrollable size="lg">
                <ModalBody
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    }}>
                    <div className="text-end">
                        <Button
                            onClick={openModal}
                            color="danger"
                            className="fw-bold fs-6 rounded-5"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                            }}>✕</Button>
                    </div>

                    <div className="text-center pe-5 ps-5 lost__modal">
                        <img src={lostInfo.image} alt="img" />
                        <h2>
                            <span>{lostInfo.name}</span>
                            <span>{lostInfo.type}</span>
                        </h2>
                        <Row className="text-start lost_main-info1">
                            <Col className="col-12 col-sm-6 col-lg-4">
                                <span className="me-3 d-sm-none">Category:</span>
                                category
                            </Col>
                            <Col className="col-12 col-sm-6 col-lg-4">
                                <span className="me-3 d-sm-none">Sub category:</span>
                                sub category
                            </Col>
                            <Col className="col-12 col-sm-6 col-lg-4">
                                <span className="me-3 d-lg-none">Brand:</span>
                                {lostInfo.brand}
                            </Col>
                        </Row>
                        <Row className="text-start lost_main-info2">
                            <Col className="col-12 col-sm-6">
                                <span className="me-3">Color_1:</span>
                                {lostInfo.primary_color}</Col>
                            <Col className="col-12 col-sm-6">
                                <span className="me-3">Color_2:</span>
                                {lostInfo.secondary_color}</Col>
                        </Row>
                        <Row className="text-start lost_main-info3">
                            <Col className="col-12 col-lg-6">
                                <span className="me-3">PhoneNumber:</span>
                                {lostInfo.contact_info}
                            </Col>
                            <Col className="col-12 col-lg-6">
                                <span className="me-3">Date:</span>
                                {lostInfo.date}
                            </Col>
                        </Row>
                        <p className="text-start">
                            <span className="me-3">Description:</span>
                            {lostInfo.specific_description}
                        </p>
                    </div>

                    <div
                        className="ps-5 lost_countriy"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "2rem",
                            marginBottom: ".5rem"
                        }}>
                        <p>
                            <span>{lostInfo.country}</span>
                            <span>{lostInfo.city}</span>
                            <span>{lostInfo.street}</span>
                        </p>
                        <Button
                            onClick={openModal}
                            color="danger"
                            className="fw-bold fs-6 rounded-4"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                            }}>Close</Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LostItems;