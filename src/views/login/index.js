import React from 'react';
import { Layout, Card, Form, Input, Button, Typography, Row, Col } from 'antd';

import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import "./style.css";


const { Link } = Typography;
const { Content } = Layout;


const App = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    // const onReset = () => {
    //     form.resetFields();
    // };
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
                            title="Login PPDB 2023/2024"
                            xl={24} xs={24}
                            className="input"
                        >
                            <Form layout="vertical"
                                form={form}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                xl={12} xs={24}>
                                <Form.Item
                                    name="NISN"
                                    label="Username / NISN"
                                    rules={[
                                        {
                                            required: false,
                                            message:
                                                "NISN"
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            pattern: new RegExp(/^[0-9]*$/),
                                            message: "Passowrd",
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" placeholder=""
                                        xl={12} xs={24} className="inputform" />
                                </Form.Item>
                            </Form>
                            <Row>
                                <Col span={12}>
                                    <Button type="primary" className="button" htmlType="submit">
                                        Daftar Akun
                                    </Button>
                                </Col>
                                <Col span={12}>
                                    <Button type="primary" className="button" htmlType="submit"
                                    >
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                            Lupa Password ? <Link to="/login"> <span style={{ color: "blue" }}> Klik Disini</span></Link>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
};
export default App;