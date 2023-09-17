import React, { Component } from 'react'
import { Layout, Col, Row, Image, Button, Space, Typography, Carousel } from 'antd';
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import './App.css';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Content className='page-content'>
            <div className='background'>
              <Header className='page-header'>
                <Button className='press-kit-button' type='text' size='large'>PRESS KIT</Button>
              </Header>
              <div className='header'>
                <Row className='title-row' justify='center'>
                  <Col span={24}>
                    <Title>Wish Upon A Llama</Title>
                  </Col>
                </Row>
                <Row className='trailer-row' justify='end'>
                  <Col span={10}>
                    <div className='trailer-container'>
                      <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ?autoplay=1&mute=1'
                        width='100%'
                        height='512px'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                      />
                    </div>
                    <div className="steam-widget-container">
                      <iframe src="https://store.steampowered.com/widget/2262630/?t=Welcome%20to%20Wish%20Upon%20A%20Llama%2C%20an%20immersive%20open-ended%20RPG%20where%20you%20embark%20on%20a%20delightful%20journey%20of%20raising%20and%20breeding%20adorable%20animals%20such%20as%20llamas%2C%20bunnies%2C%20capybaras%2C%20and%20sheep%20while%20building%20meaningful%20relationships%20with%20the%20townsfolk!%20" frameborder="0" width="646" height="190"></iframe>
                    </div>
                  </Col>
                  <Col span={3} />
                </Row>
              </div>
            </div>
            <div className='description-container'>
              <Title level={2}>Welcome Animal Lovers!</Title>
              <div>
                <Carousel>
                  <div>
                    hello
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
              </div>
            </div>
          </Content>
          <Footer className='page-footer'>
            <div className='footer-content'>
              <Space direction='vertical' size='large'>
                <div>
                  <Title level={4}>
                    STAY CONNECTED
                  </Title>
                </div>
                <div className='social-media-container'>
                  <Space size='large'>
                    <Button id='social-media-button-twitter' type="primary" shape='circle' size='large' icon={<TwitterOutlined />} style={{ color: 'black', backgroundColor: 'white' }} href="https://twitter.com/WishUponALlama" />
                    <Button id='social-media-button-instagram' type="primary" shape='circle' size='large' icon={<InstagramOutlined />} style={{ color: 'black', backgroundColor: 'white' }} href="https://www.instagram.com/wishuponallama" />
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
