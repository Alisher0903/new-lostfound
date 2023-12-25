import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { byId } from "../../api/api";

export const AboutHome = () => {

    const goAbout = () => byId("goAbout").click();
    
    return (<>
        <Link to="/about" id="goAbout"></Link>
        <Container className="aboutMe-container">
            <Row className="w-100 mt-5 pt-5">
                <Col className="col-12 col-md-7 col-lg-6 aboutMe-box">
                    <div className="about__img" onClick={goAbout}>
                        <img src={require("../../assets/homeImages/about.png")} alt="img" />
                    </div>
                </Col>
                <Col className="col-12 col-md-5 col-lg-6 about__text">
                    <h2>What is Lorem Ipsum?</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    </p>
                </Col>
            </Row>
        </Container>
    </>)
}