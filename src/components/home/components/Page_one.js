import {Col, Row} from "reactstrap";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";

function PageOne() {

    const items = [
        <div key={1}>
            <Row className="w-100">
                <Col className="text-start order-2 order-lg-1 col-6 col-lg-4">
                    <div className="one__img ms-3">
                        <img src={require("../../assets/homeImages/home.png")} alt="img"/>
                    </div>
                </Col>
                <Col className="text-center order-1 order-lg-2 col-12 col-lg-4 info__text">
                    <h2>
                        <span>Lost</span>
                        <span>and</span>
                        <span>Found</span>
                    </h2>
                    <h3>Buyumlaringizni topishingiz yanada oson</h3>
                    <p>
                        Topgan buyumlarizni joylashtiring va yo’qotgan buyumlarizni biz bilan birga toping
                    </p>
                </Col>
                <Col className="text-end pe-1 order-3 col-6 col-lg-4">
                    <div className="two__img">
                        <img className="img-fluid" src={require("../../assets/homeImages/qiz.png")} alt="img"/>
                    </div>
                </Col>
            </Row>
        </div>,
        <div key={2}>
            <Row className="w-100">
                <Col className="text-start order-2 order-lg-1 col-6 col-lg-4">
                    <div className="one__img ms-3">
                        <img src={require("../../assets/homeImages/noutbuk.webp")} alt="img"/>
                    </div>
                </Col>
                <Col className="text-center order-1 order-lg-2 col-12 col-lg-4 info__text">
                    <h2>
                        <span>Lost</span>
                        <span>and</span>
                        <span>Found</span>
                    </h2>
                    <h3>Buyumlaringizni topishingiz yanada oson</h3>
                    <p>
                        Topgan buyumlarizni joylashtiring va yo’qotgan buyumlarizni biz bilan birga toping
                    </p>
                </Col>
                <Col className="text-end pe-1 order-3 col-6 col-lg-4">
                    <div className="two__img">
                        <img className="img-fluid" src={require("../../assets/homeImages/noutbuk2.webp")} alt="img"/>
                    </div>
                </Col>
            </Row>
        </div>,
        <div key={3}>
            <Row className="w-100">
                <Col className="text-start order-2 order-lg-1 col-6 col-lg-4">
                    <div className="one__img ms-3">
                        <img src={require("../../assets/homeImages/hamyon.jpeg")} alt="img"/>
                    </div>
                </Col>
                <Col className="text-center order-1 order-lg-2 col-12 col-lg-4 info__text">
                    <h2>
                        <span>Lost</span>
                        <span>and</span>
                        <span>Found</span>
                    </h2>
                    <h3>Buyumlaringizni topishingiz yanada oson</h3>
                    <p>
                        Topgan buyumlarizni joylashtiring va yo’qotgan buyumlarizni biz bilan birga toping
                    </p>
                </Col>
                <Col className="text-end pe-1 order-3 col-6 col-lg-4">
                    <div className="two__img">
                        <img className="img-fluid" src={require("../../assets/homeImages/hamyon2.jpg")} alt="img"/>
                    </div>
                </Col>
            </Row>
        </div>,
        <div key={4}>
            <Row className="w-100">
                <Col className="text-start order-2 order-lg-1 col-6 col-lg-4">
                    <div className="one__img ms-3">
                        <img src={require("../../assets/homeImages/kalit.webp")} alt="img"/>
                    </div>
                </Col>
                <Col className="text-center order-1 order-lg-2 col-12 col-lg-4 info__text">
                    <h2>
                        <span>Lost</span>
                        <span>and</span>
                        <span>Found</span>
                    </h2>
                    <h3>Buyumlaringizni topishingiz yanada oson</h3>
                    <p>
                        Topgan buyumlarizni joylashtiring va yo’qotgan buyumlarizni biz bilan birga toping
                    </p>
                </Col>
                <Col className="text-end pe-1 order-3 col-6 col-lg-4">
                    <div className="two__img">
                        <img className="img-fluid" src={require("../../assets/homeImages/kalit2.jpg")} alt="img"/>
                    </div>
                </Col>
            </Row>
        </div>,
    ];

    const responsive = {
        0: {items: 1},
    };

    return (
        <>
            <div className="page_one-main">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={5000}
                    infinite
                    mouseTracking
                    disableButtonsControls
                />
            </div>
        </>
    );
}

export default PageOne;