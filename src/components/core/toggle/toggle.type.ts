type Variant = "primary" | "secondary" | "danger" | "success" | "warning";

export interface ToggleProps {
  label: string;
  name: string;
  variant: Variant;
  id?: string;
}
