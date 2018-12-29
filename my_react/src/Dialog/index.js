import Dialog from "./Dialog";
import React from "react";
import { render } from "react-dom";

let div = document.createElement("div");

document.body.appendChild(div);

let DialogInstance = render(<Dialog />, div);

export default {
  success: (text, onHide) => {
    let icon = "true";
    DialogInstance.sign({
      icon,
      text,
      onHide
    });
  },
  fail: (text, onHide) => {
    let icon = "false";
    DialogInstance.sign({
      icon,
      text,
      onHide
    });
  },
  singleButton: ({ title, text, onConfirm }) => {
    DialogInstance.singleButton({
      title,
      text,
      onConfirm
    });
  },
  coupleButton: ({ title, text, onConfirm, onCancel }) => {
    DialogInstance.coupleButton({
      title,
      text,
      onConfirm,
      onCancel
    });
  },
  custom: ({ content, width, height }) => {
    DialogInstance.custom({
      content,
      width,
      height
    });
  },
  customWithCoupleButton: ({ content, width, height, onConfirm, onCancel }) => {
    DialogInstance.customWithCoupleButton({
      content,
      width,
      height,
      onCancel,
      onConfirm
    });
  },
  hide: () => {
    DialogInstance.hide();
  }
};
