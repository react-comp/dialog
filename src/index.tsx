import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as PropTypes from 'prop-types';
//
import './index.scss';

export interface DialogProps {
  children?: React.ReactNode, // 内容
  visible?: boolean,          // 对话框是否可见
  maskStyle?: string,         // 遮罩层的样式
  contentStyle?: string,       // 内容的样式
  maskClosable?: boolean,     // 是否能通过点击遮罩层关闭对话框
  onClose?: () => void;       // Props.maskClosable 值为 true 时的遮罩层点击回调
}

const defaultMaskStyle = {
  zIndex: 99999,
};

const defaultContentStyle = {
  top: '30%',
};

export default class Dialog extends React.PureComponent<DialogProps> {
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
    maskStyle: PropTypes.object,
    maskClosable: PropTypes.bool,
    contentStyle: PropTypes.object,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    visible: false,
    children: null,
    zIndex: 99999,
    maskStyle: defaultMaskStyle,
    contentStyle: defaultContentStyle,
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
    const { children, maskStyle = {}, contentStyle = {}, maskClosable } = this.props;
    const { visible } = this.state;
    const currMaskStyle = Object.assign({}, defaultMaskStyle, maskStyle);
    const currContentStyle = Object.assign({}, defaultContentStyle, contentStyle);

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        className="rcp-dialog__mask"
        onClick={maskClosable ? this.close : undefined}
        style={currMaskStyle}
      >
        <div
          className="rcp-dialog__content"
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