/* eslint-disable @shopify/react-require-autocomplete */
import React from "react";
// import { Cross } from "@components/icons";

import { InputProps } from "./input.type";
import styles from "./input.module.css";

const input = (props: InputProps) => {
  const {
    inputSize = "fluid",
    leftIcon,
    rightIcon,
    touched,
    error,
    ...rest
  } = props;

  const leftIconBlock = leftIcon ? (
    <span className={styles.leftIcon}>{leftIcon}</span>
  ) : null;

  const rightIconBlock = rightIcon ? (
    <span className={styles.rightIcon}>{rightIcon}</span>
  ) : null;

  const inputClassNames = `${styles.input} ${styles[inputSize]}`;

  //   const messageContent =
  //     touched && error ? (
  //       <div className={styles.messageContainer}>
  //         <Cross width="15" />
  //         <small className={styles.message}> {error} </small>
  //       </div>
  //     ) : null;

  return (
    <>
      <div className={styles.inputContainer}>
        {leftIconBlock}
        <input
          className={inputClassNames}
          data-error={touched && Boolean(error)}
          {...rest}
        />
        {rightIconBlock}
      </div>
    </>
  );
};

input.displayName = "Input";

export default input;
