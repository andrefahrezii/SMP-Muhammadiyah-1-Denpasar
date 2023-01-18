import React from 'react';
import { Layout } from 'antd';

import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"

const { Content } = Layout;
const App = () => {
    return (
        <Layout className="layout">
            <Navbar />
            <Content
                style={{
                    padding: '0 50px',
                    height: 800,
                    paddingTop: "50px",
                    paddingBottom: "20px",
                }}
            >

            </Content>
            <Footer />
        </Layout>
    );
};
export default App;