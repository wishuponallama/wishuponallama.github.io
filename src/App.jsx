import React, { Component } from 'react'
import { Layout, Col, Row, Image, Button, Space, Typography, ConfigProvider } from 'antd';
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import './App.css';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Header className='page-header'>
            <Button className='press-kit-button' type='text' size='large'>PRESS KIT</Button>
          </Header>
          <Content className='page-content'>
            <div className='header'>
              <Row className='title-row' justify='center'>
                <Col span={24}>
                  <Title>Wish Upon A Llama</Title>
                </Col>
              </Row>
              <Row className='trailer-row' justify='center' gutter={32}>
                <Col span={10}>
                  <div className='trailer-container'>
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                      width='100%'
                      height='512px'
                      frameborder='0'
                      allow='autoplay; encrypted-media'
                      allowfullscreen
                      title='video'
                    />
                  </div>
                </Col>
                <Col span={6}>
                  <div className='trailer-text-container'>
                    <Title className='trailer-text' level={4}>
                      Welcome to Wish Upon a Llama, an immersive open-ended RPG where you embark on a delightful
                      journey of raising and breeding an array of adorable animals such as llamas, bunnies, geese,
                      sheep, pigs, and fish while building meaningful relationships with the townsfolk!
                    </Title>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer className='page-footer'>
            <div className='footer-content'>
              <Space direction='vertical' size='large'>
                <div className='social-media-container'>
                  <Space size='large'>
                    <Button id='social-media-button-twitter' type="primary" shape='circle' size='large' icon={<TwitterOutlined />} style={{ color: 'black', backgroundColor: 'white' }} />
                    <Button id='social-media-button-instagram' type="primary" shape='circle' size='large' icon={<InstagramOutlined />} style={{ color: 'black', backgroundColor: 'white' }} />
                  </Space>
                </div>
                <div>
                  © 2023 Millionhare Studios
                </div>
              </Space>
            </div>
          </Footer>
        </Layout >
      </div >
    );
  }
}

export default App;
