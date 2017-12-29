import React from 'react';
import {Breadcrumb } from 'antd';

export default function () {
    return <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Bill is a cat.
        </div>
    </div>
}