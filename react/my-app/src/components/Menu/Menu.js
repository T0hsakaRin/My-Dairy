import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class CMenu extends React.Component {

  render() {
    return (
      <Menu
        mode="inline"
        style={{ width: 200 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="1">
            <Link to="/">todo</Link>
          </Menu.Item>
          <Menu.Item key="2">
              <Link to="/dairy">dairy</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/swiper">swiper</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/markdown">markdown</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default CMenu;
