import React from 'react';
import { Layout, Avatar, Menu } from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default function () {
	return (
		<Header style={{ background: '#fff', padding: 0 }}>
			<Menu mode="horizontal" style={{ float: 'right', marginRight: '15px', marginTop: '6px',border:'none' }}>
				<SubMenu title={<Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
					<Menu.Item key="user">个人信息</Menu.Item>
					<Menu.Item key="setting">系统设置</Menu.Item>
					<Menu.Item key="logout"><span onClick={() => { }}>退出登录</span></Menu.Item>
				</SubMenu>
			</Menu>
		</Header>
	);
}