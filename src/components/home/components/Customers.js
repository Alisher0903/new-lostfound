import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Icon } from "@iconify/react";
import { Col, Row } from 'reactstrap';

const Customers = () => {

    const handlePrevButtonClick = (e) => {
        e.preventDefault();
        carousel.slidePrev();
    };

    const handleNextButtonClick = (e) => {
        e.preventDefault();
        carousel.slideNext();
    };

    let carousel;

    const responsive = {
        0: { items: 1 },
        900: { items: 2 },
    };

    const data = [
        <div key={1}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
        <div key={2}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
        <div key={3}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-line" color="black" />
                            <Icon icon="ri:star-line" color="black" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
        <div key={4}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
        <div key={5}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-line" color="black" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
        <div key={6}>
            <Row className="w-100 customers__row">
                <Col className="col-12 col-sm-6 col-lg-4 customer__img">
                    <div>
                        <img src={require("../../assets/homeImages/customers.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-lg-8 customer__info">
                    <h2>Javokhir Koziboyev</h2>
                    <p>
                        <span>Customers</span>
                        <span>
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                            <Icon icon="ri:star-fill" color="yellow" />
                        </span>
                    </p>
                </Col>
            </Row>
            <p className='customers__par'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
        </div>,
    ];

    return (
        <>
            <h1 className='customer-heading'>What Our Customers Say</h1>
            <div className="customers-main-carousel">
                <button className="customers-prev d-none d-md-inline" onClick={handlePrevButtonClick}>
                    <Icon icon="ooui:next-rtl" width="20" height="20" />
                </button>
                <div className='alice-carousel'>
                    <AliceCarousel
                        items={data.map((item, i) => (
                            <div key={i} className="p-4 customers_items">
                                {item}
                            </div>
                        ))}
                        responsive={responsive}
                        autoPlay
                        autoPlayInterval={5000}
                        infinite
                        mouseTracking
                        disableButtonsControls
                        controlsStrategy="responsive"
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        ref={(el) => (carousel = el)}
                    />
                </div>
                <button className="customers-next d-none d-md-inline" onClick={handleNextButtonClick}>
                    <Icon icon="ooui:next-ltr" width="20" height="20" />
                </button>
            </div>

            {/* newsletter */}
            <div className='newsletter_main'>
                <div className="newsletter_width">
                    <h2>Subscribe Newsletter</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type
                    </p>
                    <textarea
                        id="newsletterInfo"
                        className='form-control p-4'
                        placeholder='Write me....'
                        rows="6"></textarea>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};

export default Customers;
