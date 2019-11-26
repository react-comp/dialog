import * as React from "react";
import * as ReactDOM from "react-dom";
import * as PropTypes from 'prop-types';
//
import './index.scss';

interface IPlace {
  top?: string,
  bottom?: string,
  left?: string,
  right?: string,
}

export interface DialogProps {
  children?: React.ReactNode, // 内容
  visible?: boolean,          // 对话框是否可见
  place?: IPlace,             // 内容离顶部的距离
  maskBgColor?: string,       // 遮罩层的背景色
  maskClosable?: boolean,     // 是否能通过点击遮罩层关闭对话框
  onClose?: () => void;       // Props.maskClosable 值为 true 时的遮罩层点击回调
}

export default class Dialog extends React.PureComponent<DialogProps> {
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
    place: PropTypes.object,
    maskBgColor: PropTypes.string,
    maskClosable: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    visible: false,
    children: null,
    place: { top: '30%' },
    maskBgColor: '',
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
    const { children, place = { top: '30%' }, maskBgColor = undefined, maskClosable } = this.props;
    const { visible } = this.state;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        className="rcp-dialog__mask"
        onClick={maskClosable ? this.close : undefined}
        style={{ backgroundColor: maskBgColor }}
      >

        <div
          className="rcp-dialog__content"
          onClick={this.stopPropagation}
          style={{ ...place }}
        >
          { children }
        </div>

      </div>,
      document.body
    )
  }
}