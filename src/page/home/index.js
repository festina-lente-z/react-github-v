import React, { PureComponent } from 'react';
import { Info } from '../../components';

import { Layout } from 'antd';

const { Content } = Layout;

class Home extends PureComponent {
  render() {
    return (
      <Content>
        <Info/>
      </Content>
    )
  }
}

export default Home;