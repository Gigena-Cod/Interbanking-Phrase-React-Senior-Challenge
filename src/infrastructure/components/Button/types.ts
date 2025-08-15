export interface ButtonProps {
  title: string;
  type?: TYPE;
  disabled?: boolean;
  onClick?: () => void;
}

export enum TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}
