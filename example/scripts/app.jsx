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
    visible: false,
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
          maskStyle={{ backgroundColor: 'rbga(0,0,0,.5)' }}
          contentStyle={{ top: '30%', animation: 'normal' }}
          maskClosable={true}
          contentClassName="warrant-dialog__content"
          maskClassName="warrant-dialog__mask"
        >
          <Confirm />
        </Dialog>
      </Fragment>
    );
  }
}
