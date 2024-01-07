import React, { Component } from 'react'
import { Layout, Col, Row, Input, Button, Typography, Carousel, Modal, message } from 'antd';
import { VideoCameraOutlined, DoubleRightOutlined } from '@ant-design/icons';

import InstagramPosts from './InstagramPosts';
import Header from './Header';
import Footer from './Footer';
import { carouselData } from './homeData';
import Fader from './Fader';

import './Home.css';

import ImgFamilyTree from './assets/family-tree.png';
import ImgNightWalk from './assets/night-walk.png';
import ImgPlayingTennis from './assets/playing-tennis.png'
import ImgDecorateYard from './assets/decorate-yard.png'

import ImgWishText from './assets/text/wish.png';
import ImgUponText from './assets/text/upon.png';
import ImgAText from './assets/text/a.png';
import ImgLlamaText from './assets/text/llama.png';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Search } = Input;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrailerModalOpen: false,
      openedTrailer: false,
      dummyKey: 0,
      prevCarouselIdx: 0,
      carouselIdx: 0
    };
    this.ref = React.createRef();
  }

  openTrailerModal = () => {
    // Don't show the message unless the user refreshes
    if (!this.state.openedTrailer) {
      message.info("Don't forget to unmute the video to hear our music!");
    }
    this.setState({ isTrailerModalOpen: true, openedTrailer: true });
  }

  closeTrailerModal = () => {
    // Using dummyKey is a hack to update the state of the iframe
    this.setState({ isTrailerModalOpen: false, dummyKey: this.state.dummyKey + 1 });
  }

  scrollDown = () => {
    this.ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  onCarouselChange = (currIdx, nextIdx) => {
    this.setState({ prevCarouselIdx: currIdx, carouselIdx: nextIdx });
  }

  onSubmitEmail = _ => {
    message.success('Successfully subscribed. Thank you for your interest!');
  };

  render() {
    const { title: prevCarouselTitle, description: prevCarouselDescription } = carouselData[this.state.prevCarouselIdx];
    const { title: carouselTitle, description: carouselDescription } = carouselData[this.state.carouselIdx];
    return (
      <div className="home" >
        <Layout>
          <Content className='page-content'>
            <div className='background'>
              <Header isHomePage={true} />
              <div className='header'>
                <Row justify='center'>
                  <Col span={12}>
                    <div className='home-title'>
                      <img src={ImgWishText} />
                      <img src={ImgUponText} />
                      <img src={ImgAText} />
                      <img src={ImgLlamaText} />
                    </div>
                  </Col>
                </Row>
                <Row className='trailer-row' justify='end'>
                  <Col span={10}>
                    <div className='trailer-container'>
                      <Button type="primary" icon={<VideoCameraOutlined />} size='large' onClick={this.openTrailerModal}>WATCH TRAILER</Button>
                      {/* TODO: make this responsive!! */}
                      {/* Setting width = 911, height = 512px is the perfect dimensions such that there's no black space around the youtube video */}
                      <Modal width={911} wrapClassName="trailer-modal" centered={true} open={this.state.isTrailerModalOpen} footer={null} closeIcon={null} onCancel={this.closeTrailerModal}>
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
                        <DoubleRightOutlined className='scroll-down-icon' rotate={90} />
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
              <Search
                className="enter-email"
                placeholder="Enter your email"
                enterButton="Submit"
                size="large"
                onSearch={this.onSubmitEmail}
              />
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
                        src={ImgDecorateYard}
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
          <Footer />
        </Layout >
      </div >
    );
  }
}

export default Home;

