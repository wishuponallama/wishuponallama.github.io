import React, { Component } from 'react'
import { Layout, Button, Space, Typography } from 'antd';
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title } = Typography;

class Footer extends Component {
  render() {
    return (
      <AntFooter className='page-footer'>
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
                <Button id='social-media-button-instagram' type="primary" shape='circle' size='large' icon={<InstagramOutlined />} style={{ color: 'black', backgroundColor: 'white' }} href="https://www.instagram.com/wishuponallama" target="_blank" />
              </Space>
            </div>
            <div>
              © 2023 Millionhare Studios
            </div>
          </Space>
        </div>
      </AntFooter>
    );
  }
}

export default Footer;

