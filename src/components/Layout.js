import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default class Layout extends Component {
    render() {
    return (
      <div id="wrapper">
		    <Header />
            <Nav />
            <Main />
            <Footer />
      </div>
    );
  };
};