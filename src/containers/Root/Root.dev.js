import has from 'lodash/has';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, RouterContext, applyRouterMiddleware } from 'react-router';
import GoogleAnalytics from 'react-ga';
import { useScroll } from 'react-router-scroll';
import { App } from 'containers';

export default class Root extends Component {
  onUpdate = () => {
    const { store, type } = this.props;
    if (type !== 'server') {
      const state = store.getState();
      if (has(state, 'router.pathname')) {
        GoogleAnalytics.pageview(state.router.pathname);
      }
    }
  }

  render() {
    const { store, history, routes, type, renderProps } = this.props;
    return (
      <Provider store={store}>
        <App>
          {type === 'server'
            ? <RouterContext {...renderProps} />
            : <Router
              history={history}
              routes={routes}
              onUpdate={this.onUpdate}
              render={applyRouterMiddleware(useScroll())}
            />
          }
        </App>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired,
  type: PropTypes.string,
  renderProps: PropTypes.object
};
