import React from 'react';
import { Layout, Card, QRCode, Button, Typography, Row, Col, Result } from 'antd';

import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import "./style.css";



const { Title } = Typography;
const { Content } = Layout;


const App = () => {
    return (
        <Layout className="layout">
            <Navbar />
            <Content
                style={{
                    padding: '0 50px',
                    height: 1100,
                    paddingTop: "30px",
                    paddingBottom: "20px",
                }}
            >
                <Row style={{ display: "contents" }}>
                    <Col
                        xl={24} xs={24} className="row-card" >
                        <Card
                            bordered="false"
                            xl={24} xs={24}
                            className="input"
                        >
                            <Result
                                status="success"
                                title="Selamat Akun Berhasil Di buat!"
                                subTitle="Untuk melanjutkan ke tahap berikutnya, silakan melakukan pembayaran biaya pendaftaran sebesar Rp 200.000"
                                extra={[
                                    <div><QRCode value="https://ant.design/" /> </div>,
                                    <Title level={3}>A/n PT ANTD  </Title>,
                                    <Button type="primary" key="console">
                                        Go Console
                                    </Button>,
                                    <Button key="buy">Buy Again</Button>,
                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
};
export default App;