# Introduction

dialog

# Install

npm

```shell
npm install @react-comp/dialog
```

yarn

```shell
yarn add @react-comp/dialog
```

# Demo

[demo](https://react-comp.github.io/dialog/)

## Usage

```js
import Dialog from "@react-comp/dialog";
import "@react-comp/dialog/dist/dialog.css";

// ...
```

## Props

```js
{
  children?: React.ReactNode, // 内容
  visible?: boolean,          // 对话框是否可见
  zIndex?: number,            // z-index
  place?: {
    top?: string,
    right?: string,
    bottom?: string,
    left?: string
  },                          // 内容离顶部的距离
  maskBgColor?: string,       // 遮罩层的背景色
  maskClosable?: boolean,     // 是否能通过点击遮罩层关闭对话框
  onClose?: () => void;       // Props.maskClosable 值为 true 时的遮罩层点击回调
}
```
