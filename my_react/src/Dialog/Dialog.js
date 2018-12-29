import React, { Component } from "react";
import merge from "lodash/merge";
import "./index.css";

const time = 10;

const timeToAutoHide = 200000;
class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      sign: {
        show: false,
        text: "信息提交成功！",
        icon: "true",
        onHide: () => {}
      },
      singleButton: {
        show: false,
        text: "一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",
        title: "确认要删除这条信息吗？",
        onConfirm: () => {}
      },
      coupleButton: {
        show: false,
        text: "一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",
        title: "确认要删除这条信息吗？",
        onConfirm: () => {},
        onCancel: () => {}
      },
      custom: {
        show: false,
        content: <div>自定义内容</div>,
        width: 416,
        height: 228
      },
      customWithCoupleButton: {
        show: false,
        content: <div>自定义内容</div>,
        width: 416,
        height: 228,
        onConfirm: () => {},
        onCancel: () => {}
      }
    };
  }
  sign({ icon, text, onHide }) {
    this.setState(
      {
        sign: {
          icon,
          text,
          onHide
        }
      },
      () => {
        this.show("sign", true, onHide);
      }
    );
  }
  singleButton({ title = "温馨提示", text, onConfirm }) {
    this.setState(
      {
        singleButton: {
          title,
          text,
          onConfirm
        }
      },
      () => {
        this.show("singleButton");
      }
    );
  }
  coupleButton({ title = "温馨提示", text, onConfirm, onCancel }) {
    this.setState(
      {
        coupleButton: {
          title,
          text,
          onConfirm,
          onCancel
        }
      },
      () => {
        this.show("coupleButton");
      }
    );
  }
  custom({ width, height, content }) {
    this.setState(
      {
        custom: {
          width: width || this.state.width,
          height: height || this.state.height,
          content
        }
      },
      () => {
        this.show("custom");
      }
    );
  }
  customWithCoupleButton({ width, height, content, onCancel, onConfirm }) {
    this.setState(
      {
        customWithCoupleButton: {
          width: width || this.state.width,
          height: height || this.state.height,
          content,
          onCancel: onCancel,
          onConfirm: onConfirm
        }
      },
      () => {
        this.show("customWithCoupleButton");
      }
    );
  }
  hide(onHide) {
    document.body.style.overflow = "auto";
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    let active = this.state.active;
    this.setState(
      merge({}, this.state, {
        active: "",
        [active]: {
          show: false
        }
      }),
      () => {
        onHide && onHide();
      }
    );
  }
  show(active, autoHide, onHide) {
    document.body.style.overflow = "hidden";
    this.setState(
      merge({}, this.state, {
        active,
        [active]: {
          show: true
        }
      }),
      () => {
        if (autoHide) {
          this.timeout = setTimeout(
            this.hide.bind(this, onHide),
            timeToAutoHide
          );
        }
      }
    );
  }
  render() {
    let sign = this.state.sign;
    let singleButton = this.state.singleButton;
    let coupleButton = this.state.coupleButton;
    let custom = this.state.custom;
    let customWithCoupleButton = this.state.customWithCoupleButton;
    let active = this.state.active;
    return (
      <div>
        {active && (
          <section
            className="fl_bg"
            onClick={this.hide.bind(this, sign.onHide)}
          />
        )}
        {active &&
          sign.show && (
            <section className={"fl_cm_tf " + sign.icon}>{sign.text}</section>
          )}
        {active &&
          singleButton.show && (
            <section className="fl_cm_info">
              <h2 className="fl_cm_info_h2">{singleButton.title}</h2>
              <p className="fl_cm_info_p">{singleButton.text}</p>
              <div className="fl_cm_btn_g">
                <a
                  href="javascript:;"
                  onClick={() => {
                    singleButton.onConfirm && singleButton.onConfirm();
                  }}
                  className="cm_btn"
                >
                  确定
                </a>
              </div>
            </section>
          )}
        {active &&
          coupleButton.show && (
            <section className="fl_cm_info">
              <h2 className="fl_cm_info_h2">{coupleButton.title}</h2>
              <p className="fl_cm_info_p">{coupleButton.text}</p>
              <div className="fl_cm_btn_g">
                <a
                  href="javascript:;"
                  onClick={() => {
                    coupleButton.onCancel && coupleButton.onCancel();
                  }}
                  className="cm_btn2"
                >
                  取消
                </a>
                <a
                  href="javascript:;"
                  onClick={() => {
                    coupleButton.onConfirm && coupleButton.onConfirm();
                  }}
                  className="cm_btn"
                >
                  确定
                </a>
              </div>
            </section>
          )}
        {active &&
          custom.show && (
            <section
              className="fl_cm_info"
              style={{
                width: custom.width,
                height: custom.height
              }}
            >
              {custom.content}
            </section>
          )}
        {active &&
          customWithCoupleButton.show && (
            <section
              className="fl_cm_info"
              style={{
                width: customWithCoupleButton.width,
                height: customWithCoupleButton.height
              }}
            >
              {customWithCoupleButton.content}
              <div className="fl_cm_btn_g">
                <a
                  href="javascript:;"
                  onClick={() => {
                    customWithCoupleButton.onCancel &&
                      customWithCoupleButton.onCancel();
                  }}
                  className="cm_btn2"
                >
                  取消
                </a>
                <a
                  href="javascript:;"
                  onClick={() => {
                    customWithCoupleButton.onConfirm &&
                      customWithCoupleButton.onConfirm();
                  }}
                  className="cm_btn"
                >
                  确定
                </a>
              </div>
            </section>
          )}
      </div>
    );
  }
}

export default Dialog;
