/* eslint-disable react/button-has-type */
import React from "react";
import cn from "classnames";

import { ButtonProps } from "./button.type";
import styles from "./button.module.css";

const button = (props: ButtonProps) => {
  const {
    children,
    icon,
    size = "small",
    iconPosition = "start",
    variant = "contained",
    color = "primary",
    type = "button",
    radius = "none",
    className,
    ...rest
  } = props;

  const classNames = `${styles.btn} ${styles[radius]} ${styles[variant]} ${styles[color]} ${styles[size]} ${className}`;

  const left = icon && iconPosition === "start";

  const right = icon && iconPosition === "end";

  return (
    <button className={classNames} type={type} {...rest}>
      {left && icon}
      <span
        className={cn({
          [styles.leftMargin]: left,
          [styles.rightMargin]: right,
        })}
      >
        {children}
      </span>
      {right && icon}
    </button>
  );
};

button.displayName = "Button";

export default button;
