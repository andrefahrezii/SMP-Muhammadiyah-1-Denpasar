import React from "react";
import { Typography, Col, Row } from "antd";
const { Title } = Typography;
const Footer = () => {
    return (
        <Row >
            <Col style={{ textAlign: "center", backgroundColor: "grey" }} span={24}>
                <Title level={3} style={{ color: "white" }} >IT Solution Perkasa</Title>
            </Col>
        </Row>

    )
}

export default Footer