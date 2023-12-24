import React from 'react';
import './footer.scss';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function FooTer() {

    let hozirgiVaqt = new Date();
    let kun = hozirgiVaqt.getDate();
    let oy = hozirgiVaqt.getMonth() + 1;
    let yil = hozirgiVaqt.getFullYear();

    return (
        <>
            <div className="container footer-container p-5">
                <hr />
                <Row>
                    <Col className="ps-0 ps-lg-4 col-12 col-md-6 col-lg-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><Link>About</Link></li>
                            <li><Link>Contacat</Link></li>
                            <li><Link>Device</Link></li>
                            <li><Link>Dress</Link></li>
                            <li><a href='#foundProduct'>Found</a></li>
                            <li><a href='#lostProduct'>Lost</a></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4 ps-0 mt-5 mt-md-0">
                        <h5>Contact Us</h5>
                        <ul>
                            <li><Link>Sitemap</Link></li>
                            <li><Link>Privayc & Policy</Link></li>
                            <li><Link>Term Of Use</Link></li>
                            <li><Link>Shipping</Link></li>
                            <li><Link>FAQs</Link></li>
                        </ul>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-4 ps-0 mt-5 mt-lg-0">
                        <h5>Products</h5>
                        <ul>
                            <li>Mustaqillik ko'chasi 50 uy , 2023</li>
                            <li>+998-99-961-51-20</li>
                            <li>lostAndFound@support.com</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <hr />
            <p className='text-center footer-bot'>{`${kun}.${oy}.${yil}`} by Javokhir Koziboyev</p>
        </>
    );

}

export default FooTer;