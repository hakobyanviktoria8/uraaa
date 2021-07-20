import React, {useState} from "react";
import "./NavBarTop.css";
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";
import search from "../images/search.svg";
import lang_flag from "../images/lang_flag.svg";
import navBarBottomDD from "../images/navBarBottomDD.svg";
import {Col, Container, Row} from "reactstrap";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import SignIn from "../SignIn/SignIn";
import icn from "../images/icn.svg";

const NavBarTop = ({show}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    //nav bar bottom 70px scrol down
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    return (
        <nav className="navBarTop" style={{"height": show ? "74px" : "54px"}}>
            <Container>
                <Row>
                    <Col>
                        <Link to="/categories" className="categories">
                            <img src={hamburger} alt=""/>
                        </Link>
                        <Link to="/" className="logo">
                            <img src={logo} alt=""/>
                        </Link>
                        <div className="navBarTop__search">
                            <InputGroup>
                                <InputGroupButtonDropdown addonType="append"
                                                          isOpen={dropdownOpen}
                                                          toggle={toggleDropDown}
                                                          className="append">
                                    <DropdownToggle caret  style={{"height": show ? "46px" : "32px"}}>
                                        All
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>one</DropdownItem>
                                        <DropdownItem>two</DropdownItem>
                                        <DropdownItem>one</DropdownItem>
                                        <DropdownItem>two</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                <Input style={{"height": show ? "46px" : "32px"}}/>
                                <InputGroupAddon addonType="prepend"
                                                 className="prepend">
                                    <Button>
                                        <img src={search} alt=""/>
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <div className="lang" style={{"margin": show ? "0 70px" : "0 45px"}}>
                            <div className="lang__flag">
                                <img src={lang_flag} alt=""/>
                            </div>
                            <div hidden={!show}>
                                <span>English</span>
                            </div>
                        </div>

                        <SignIn show={show}/>


                        <div className="navBarTop__bottom" hidden={show}>
                            <span className="navBarTop__bottom-count">68</span>
                            <Dropdown  isOpen={dropdownOpen2} toggle={toggle2}>
                                <DropdownToggle caret className="navBarTop__bottom-button">{""}
                                    {/*<img src={navBarBottomDD} alt=""/>*/}
                                </DropdownToggle>
                                <DropdownMenu  className="navBarTop__bottom-dropdown" right>
                                    <DropdownItem>
                                        <Link to="/price-it" className="first-child">
                                            <p>22</p>
                                            <img src={icn} alt=""/>
                                            <span>Price It</span>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/basket">
                                            <p>22</p>
                                            <img src={icn} alt=""/>
                                            <span>Basket</span>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/wishlist">
                                            <p>22</p>
                                            <img src={icn} alt=""/>
                                            <span>Wishlist</span>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/last-item">
                                            <p>22</p>
                                            <img src={icn} alt=""/>
                                            <span>Last Item</span>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/notifications">
                                            <p>22</p>
                                            <img src={icn} alt=""/>
                                            <span>Notifications</span>
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/friends" className="last-child">
                                            <p> </p>
                                            <img src={icn} alt=""/>
                                            <span>Friends</span>
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
};

export default NavBarTop