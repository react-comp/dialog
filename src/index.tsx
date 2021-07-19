import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
//
import './index.scss';

export interface DialogProps {
  children?: React.ReactNode,
  visible?: boolean,
  maskStyle?: string,
  maskClassName?: string,
  contentClassName?: string,
  contentStyle?: string,
  maskClosable?: boolean,
  onClose?: () => void;
}

const defaultMaskStyle = {
  zIndex: 99999,
};

const defaultContentStyle = {
};

export default class Dialog extends React.PureComponent<DialogProps> {
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
    maskStyle: PropTypes.object,
    maskClassName: PropTypes.string,
    maskClosable: PropTypes.bool,
    contentStyle: PropTypes.object,
    contentClassName: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    visible: false,
    children: null,
    zIndex: 99999,
    maskClassName: undefined,
    maskStyle: defaultMaskStyle,
    contentStyle: defaultContentStyle,
    contentClassName: undefined,
    maskClosable: true,
    onClose: () => {},
  }

  state = {
    visible: this.props.visible,
  };

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.visible !== props.visible) this.setState({ visible: props.visible });
  }

  close = (e) => {
    this.setState({ visible: false });

    this.props.onClose();
  }

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  render() {
    const { children, maskStyle = {}, contentStyle = {}, maskClosable, maskClassName, contentClassName } = this.props;
    const { visible } = this.state;
    const currMaskStyle = Object.assign({}, defaultMaskStyle, maskStyle);
    const currContentStyle = Object.assign({}, defaultContentStyle, contentStyle);

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        className={`rcp-dialog__mask ${maskClassName}`}
        onClick={maskClosable ? this.close : undefined}
        style={currMaskStyle}
      >
        <div
          className={`rcp-dialog__content ${contentClassName}`}
          onClick={this.stopPropagation}
          style={currContentStyle}
        >
          { children }
        </div>
      </div>,
      document.body
    )
  }
}