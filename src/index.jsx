import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col } from 'antd';

import { ToDo } from './components/ToDo';

import 'antd/dist/antd.css'
import './index.css';
import './bootstrap.min.css';

const { Header, Footer, Content } = Layout;


const App = () => {
  return (
    <Layout>
      <Header className="bg-primary">
          <span className="text-light">I`m Bootstrap master!!!!</span>
      </Header>
      <Content>
        <Row>
          <Col span={12} offset={6} className="todo">
            <ToDo/>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));