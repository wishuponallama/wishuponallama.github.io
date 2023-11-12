import React, { Component } from 'react'
import { Layout, Col, Row, Input, Button, Space, Typography, Carousel, Modal } from 'antd';
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import './App.css';

import ImgFamilyTree from './assets/family-tree.png';
import ImgNightWalk from './assets/night-walk.png';
import ImgPlayingTennis from './assets/playing-tennis.png'

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrailerModalOpen: false,
      dummyKey: 0
    };
  }

  openTrailerModal = () => {
    this.setState({ isTrailerModalOpen: true });
  }

  closeTrailerModal = () => {
    // Using dummyKey is a hack to update the state of the iframe
    this.setState({ isTrailerModalOpen: false, dummyKey: this.state.dummyKey + 1 });
  }

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
                      <Button type="primary" onClick={this.openTrailerModal}>Watch the trailer!</Button>
                      <Modal width={800} wrapClassName="trailer-modal" open={this.state.isTrailerModalOpen} footer={null} closeIcon={null} onCancel={this.closeTrailerModal}>
                        <iframe src='https://www.youtube.com/embed/lIOdPxltO4s?autoplay=1&mute=1&start=5'
                          key={this.state.dummyKey}
                          width='100%'
                          height='512px'
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'
                        />
                      </Modal>
                    </div>
                    <div className="steam-widget-container">
                      <iframe className="steam-widget" src="https://store.steampowered.com/widget/2262630/?t=Welcome%20to%20Wish%20Upon%20A%20Llama%2C%20an%20immersive%20open-ended%20RPG%20where%20you%20embark%20on%20a%20delightful%20journey%20of%20raising%20and%20breeding%20adorable%20animals%20such%20as%20llamas%2C%20bunnies%2C%20capybaras%2C%20and%20sheep%20while%20building%20meaningful%20relationships%20with%20the%20townsfolk!%20" frameborder="0"></iframe>
                    </div>
                  </Col>
                  <Col span={3} />
                </Row>
              </div>
            </div>
            <div className='newsletter-container'>
              <div className='newsletter-description'>
                <Title level={2}>Subscribe to our Newsletter!</Title>
                <Text>Stay up to date with the latest news about Wish Upon A Llama</Text>
              </div>
              <Space.Compact>
                <Input placeholder='Enter your email' size='large' />
                <Button type="primary" size='large'>Submit</Button>
              </Space.Compact>
            </div>
            <div className='screenshots-container'>
              <Row className='screenshots-description' justify='center'>
                <Col span={12}>
                  <Title level={2}>A Cozy World for Pet Lovers!</Title>
                  <Text>Embark on a delightful journey of breeding and raising adorable animals like llamas, bunnies, and capybaras while building meaningful relationships with the residents of Llama Town</Text>
                </Col>
              </Row>
              <div>
                <Carousel>
                  <div>
                    <div className="carousel-card">
                      <img
                        className="carousel-img"
                        src={ImgFamilyTree}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="carousel-card">
                      <img
                        className="carousel-img"
                        src={ImgPlayingTennis}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="carousel-card">
                      <img
                        className="carousel-img"
                        src={ImgNightWalk}
                      />
                    </div>
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
                    <Button id='social-media-button-twitter' type="primary" shape='circle' size='large' icon={<TwitterOutlined />} style={{ color: 'black', backgroundColor: 'white' }} href="https://twitter.com/WishUponALlama" target="_blank" />
                    <Button id='social-media-button-instagram' type="primary" shape='circle' size='large' icon={<InstagramOutlined />} style={{ color: 'black', backgroundColor: 'white' }} href="https://www.instagram.com/wishuponallama" target="blank" />
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
