import React from 'react';
import { Row, Layout, Col, Button, Card, Collapse, Typography } from 'antd';

import card from "../../assets/card.png"
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import Kontakkami from '../../components/Kontakkami';

const { Content } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Layout className="layout">
            <Navbar />
            <Content
                style={{
                    padding: '0 20px', // Adjust padding for smaller screens
                    paddingTop: "50px",
                    paddingBottom: "20px",
                }}
            >
                <Card style={{ backgroundColor: "#5d69b3", border: "1px solid", borderRadius: "30px", height: "320px", minHeight: "320px" }}>
                    <Row gutter={[16, 16]}>
                        <Col xl={12} xs={20} style={{ textAlign: "left" }}>
                            <Title level={3} style={{ color: "white" }}> Galih Potensi,</Title>
                            <Title level={3} style={{ color: "white" }}> Raih Prestasi</Title>
                            <Title level={4} style={{ color: "white" }}>Satu langkah lebih dekat dengan impianmu</Title>
                            <Title level={4} style={{ color: "white" }}>Dengan Mulai Belajar, dilembaga pendidikan Terbaik</Title>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button type="primary" block>Login</Button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Button block>Cek Status Pembayaran</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={12} xs={4} style={{ textAlign: "right" }}>
                            <img src={card} alt="" style={{ maxWidth: "100%" }} />
                        </Col>
                    </Row>
                </Card>
                {/* Faq */}
                <Row style={{ padding: "30px", paddingLeft: "10px", paddingRight: "10px" }}>
                    <Col span={24}>
                        <div style={{ textAlign: "center" }}>
                            <Title level={2}>Frequently Asked Questions</Title>
                        </div>
                        <Row >
                            <Col span={24}>
                                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                                    <Panel header="Alur Pendaftaran" key="1">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel header="Syarat Pendaftaran" key="2">
                                        <p>{text}</p>
                                    </Panel>
                                    <Panel header="Informasi Tes PPDB" key="3">
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* kontak kami */}
            </Content>
            <Kontakkami />
            <Footer />
        </Layout>
    );
};

export default App;
