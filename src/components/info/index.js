import React, { PureComponent } from 'react';
import { Card, Avatar, Row, Col, Statistic, Badge, Button, Space } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
} from '@ant-design/icons';

class Info extends PureComponent {
  render() {
    return (
      <Card style={{ width: 300, borderRadius: 8}}>
        <Row justify="center">
          <Badge count={<Button icon={<PlusOutlined/>} type="primary" shape="circle"></Button>} offset={[-50,100]}>
            <Avatar size={100} icon={<UserOutlined />} /> 
          </Badge>   
        </Row>
        <Row justify="center" style={{ marginTop: 20 }}>Festinalente</Row>
        <Row justify="center">festina-lente-z</Row>
        <Row justify="space-between">
          <Col>
            <Statistic value={26} title="Repos" valueStyle={{ color: '#3f8600' }}/>
          </Col>
          <Col>
            <Statistic title="Followers" value={1} />
          </Col>
          <Col>
            <Statistic title="Following" value={17} />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default Info;