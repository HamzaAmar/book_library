import React, { TextareaHTMLAttributes } from "react";

type Size = "small" | "medium" | "large" | "fluid";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaSize?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  touched?: boolean;
  error?: string;
}
