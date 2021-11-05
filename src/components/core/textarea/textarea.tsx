import React from "react";

import { InputProps } from "./textarea.type";
import styles from "./textarea.module.css";

const textarea = (props: InputProps) => {
  const { textareaSize = "fluid", touched, error, ...rest } = props;

  const textareaClassNames = `${styles.textarea} ${styles[textareaSize]}`;

  return (
    <>
      <div className={styles.textareaContainer}>
        <textarea
          className={textareaClassNames}
          data-error={touched && Boolean(error)}
          {...rest}
        >
          helo
        </textarea>
      </div>
    </>
  );
};

textarea.displayName = "Input";

export default textarea;
