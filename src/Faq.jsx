import React, { Component } from 'react'
import { Layout, Col, Row, Input, Button, Space, Typography, Collapse } from 'antd';
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import { withRouter } from './withRouter';

import './Faq.css'

const { Header, Footer, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const faqData = [
  {
    question: 'What is Wish Upon A Llama?',
    answer: 'text',
  },
  {
    question: 'When will the game come out?',
    answer: 'text',
  },
  {
    question: 'What platforms will be supported?',
  },
  {
    question: 'How can I stay up to date with updates and news about the game?',
    answer: 'text',
  },
  {
    question: 'Will the game be multiplayer?',
    answer: 'text',
  },
  {
    question: 'Is the game family friendly?',
    answer: 'text',
  },
  {
    question: 'Can you add this animal ____ to the game?',
    answer: 'yes',
  },
  {
    question: 'Can I choose my pronouns in the game?',
    answer: 'text',
  },
  {
    question: 'Will there be romance in the game?',
    answer: 'text',
  },
  {
    question: 'I have more questions. Where can I ask them?',
    answer: 'text',
  },
];

class Faq extends Component {
  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  render() {
    return (
      <div className="faq" >
        <Layout>
          <Header className='nonhome-page-header'>
            <Button className='home-button' type='text' size='large' onClick={() => this.toPage('')}>HOME</Button>
            <Button className='faq-button' type='text' size='large' onClick={() => this.toPage('faq')}>FAQ</Button>
            <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage('presskit')}>PRESS KIT</Button>
          </Header>
          <Content>
            <div className="faq-container">
              <Row justify='center'>
                <Col span={16}>
                  <Space
                    className='faq-space'
                    direction='vertical'
                    size='middle'
                  >
                    <Title code={true} level={2}>Frequently Asked Questions</Title>
                    {faqData.map(data => {
                      return <Collapse
                        className='faq-item'
                        size="large"
                        bordered={false}
                        items={[
                          {
                            key: '1',
                            label: data.question,
                            children: <p>{data.answer}</p>,
                          },
                        ]} />;
                    })}
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

export default withRouter(Faq);
