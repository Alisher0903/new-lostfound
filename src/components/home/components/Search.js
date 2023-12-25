import { Col, Container, Row } from "reactstrap";
import { DefouldNav } from "../../navbars/DefouldNav";
import { Icon } from "@iconify/react";

function SearchHome() {
    return (
        <>
            <DefouldNav />
            <Container style={{marginTop: "15rem"}}>
                <Row className="w-100">
                    <Col className="col-12 col-sm-6 col-lg-3">
                        <div className="search_main">
                            <div className="search_hover">
                                <img
                                    src={require("../../assets/homeImages/hamyon.jpeg")}
                                    className="img-fluid"
                                    alt="images" />
                            </div>
                            <h2>name</h2>
                            <Icon icon="teenyicons:arrow-left-solid" className="ms-2" width="50" height="50" rotate={2} vFlip={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SearchHome;