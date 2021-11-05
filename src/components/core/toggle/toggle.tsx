import React from "react";
import cn from "classnames";

import styles from "./toggle.module.css";
import { ToggleProps } from "./toggle.type";

const toggle = ({
  label,
  name,
  variant = "primary",
  id = name,
}: ToggleProps) => {
  const root = cn(styles.toggle, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.danger]: variant === "danger",
    [styles.warning]: variant === "warning",
    [styles.success]: variant === "success",
  });
  return (
    <label className={root} htmlFor={id}>
      <span className={styles.toggleInput}>
        <input
          className={`w-visually-hidden ${styles.input}`}
          type="checkbox"
          name={name}
          id={id}
        />
        <span className={styles.toggleControl} />
      </span>
      <span className={styles.toggleLabel}>{label}</span>
    </label>
  );
};

toggle.displayName = "Toggle";

export default toggle;
