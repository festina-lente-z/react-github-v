import React from 'react';
import { SiderCom, HeaderCom } from './components';
import { Home } from './page';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderCom/>
      <Layout>
        <HeaderCom/>
        <Home/>
        <Footer style={{ textAlign: 'center' }}> GithubV ©2021 Created by Festinalente </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
