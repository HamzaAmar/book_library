import React from "react";

import { TextProps } from "./text.type";
import styles from "./text.module.css";

const text = (props: TextProps) => {
  const {
    children,
    as: Comp = "p",
    size = "md",
    color = "main",
    className,
    ...rest
  } = props;

  const classNames = `${styles[size]} ${styles[color]} ${className}`;

  return (
    <Comp className={classNames} {...rest}>
      {children}
    </Comp>
  );
};

export default text;
