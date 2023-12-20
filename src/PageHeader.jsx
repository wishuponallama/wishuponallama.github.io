import React, { Component } from 'react'
import { Layout, Col, Row, Input, Button, Space, Typography, Carousel, Modal } from 'antd';
import { TwitterOutlined, InstagramOutlined, VideoCameraOutlined, DownCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { withRouter } from './withRouter'

import './PageHeader.css';

const { Header } = Layout;

class PageHeader extends Component {
  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  render() {
    const { isHomePage } = this.props;
    const homePageHeader = (
      <Header className='page-header'>
        <Button className='faq-button' type='text' size='large' onClick={() => this.toPage("faq")}>FAQ</Button>
        <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage("presskit")}>PRESS KIT</Button>
      </Header>
    );
    const nonHomePageHeader = (
      <Header className='nonhome-page-header'>
        <Button className='home-button' type='text' size='large' onClick={() => this.toPage('')}>HOME</Button>
        <Button className='faq-button' type='text' size='large' onClick={() => this.toPage('faq')}>FAQ</Button>
        <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage('presskit')}>PRESS KIT</Button>
      </Header>
    );
    const header = isHomePage ? homePageHeader : nonHomePageHeader;
    return header;
  }
}

PageHeader.propTypes = {
  isHomePage: PropTypes.bool
};

export default withRouter(PageHeader);

