import React from 'react';
import './footer.css';
import {Col, Row} from 'reactstrap';

function FooTer() {
    return (
        <>
            <div className="container pt-5">
                <Row>
                    <Col className="col-12 col-md-6 col-lg-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About</li>
                            <li>Contacat</li>
                            <li>Device</li>
                            <li>Dress</li>
                            <li>Found</li>
                            <li>Lost</li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>Sitemap</li>
                            <li>Privayc & Policy</li>
                            <li>Term Of Use</li>
                            <li>Shipping</li>
                            <li>FAQs</li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                        <h5>Products</h5>
                        <ul>
                            <li>Mustaqillik ko'chasi 50 uy , 2023</li>
                            <li>+998-99-961-51-20</li>
                            <li>lostAndFound@support.com</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    );

}

export default FooTer;