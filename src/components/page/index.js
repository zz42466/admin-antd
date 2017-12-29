import React from 'react';
import { Layout } from 'antd';

import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default function (props) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider />
            <Layout>
                <Header />
                <Content>
                    {props.children}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};

