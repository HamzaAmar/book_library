type Variant = "primary" | "secondary" | "danger" | "success" | "warning";

export interface CheckboxProps {
  label: string;
  name: string;
  variant: Variant;
}
