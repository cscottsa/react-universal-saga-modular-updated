import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, Footer } from 'components';

export default function App(props) {
  return (
    <div>
      <Helmet
        title="React Universal Saga Modular"
        meta={[{ property: 'og:site_name', content: 'React Universal Saga Modular' }]}
      />
      <Header />
      <div className="wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

