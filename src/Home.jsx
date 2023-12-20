import React, { Component } from 'react'
import { Layout, Col, Row, Input, Button, Space, Typography, Carousel, Modal } from 'antd';
import { TwitterOutlined, InstagramOutlined, VideoCameraOutlined, DownCircleOutlined } from '@ant-design/icons';

import { withRouter } from './withRouter'

import './Home.css';

import ImgFamilyTree from './assets/family-tree.png';
import ImgNightWalk from './assets/night-walk.png';
import ImgPlayingTennis from './assets/playing-tennis.png'

import InstagramPosts from './InstagramPosts';
import PageHeader from './PageHeader';

const { Footer, Content } = Layout;
const { Title, Text } = Typography;

const carouselData = [
  {
    title: 'Did someone say animal genetics?',
    description: 'Breed and raise adorable animals like llamas, bunnies, sheep, horses, and capybaras!'
  },
  {
    title: 'Build meaningful relationships',
    description: 'From the aspiring designer to the chill gamer, Llama Town boasts a diverse population for you to meet!'
  },
  {
    title: 'Explore breathtaking locales',
    description: 'Think vacation islands, lush forests, and picturesque beaches!'
  },
  {
    title: 'Personalize your living space',
    description: 'Decorate your dwelling and surrounding land to make your one-of-a-kind dream home!'
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrailerModalOpen: false,
      dummyKey: 0,
      carouselIdx: 0
    };
    this.ref = React.createRef();
  }

  openTrailerModal = () => {
    this.setState({ isTrailerModalOpen: true });
  }

  closeTrailerModal = () => {
    // Using dummyKey is a hack to update the state of the iframe
    this.setState({ isTrailerModalOpen: false, dummyKey: this.state.dummyKey + 1 });
  }

  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  onCarouselChange = (currIdx, nextIdx) => {
    this.setState({ carouselIdx: nextIdx });
  }

  render() {
    const { title: carouselTitle, description: carouselDescription } = carouselData[this.state.carouselIdx];
    return (
      <div className="home" >
        <Layout>
          <Content className='page-content'>
            <div className='background'>
              <PageHeader isHomePage={true} />
              <div className='header'>
                <Row className='title-row' justify='center'>
                  <Col span={24}>
                    <Title code={true}>Wish Upon A Llama</Title>
                  </Col>
                </Row>
                <Row className='trailer-row' justify='end'>
                  <Col span={10}>
                    <div className='trailer-container'>
                      <Button type="primary" icon={<VideoCameraOutlined />} size='large' onClick={this.openTrailerModal}>Watch the trailer!</Button>
                      <Modal width={800} wrapClassName="trailer-modal" open={this.state.isTrailerModalOpen} footer={null} closeIcon={null} onCancel={this.closeTrailerModal}>
                        <iframe className='trailer-iframe' src='https://www.youtube.com/embed/lIOdPxltO4s?autoplay=1&mute=1&start=5'
                          key={this.state.dummyKey}
                          width='100%'
                          height='512px'
                          allow='autoplay; encrypted-media'
                          allowFullScreen
                          title='video'
                        />
                      </Modal>
                    </div>
                    <div className="steam-widget-container">
                      <iframe className="steam-widget" src="https://store.steampowered.com/widget/2262630/?t=Welcome%20to%20Wish%20Upon%20A%20Llama%2C%20an%20immersive%20open-ended%20RPG%20where%20you%20embark%20on%20a%20delightful%20journey%20of%20raising%20and%20breeding%20adorable%20animals%20such%20as%20llamas%2C%20bunnies%2C%20capybaras%2C%20and%20sheep%20while%20building%20meaningful%20relationships%20with%20the%20townsfolk!%20"></iframe>
                    </div>
                  </Col>
                  <Col span={3} />
                </Row>
              </div>
              <div className='scroll-down-container'>
                <Row className='scroll-down-row' justify='center'>
                  <Col span={24}>
                    <div className='scroll-down-hover' onClick={this.scrollDown}>
                      <div className='scroll-down-icon-container'>
                        <DownCircleOutlined className='scroll-down-icon' />
                      </div>
                      <div>
                        <Text className='scroll-down-text'>Scroll</Text>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className='newsletter-container' ref={this.ref}>
              <div className='newsletter-description'>
                <Title level={2} code={true}>Subscribe to our Newsletter!</Title>
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
                  <Title level={2} code={true}>A Cozy World for Pet Lovers!</Title>
                </Col>
              </Row>
              <div>
                <Carousel beforeChange={this.onCarouselChange}>
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
                  <div>
                    <div className="carousel-card">
                      <img
                        className="carousel-img"
                        src={ImgNightWalk}
                      />
                    </div>
                  </div>
                </Carousel>
                <div className='carousel-description'>
                  <Title level={3}>{carouselTitle}</Title>
                  <Text>{carouselDescription}</Text>
                </div>
              </div>
            </div>
            <div className='instagram-container'>
              <Row className='instagram-description' justify='center'>
                <Col span={12}>
                  <Title level={2} code={true}>Featured Social Media</Title>
                </Col>
              </Row>
              <InstagramPosts />
            </div>
          </Content>
          <Footer className='page-footer'>
            <div className='footer-logo-container'>
              <div className='footer-logo' />
            </div>
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

export default withRouter(Home);

