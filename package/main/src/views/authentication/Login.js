import React from "react";
import { useTranslation } from "react-i18next";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  FormGroup,
  Row,
  Col,
  // UncontrolledTooltip,
  Button,
} from "reactstrap";
//import img1 from "../../assets/images/logos/logo-icon.png";
import img1 from "../../assets/images/logos/tmc_logo.png";
//wellcome
//import img2 from "../../assets/images/background/login-register.jpg";
import img2 from "../../assets/images/background/logo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthenticationService } from "../../jwt/_services";

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "190vh"
};

const Login = (props) => {
  const [t, i18n] = useTranslation();
  const handleClick = () => {
    var elem = document.getElementById("loginform");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.display = "none";
    document.getElementById("recoverform").style.display = "block";
  };
  const changeEng = () => {
    i18n.changeLanguage('en')
  }
  const changeEs = () => {
    i18n.changeLanguage('es')
  }
  const StylesButtonsLanguaje = {
    border: 'none',
    color: 'lightblue',
    marginRight: '3px',
    outline: 'none',
    marginBottom: '20px',
    backgroundColor: 'transparent',
  }

  return (
    <div className="">
      {/*--------------------------------------------------------------------------------*/}
      {/*Login Cards*/}
      {/*--------------------------------------------------------------------------------*/}
      <div
        className="auth-wrapper d-flex no-block justify-content-center align-items-center"
        style={sidebarBackground}
      >
        <div className="auth-box on-sidebar">
          <div id="loginform">
            <div className="logo">
              <span className="db">
                {/*<img src={img1} alt="logo" />*/}
              </span>
              <h5 className="font-medium mb-3">{t('login.textoInicio')}</h5>
              <div className="alert alert-success">
                {t('login.user')}: test & {t('login.pass')}: test
              </div>
            </div>
            <Row>
              <Col xs="12">
                <Formik
                  initialValues={{
                    username: "test",
                    password: "test",
                  }}
                  validationSchema={Yup.object().shape({
                    username: Yup.string().required("Username is required"),
                    password: Yup.string().required("Password is required"),
                  })}
                  onSubmit={(
                    { username, password },
                    { setStatus, setSubmitting }
                  ) => {
                    AuthenticationService.login(username, password).then(
                      (res) => {
                        if (res.success === true) {
                          const { from } = props.location.state || {
                            from: { pathname: "/" },
                          };
                          props.history.push(from);
                        } else {
                          setSubmitting(false);
                          setStatus(res.message);
                        }
                        console.log(res.success)
                      },
                      (error) => {
                        setSubmitting(false);
                        setStatus(error);
                      }
                    );
                  }}
                  render={({ errors, status, touched, isSubmitting }) => (
                    <Form className="mt-3" id="loginform">
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ti-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>

                        <Field
                          name="username"
                          type="text"
                          className={
                            "form-control" +
                            (errors.username && touched.username
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ti-pencil"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Field
                          name="password"
                          type="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </InputGroup>
                      <div className="d-flex no-block align-items-center mb-3">
                        <CustomInput
                          type="checkbox"
                          id="exampleCustomCheckbox"
                          label="Remember Me"
                        />
                        <div className="ml-auto">
                          <a
                            href="#recoverform"
                            id="to-recover"
                            onClick={handleClick.bind(null)}
                            className="forgot text-dark float-right"
                          >
                            <i className="fa fa-lock mr-1"></i> Forgot pwd?
                          </a>
                        </div>
                      </div>
                      <Row className="mb-3">
                        <Col xs="12">
                          <button
                            type="submit"
                            className="btn btn-block"
                            style={{ backgroundColor: '#303984', color: 'white' }}
                            disabled={isSubmitting}
                          >
                            {t('login.enter')}
                          </button>
                        </Col>
                      </Row>

                      {status && (
                        <div className={"alert alert-danger"}>{status}</div>
                      )}
                    </Form>
                  )}
                />
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-end" style={{
            position: 'absolute',
            right: '15px',
            bottom: '10px'
          }}>
            <button onClick={changeEng} style={StylesButtonsLanguaje}>
              <img style={{ objectFit: "cover", width: "40px" }} src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="icon-languaje" />
            </button>
            <button onClick={changeEs} style={StylesButtonsLanguaje}>
              <img style={{ objectFit: "cover", width: "40px" }} src="https://www.ecured.cu/images/a/a7/Bandera-de-inglaterra-400x240.png" alt="icon-languaje" />
            </button>
          </div>
          <div id="recoverform">
            <div className="logo">
              <span className="db">
                <img src={img1} alt="logo" />
              </span>
              <h5 className="font-medium mb-3">Recover Password</h5>
              <span>
                Enter your Email and instructions will be sent to you!
              </span>
            </div>
            <Row className="mt-3">
              <Col xs="12">
                <form action="/dashbaord">
                  <FormGroup>
                    <Input
                      type="text"
                      name="uname"
                      bsSize="lg"
                      id="Name"
                      placeholder="Username"
                      required
                    />
                  </FormGroup>
                  <Row className="mt-3">
                    <Col xs="12">
                      <Button color="danger" size="lg" type="submit" block>
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
