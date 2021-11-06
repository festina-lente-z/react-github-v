import React, { PureComponent } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderCom extends PureComponent {
  state = {
    collapsed: true,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({collapsed});
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light">
        <Menu mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined/>}>
            option1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined/>}>
            option2
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default SiderCom;
