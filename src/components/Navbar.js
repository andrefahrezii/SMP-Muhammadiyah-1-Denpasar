import React from "react";
import { Row, Col, Button } from "antd";
import logo from "../assets/download.jpg"
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <Row style={{ paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}>
                <Col xl={1} xs={2}>
                    <img src={logo} alt="" style={{ width: "60px" }} />
                </Col>
                <Col xl={4} xs={3} style={{ paddingLeft: "8px" }}>
                    <p>SMK MUHAMADIYAH 1 DENPASAR</p>
                </Col>
                <Col xl={19} xs={19} style={{ textAlign: "center", paddingTop: "10px" }}>
                    <Row >
                        <Col xl={4} xs={3} className="navbar-link">
                            <Link to="/">Home</Link>
                        </Col>
                        <Col xl={4} xs={3}>
                            <Link to="/Home">Informasi PPDB</Link>
                        </Col>
                        <Col xl={4} xs={3}>
                            <Link to="/login">Login</Link>
                        </Col>
                        <Col xl={4} xs={3}>
                            <Link to="/register">Daftar PPDB</Link>
                        </Col>
                        <Col xl={8} xs={3}>
                            <Button type="primary"> Download Brousue</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar;
