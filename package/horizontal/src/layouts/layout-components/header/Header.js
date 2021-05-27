import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCarousel,
  Progress,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import * as data from "./Data";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../../../assets/images/logos/logo-icon.png";
import logolighticon from "../../../assets/images/logos/logo-light-icon.png";
import logodarktext from "../../../assets/images/logos/logo-text.png";
import logolighttext from "../../../assets/images/logos/logo-light-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const settings = useSelector((state) => state.settings);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showMobilemenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  return (
    <header className="topbar navbarbg" data-navbarbg={settings.activeNavbarBg}>
      <Navbar
        className={
          "top-navbar " +
          (settings.activeNavbarBg === "skin6" ? "navbar-light" : "navbar-dark")
        }
        expand="md"
      >
        <div
          className="navbar-header"
          id="logobg"
          data-logobg={settings.activeLogoBg}
        >
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span
            className="nav-toggler d-block d-md-none"
            onClick={() => showMobilemenu()}
          >
            <i className="ti-menu ti-close" />
          </span>
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <NavbarBrand href="/">
            <b className="logo-icon">
              <img src={logodarkicon} alt="homepage" className="dark-logo" />
              <img src={logolighticon} alt="homepage" className="light-logo" />
            </b>
            <span className="logo-text">
              <img src={logodarktext} alt="homepage" className="dark-logo" />
              <img src={logolighttext} className="light-logo" alt="homepage" />
            </span>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span className="topbartoggler d-block d-md-none" onClick={toggle}>
            <i className="ti-more" />
          </span>
        </div>
        <Collapse
          className="navbarbg"
          isOpen={isOpen}
          navbar
          data-navbarbg={settings.activeNavbarBg}
        >
          <Nav className="float-left" navbar>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Messages Dropdown                                                        */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="font-18 mdi mdi-gmail" />
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </DropdownToggle>
              <DropdownMenu className="mailbox">
                <div className="drop-title border-bottom">
                  You have 4 new messanges
                </div>
                <div className="message-center message-body">
                  {/*<!-- Message -->*/}
                  {data.messages.map((message, index) => {
                    return (
                      <span href="" className="message-item" key={index}>
                        <span className="user-img">
                          <img
                            src={message.image}
                            alt="user"
                            className="rounded-circle"
                            width=""
                          />
                          <span
                            className={
                              "profile-status pull-right " + message.status
                            }
                          ></span>
                        </span>
                        <div className="mail-contnet">
                          <h5 className="message-title">{message.title}</h5>
                          <span className="mail-desc">{message.desc}</span>
                          <span className="time">{message.time}</span>
                        </div>
                      </span>
                    );
                  })}
                </div>
                <span className="nav-link text-center link text-dark" href="">
                  <b>See all e-Mails</b> <i className="fa fa-angle-right" />
                </span>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Messages Dropdown                                                          */}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Notifications Dropdown                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="mdi mdi-check-circle font-18" />
                <div className="notify">
                  <span className="heartbit"></span>
                  <span className="point"></span>
                </div>
              </DropdownToggle>
              <DropdownMenu className="mailbox">
                <div className="drop-title border-bottom">
                  You have 3 new Tasks
                </div>
                <div className="message-center notifications">
                  {/*<!-- Message -->*/}
                  {data.notifications.map((notification, index) => {
                    return (
                      <span className="message-item" key={index}>
                        <span
                          className={
                            "btn btn-circle btn-" + notification.iconbg
                          }
                        >
                          <i className={notification.iconclass} />
                        </span>
                        <div className="mail-contnet">
                          <h5 className="message-title">
                            {notification.title}
                          </h5>
                          <span className="mail-desc">{notification.desc}</span>
                          <span className="time">{notification.time}</span>
                        </div>
                      </span>
                    );
                  })}
                </div>
                <a className="nav-link text-center mb-1 text-dark" href=";">
                  <strong>Check all notifications</strong>{" "}
                  <i className="fa fa-angle-right" />
                </a>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Notifications Dropdown                                                     */}
            {/*--------------------------------------------------------------------------------*/}
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Mega Menu Dropdown                                                       */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar className="mega-dropdown">
              <DropdownToggle nav>
                <span className="d-block d-lg-none">
                  <i className="mdi mdi-apps font-24"></i>
                </span>
                <span className="d-none d-lg-block">
                  Mega <i className="icon-options-vertical" />
                </span>
              </DropdownToggle>
              <DropdownMenu>
                <Row>
                  {/*--------------------------------------------------------------------------------*/}
                  {/* Carousel [Item-1]                                                              */}
                  {/*--------------------------------------------------------------------------------*/}
                  <Col xs="12" sm="12" md="12" lg="3">
                    <h5 className="mb-3 text-uppercase">Carousel</h5>
                    <UncontrolledCarousel items={data.items} />
                  </Col>
                  {/*--------------------------------------------------------------------------------*/}
                  {/* Progress [Item-2]                                                              */}
                  {/*--------------------------------------------------------------------------------*/}
                  <Col xs="12" sm="12" md="12" lg="3">
                    <h5 className="mb-3 text-uppercase">Progress</h5>
                    <div className="d-flex no-block align-items-center mb-2">
                      <span>Sales</span>
                      <div className="ml-auto">
                        <span className="text-primary">
                          <i className="mdi mdi-chart-areaspline" />
                        </span>
                      </div>
                    </div>
                    <Progress className="mb-3" animated value={2 * 5} />
                    <div className="d-flex no-block align-items-center mb-2">
                      <span>Marketing</span>
                      <div className="ml-auto">
                        <span className="text-success">
                          <i className="mdi mdi-chart-line" />
                        </span>
                      </div>
                    </div>
                    <Progress
                      className="mb-3"
                      animated
                      color="success"
                      value="25"
                    />
                    <div className="d-flex no-block align-items-center mb-2">
                      <span>Accouting</span>
                      <div className="ml-auto">
                        <span className="text-danger">
                          <i className="mdi mdi-chart-arc" />
                        </span>
                      </div>
                    </div>
                    <Progress
                      className="mb-3"
                      animated
                      color="danger"
                      value={50}
                    />
                    <div className="d-flex no-block align-items-center mb-2">
                      <span>Sales Ratio</span>
                      <div className="ml-auto">
                        <span className="text-warning">
                          <i className="mdi mdi-chart-pie" />
                        </span>
                      </div>
                    </div>
                    <Progress
                      className="mb-3"
                      animated
                      color="warning"
                      value={70}
                    />
                  </Col>
                  {/*--------------------------------------------------------------------------------*/}
                  {/* Contact Us [Item-3]                                                            */}
                  {/*--------------------------------------------------------------------------------*/}
                  <Col xs="12" sm="12" md="12" lg="3">
                    <h5 className="mb-3 text-uppercase">Contact Us</h5>
                    <Form>
                      <FormGroup>
                        <Input
                          type="text"
                          name="name"
                          id="textname"
                          placeholder="Enter Name Here"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="Enter Email Here"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          placeholder="Message"
                        />
                      </FormGroup>
                      <Button color="primary">Submit</Button>
                    </Form>
                  </Col>
                  {/*--------------------------------------------------------------------------------*/}
                  {/* List Style [Item-4]                                                            */}
                  {/*--------------------------------------------------------------------------------*/}
                  <Col xs="12" sm="12" md="12" lg="3">
                    <h5 className="mb-3 text-uppercase">List Style</h5>
                    <ListGroup flush>
                      <ListGroupItem
                        tag="a"
                        href=""
                        className="border-0 pl-0 text-dark pt-0"
                      >
                        <i className="fa fa-check text-success mr-2" />
                        Cras justo odio
                      </ListGroupItem>
                      <ListGroupItem
                        tag="a"
                        href=""
                        className="border-0 pl-0 text-dark pt-0"
                      >
                        <i className="fa fa-check text-success mr-2" />
                        Dapibus ac facilisis in
                      </ListGroupItem>
                      <ListGroupItem
                        tag="a"
                        href=""
                        className="border-0 pl-0 text-dark pt-0"
                      >
                        <i className="fa fa-check text-success mr-2" />
                        Morbi leo risus
                      </ListGroupItem>
                      <ListGroupItem
                        tag="a"
                        href=""
                        className="border-0 pl-0 text-dark pt-0"
                      >
                        <i className="fa fa-check text-success mr-2" />
                        Porta ac consectetur ac
                      </ListGroupItem>
                      <ListGroupItem
                        tag="a"
                        href=""
                        className="border-0 pl-0 text-dark pt-0"
                      >
                        <i className="fa fa-check text-success mr-2" />
                        Vestibulum at eros
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Mega Menu Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
          <Nav className="ml-auto float-right" navbar>
            <NavItem>
              <NavLink
                href="#"
                className="d-none d-md-flex align-items-center nav-link"
              >
                <form className="app-search">
                  <Input type="search" placeholder="Search" />
                </form>
              </NavLink>
            </NavItem>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Profile Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                className="pro-pic d-flex align-items-center"
              >
                <img
                  src={profilephoto}
                  alt="user"
                  className="rounded-circle"
                  width="36"
                />
                <span className="d-none d-md-block ml-2 font-medium">
                  Steve <i className="fas fa-angle-down ml-2"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu right className="user-dd">
                <div className="d-flex no-block align-items-start border-bottom p-3 mb-2">
                  <div className="">
                    <img
                      src={profilephoto}
                      alt="user"
                      className="rounded"
                      width="80"
                    />
                  </div>
                  <div className="ml-2">
                    <h4 className="mb-0">Steave Jobs</h4>
                    <p className="text-muted mb-0">varun@gmail.com</p>
                    <Button color="danger" className="btn-rounded btn-sm mt-2">
                      View Profile
                    </Button>
                  </div>
                </div>
                <DropdownItem>
                  <i className="ti-user mr-1 ml-1" /> My Account
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-wallet mr-1 ml-1" /> My Balance
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-email mr-1 ml-1" /> Inbox
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="ti-settings mr-1 ml-1" /> Account Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/pages/login">
                  <i className="fa fa-power-off mr-1 ml-1" /> Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Profile Dropdown                                                           */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
