import React from "react";
import {Link} from "react-router-dom";
import icn from "../images/icn.svg";
import "./NavBarBottom.css";
import {Col, Container, Row} from "reactstrap";

const NavBarBottom = () => {
    return (
        <div className="NavBarBottom">
            <Container>
                <Row>
                    <Col>
                        <Link to="/price-it" className="NavBarBottom__first-child">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Price It</span>
                        </Link>
                        <Link to="/basket">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Basket</span>
                        </Link>
                        <Link to="/wishlist">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Wishlist</span>
                        </Link>
                        <Link to="/last-item">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Last Item</span>
                        </Link>
                        <Link to="/notifications">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Notifications</span>
                        </Link>
                        <Link to="/friends" className="NavBarBottom__last-child">
                            <p>22</p>
                            <img src={icn} alt=""/>
                            <span>Friends</span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NavBarBottom