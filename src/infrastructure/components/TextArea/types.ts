export interface TextAreaProps {
  value: string;
  placeholder?: string;
  width?: string;
  minHeight?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
