import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, Footer } from 'components';

export default function App(props) {
  return (
    <div className="page-wrapper">
      <Helmet
        title="React Universal Saga Modular"
        meta={[{ property: 'og:site_name', content: 'React Universal Saga Modular' }]}
      />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

