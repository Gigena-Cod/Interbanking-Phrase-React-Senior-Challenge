export interface ButtonProps {
  title: string;
  type?: TYPE;
  onClick?: () => void;
}

export enum TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
