import React, { useState } from "react";

import styles from "./formController.module.css";
import { FormControllerProps } from "./formController.type";

const FormController = ({
  children,
  id,
  label,
  required: isRequired,
}: FormControllerProps) => {
  const [message] = useState("");
  const messageBlock = message ? <div>message</div> : null;
  const required = isRequired ? "*" : null;
  return (
    <>
      <div className={styles.elementController}>
        <label className={styles.label} htmlFor={id}>
          {label} {required}
        </label>
        {children}
      </div>
      {messageBlock}
    </>
  );
};

FormController.displayName = "FormController";

export default FormController;
