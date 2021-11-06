import React, { PureComponent } from 'react';
import { Layout, Menu, Dropdown, Avatar, Row, Col } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Sign out
      </a>
    </Menu.Item>
  </Menu>
);

class HeaderCom extends PureComponent {
  render() {
    return (
      <Header style={{background: '#fff'}}>
        <Row justify="end">
          <Col>
            <SearchOutlined/>
          </Col>
          <Col>
            <BellOutlined/>
          </Col>
          <Col>
            <Avatar icon={<UserOutlined />} />
          </Col>
          <Col>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                festinalente <DownOutlined />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    )
  }
}
export default HeaderCom;