import React from 'react';
import { Layout } from 'antd';

export default function (props) {
    return (
        <Layout.Content style={{ margin: '0 16px' }}>
            {props.children}
        </Layout.Content>
    );
}