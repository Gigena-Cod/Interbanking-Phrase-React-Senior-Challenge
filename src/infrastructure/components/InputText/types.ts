export interface InputTextProps {
    value: string;
    placeholder: string;
    width?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}