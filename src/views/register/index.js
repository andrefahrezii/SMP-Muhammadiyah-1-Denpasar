import React from 'react';
import { Layout, Card, Form, Input, Button, Typography, Row, Col, DatePicker } from 'antd';

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
                            title="Pendafataran PPDB 2023/2024"
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
                                    label="NISN"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "NISN"
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item
                                    name="Nama Lengkap"
                                    label="Nama Lengkap"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Nama Lengkap"
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item
                                    name="Asal Sekolah"
                                    label="Asal Sekolah"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Asal Sekolah"
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item
                                    name="No Telpone"
                                    label="No Telpone"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "No Telpone"
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input size="large" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "silakan inout email",
                                        },
                                        { type: "email", message: "silakan masukan email" },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input type="email" size="large" placeholder="" xl={12} xs={24} className="inputform" />
                                </Form.Item>
                                <Form.Item label="Tempat Lahir">
                                    <Input size="large" placeholder=""
                                        className="inputform" />
                                </Form.Item>
                                <Form.Item label="Tanggal Lahir">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="password"
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
                                {/* <Form.Item
                                    name="phone"
                                    label="phone"
                                    rules={[
                                        {
                                            pattern: new RegExp(/^[0-9]*$/),
                                            message: "input phone",
                                        },
                                    ]}
                                    xl={12} xs={24}
                                >
                                    <Input  size="large" placeholder=""
                                        xl={12} xs={24} />
                                </Form.Item> */}

                                <br />
                                <Form.Item xl={4} xs={24}>
                                    <Button type="primary" className="btn-submit" htmlType="submit"
                                        danger>
                                        Reset
                                    </Button>
                                    <Button type="primary" className="btn-submit" htmlType="submit"
                                    >
                                        Daftar
                                    </Button>

                                </Form.Item>
                                Sudah Punya Akun ? <Link to="/login">Klik Disini</Link>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
};
export default App;