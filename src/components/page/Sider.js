import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom'

import SiderConfig from './../../config/sider';

const { Sider } = Layout;

const SubMenu = Menu.SubMenu;

class AdminSider extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  defaultSelectedKeys = [];
  openSubMenuKey = []; //当时多层菜单时可以正常使用
  defaultOpenKeys = [];
  menuKey = 0; //组件标记，保证不重新渲染，依赖于侧边栏的顺序
  renderSubMenu = (config) => {
    let ret = [];
    for (var k in config) {
      let value = config[k];
      ++this.menuKey;
      if (Array.isArray(value.subMenu) && value.subMenu.length > 0) {
        //subMenuKey提前保存this.menuKey的值，在递归之后使用，保证this.openSubMenuKey指向正确值
        let subMenuKey = this.menuKey;
        this.openSubMenuKey.push(subMenuKey.toString());
        let subMenu = this.renderSubMenu(value.subMenu);
        if(this.openSubMenuKey.length > 0){//去掉上一层路径
          this.openSubMenuKey.splice(this.openSubMenuKey.indexOf(subMenuKey),1);
        }
        ret.push(
          <SubMenu
            key={subMenuKey}
            title={<span><Icon type={value.icon} /><span>{value.name}</span></span>}>
            {subMenu}
          </SubMenu>
        );
      } else {
        if(!value.link){
          continue;
        }
        if(this.props.location.pathname === value.link){
          this.defaultSelectedKeys.push(this.menuKey.toString());
          if(this.openSubMenuKey.length > 0){
              this.defaultOpenKeys=[...this.defaultOpenKeys, ...this.openSubMenuKey];
              // this.openSubMenuKey = [];
          }
        }
        ret.push(<Menu.Item key={this.menuKey}>
            <Link to={value.link} >
                {value.icon && <Icon type={value.icon} />}
                <span className="nav-text">{value.name}</span>
            </Link>
        </Menu.Item>)
      }
    }
    return ret;
  };

  render() {
    this.menuKey = 0;
    this.openSubMenuKey = [];
    let subMenu = this.renderSubMenu(SiderConfig);

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <div style={{clear:'left'}} />
        <Menu theme="dark" defaultSelectedKeys={this.defaultSelectedKeys} defaultOpenKeys={this.defaultOpenKeys} mode="inline">
          {subMenu}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(AdminSider);