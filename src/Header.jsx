import React, { Component } from 'react'
import { Layout, Button } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from './withRouter'

import './Header.css';

const { Header: AntHeader } = Layout;

class Header extends Component {
  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  render() {
    const { isHomePage } = this.props;
    const homePageHeader = (
      <AntHeader className='page-header'>
        <Button className='faq-button' type='text' size='large' onClick={() => this.toPage("faq")}>FAQ</Button>
        <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage("presskit")}>PRESS KIT</Button>
      </AntHeader>
    );
    const nonHomePageHeader = (
      <AntHeader className='nonhome-page-header'>
        <Button className='home-button' type='text' size='large' onClick={() => this.toPage('')}>HOME</Button>
        <Button className='faq-button' type='text' size='large' onClick={() => this.toPage('faq')}>FAQ</Button>
        <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage('presskit')}>PRESS KIT</Button>
      </AntHeader>
    );
    const header = isHomePage ? homePageHeader : nonHomePageHeader;
    return header;
  }
}

Header.propTypes = {
  isHomePage: PropTypes.bool
};

export default withRouter(Header);

