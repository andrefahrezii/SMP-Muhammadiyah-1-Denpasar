import React from "react";
import { Row, Col, Typography, Input, Card } from "antd";

const { TextArea } = Input;
const { Title } = Typography
const Kontakkami = () => {
    return (
        <Row style={{ backgroundColor: "#5d69b3", paddingBottom: "20px" }} >
            <Col span={24} >
                <Row >
                    <Col style={{ textAlign: "center" }} span={24}>
                        <Title style={{ color: "white" }}>KONTAK KAMI</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} style={{ textAlign: "center", color: "white", padding: "5px" }} name="hubungi kam">
                        <Title level={4} style={{ color: "white" }}>Hubungi Kami</Title>
                        <Input placeholder="Nama Anda" style={{ border: "0px solid", borderRadius: "25px", hight: "20px" }} />
                        <br />
                        <br />
                        <TextArea rows={4} placeholder="Pesan Anda" style={{ border: "0px solid", borderRadius: "25px", hight: "20px" }} />
                        <br />
                        <br />
                        <Row style={{ textAlign: "left" }}>
                            <Col span={2}>
                                Logo
                            </Col>
                            <Col span={22}>
                                SMP Muhammadiyah 1 Denpasar
                            </Col>
                        </Row>
                        <br />
                        <Row style={{ textAlign: "left" }}>
                            <Col span={2}>
                                Logo
                            </Col>
                            <Col span={22}>
                                SMP Muhammadiyah 1 Denpasar
                            </Col>
                        </Row>
                        <br />
                        <Row style={{ textAlign: "left" }}>
                            <Col span={2}>
                                Logo
                            </Col>
                            <Col span={22}>
                                Mutu Denpasasr
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12} style={{ padding: "20px" }}>
                        <Card>

                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default Kontakkami;