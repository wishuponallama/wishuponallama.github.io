import React, { Component } from 'react'
import { Layout, Button, Dropdown, Space } from 'antd';
import PropTypes from 'prop-types';
import { MenuOutlined } from '@ant-design/icons';
import { withRouter } from './withRouter'

import './Header.css';

const { Header: AntHeader } = Layout;

class Header extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        key: '1',
        label: (
          <div onClick={() => this.toPage("faq")}>
            Frequently Asked Questions
          </div>
        ),
      },
      {
        key: '2',
        label: (
          <div onClick={() => this.toPage("presskit")}>
            Press Kit
          </div>
        ),
      }
    ];
  }

  toPage = (pageUrl) => {
    this.props.navigate("/" + pageUrl);
  }

  render() {
    const { isHomePage } = this.props;
    const homePageHeader = (
      <AntHeader className='page-header'>
        <Button className='faq-button' type='text' size='large' onClick={() => this.toPage("faq")}>FAQ</Button>
        <Button className='press-kit-button' type='text' size='large' onClick={() => this.toPage("presskit")}>PRESS KIT</Button>
        <Dropdown
          menu={{
            items: this.items
          }}
        >
          <span onClick={(e) => e.preventDefault()}>
            <MenuOutlined />
          </span>
        </Dropdown>
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

