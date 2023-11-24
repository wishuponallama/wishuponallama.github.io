import React, { Component } from 'react'
import { Layout, Col, Row, Descriptions, Tooltip, Button, Space, Typography, Carousel, Modal, Tag, message, Flex } from 'antd';
import { TwitterOutlined, InstagramOutlined, CopyOutlined, FolderOutlined } from '@ant-design/icons';

import { withRouter } from './withRouter';

import './PressKit.css'

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const basicInfoRaw = [
  {
    label: 'Game name',
    children: 'Wish Upon A Llama',
  },
  {
    label: 'Release date',
    children: '2024',
  },
  {
    label: 'Platforms',
    children: 'PC and Mac',
  },
  {
    label: 'Developer',
    children: 'Millionhare Studios'
  },
  {
    label: 'Tags',
    span: 2,
    children: 'RPG, 2D, Farming Sim, Animals, Cozy, Wholesome',
    childrenFunc: tags => {
      const tagsList = tags.split(', ');
      return tagsList.map((tag, idx) => {
        return <Tag key={idx.toString()}>{tag}</Tag>
      });
    }
  },
];

const basicInfo = basicInfoRaw.map((elem, idx) => {
  let children = elem.children;
  if ('childrenFunc' in elem) {
    children = elem.childrenFunc(elem.children);
  }
  return {
    key: idx.toString(),
    label: elem.label,
    children: children
  };
});

const copyBasicInfoIcon = (
  <Tooltip title="copy">
    <Button
      className='copy-basic-info-button'
      shape="circle"
      icon={<CopyOutlined />}
      onClick={async () => {
        await navigator.clipboard.writeText("foo");
        message.success('Successfully copied to clipboard');
      }}
    />
  </Tooltip>
);

class PressKit extends Component {
  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  render() {
    return (
      <div className='presskit' >
        <Layout>
          <Header className='nonhome-page-header'>
            <Button className='home-button' type='text' size='large' onClick={() => this.toPage('')}>HOME</Button>
            <Button className='faq-button' type='text' size='large' onClick={() => this.toPage('faq')}>FAQ</Button>
            <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage('presskit')}>PRESS KIT</Button>
          </Header>
          <Content>
            <div className='presskit-container'>
              <Row justify='center'>
                <Col span={16}>
                  <Space
                    direction='vertical'
                    size='middle'
                  >
                    <div className='presskit-title-container'>
                      <Title code={true} level={2}>Press Kit</Title>
                      <Button type="primary" icon={<FolderOutlined />} size='large'>
                        View all Assets
                      </Button>
                    </div>
                    <Descriptions className='basic-info-descriptions' layout="vertical" items={basicInfo} extra={copyBasicInfoIcon} />
                    <div className='presskit-description'>
                      <Space
                        direction='vertical'
                        size='small'
                      >
                        <Title code={true} level={4}>About the Game</Title>
                        <Paragraph>
                          <b>Wish Upon A Llama</b> is a cozy, animal genetics-focused RPG for pet lovers! As Llama Town's dedicated rancher, it is your responsibility to provide whole-hearted love and care for your beloved friends.
                        </Paragraph>
                        <Paragraph className='paragraph'>
                          Some cool features in the game 🙂 {'\n\n'}
                          🐰 Animals come in various colours, patterns, and personalities. Baby animals will inherit genetic traits from both parents, so you'll need to consider these factors as you breed your animals. Can you discover all 50+ special breeds? {'\n\n'}
                          🍊 Cultivate strong connections with your companions through mini-games like fetch, and by showering them with pets, snacks, and toys! {'\n\n'}
                          ❤️ Forge new friendships and perhaps discover romance. Challenge your friends to activities like jump rope, town cleaning, trivia games, spelling bees, and more. {'\n\n'}
                          🏦 By fueling the town's fundraising efforts, witness the unveiling of new infrastructure and breathtaking locales -- think vacation islands, lush forests, bustling cities, and picturesque beaches! {'\n\n'}
                          🌟 Unleash your creativity and personalize your dwelling and surrounding land. Fill them with decor to make your one-of-a-kind dream home
                        </Paragraph>
                      </Space>
                    </div>
                    <div className='presskit-description'>
                      <Space
                        direction='vertical'
                        size='small'
                      >
                        <Title code={true} level={4}>About Millionhare Studios</Title>
                        <Paragraph>
                          We're <b>Millionhare Studios</b>, the development team behind Wish Upon A Llama! We aspire to share our passion for animals with the gaming community and those keen on experiencing the joys and coziness of animal care.
                          Our guiding principles during development are "our pets are our family" and "you should never feel lonely." We hope you enjoy playing Wish Upon A Llama as much as we did building it 😁
                        </Paragraph>
                      </Space>
                    </div>
                  </Space>
                </Col>
              </Row>
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
        </Layout>
      </div >
    );
  }
}

export default withRouter(PressKit);
