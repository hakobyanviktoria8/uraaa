import React, {useState} from "react";
import "./NavBarTop.css";
import {Link} from "react-router-dom";
import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";
import search from "../images/search.svg";
import lang_flag from "../images/lang_flag.svg";
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

    //search All dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    //nav bar bottom 70px scrol down
    const [dropdownOpenNavBar, setDropdownOpenNavBar] = useState(false);
    const toggleNavBar = () => setDropdownOpenNavBar(prevState => !prevState);

    return (
        <nav className="navBarTop" style={{"height": show ? "74px" : "54px"}}>
            <Container>
                <Row>
                    <Col>
                        {/*Nav Bar Top categories, left menu*/}
                        <Link to="/categories" className="navBarTop__categories">
                            <img src={hamburger} alt=""/>
                        </Link>

                        {/*Nav Bar Top logo, home page*/}
                        <Link to="/" className="navBarTop__logo">
                            <img src={logo} alt=""/>
                        </Link>

                        {/*Nav Bar Top search input with search `All` dropdown filter*/}
                        <div className="navBarTop__search">
                            <InputGroup>
                                <InputGroupButtonDropdown addonType="append"
                                                          isOpen={dropdownOpen}
                                                          toggle={toggleDropDown}
                                                          className="append">
                                    <DropdownToggle caret style={{"height": show ? "46px" : "32px"}}>
                                        All
                                    </DropdownToggle>
                                    <DropdownMenu>
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

                        {/*Nav Bar Top language, flag and text*/}
                        <div className="navBarTop__lang" style={{"margin": show ? "0 70px" : "0 45px"}}>
                            <div className="navBarTop__lang-flag">
                                <img src={lang_flag} alt=""/>
                            </div>
                            <div hidden={!show}>
                                <span>English</span>
                            </div>
                        </div>

                        {/*Nav Bar Top SignIn component here*/}
                        <SignIn show={show}/>

                        {/*NavBarBottom dropdown menu after 70px scroll*/}
                        <div className="navBarTop__bottom" hidden={show}>
                            <span className="navBarTop__bottom-count">68</span>
                            <Dropdown isOpen={dropdownOpenNavBar} toggle={toggleNavBar}>
                                <DropdownToggle caret className="navBarTop__bottom-button">{""}
                                </DropdownToggle>
                                <DropdownMenu className="navBarTop__bottom-dropdown" right>
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
                                            <p></p>
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