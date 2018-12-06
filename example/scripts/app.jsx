import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
//
import Dialog from '../../src/index.tsx';
import Confirm from './confirm/confirm';
//
import './app.scss';

export default class App extends PureComponent {
  static propTypes = {

  };

  static defaultProps = {

  }

  state = {
    visible: true,
  }

  clickBtn = () => {
    this.setState({ visible: true });
  }

  closeCallback = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <Fragment>
        <button
          className='app__btn'
          onClick={this.clickBtn}
        >
          toggle modal button
        </button>

        <Dialog
          visible={visible}
          onClose={this.closeCallback}
          top='30%'
          maskBgColor="rbga(0,0,0,.5)"
          maskClosable={true}
        >
          <Confirm />
        </Dialog>
      </Fragment>
    );
  }
}
