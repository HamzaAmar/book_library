import React from "react";
import { Check } from "@components/icons";

import styles from "./checkbox.module.css";
import { CheckboxProps } from "./checkbox.type";

const checkbox = ({ label, name, variant = "primary" }: CheckboxProps) => {
  const classNames = `${styles.checkbox} ${styles[variant]}`;
  return (
    <label className={classNames}>
      <span className={styles.checkboxInput}>
        <input
          className={`w-visually-hidden ${styles.input}`}
          type="checkbox"
          name={name}
        />
        <span className={styles.checkboxControl}>
          <Check aria-hidden="true" focusable="false" />
        </span>
      </span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
};

checkbox.displayName = "CheckBox";

export default checkbox;
