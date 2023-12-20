import React, { Component } from 'react'
import { Layout, Col, Row, Space, Typography, Collapse } from 'antd';
import { withRouter } from './withRouter'

import Header from './Header';
import Footer from './Footer';
import { faqData } from './faqData';

import './Faq.css'

const { Content } = Layout;
const { Title } = Typography;

class Faq extends Component {
  render() {
    return (
      <div className="faq" >
        <Layout>
          <Header isHomePage={false} />
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
                    {faqData.map((data, idx) => {
                      return <Collapse
                        key={idx}
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
          <Footer />
        </Layout>
      </div >
    );
  }
}

export default withRouter(Faq);
