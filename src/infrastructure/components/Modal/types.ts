export interface ModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    children: React.ReactNode;
    primaryButtonTitle: string;
    secondaryButtonTitle: string;
    primaryButtonDisabled?: boolean;
    secondaryButtonDisabled?: boolean;
    height?: string;
    onPrimaryButtonClick: () => void;
    onSecondaryButtonClick: () => void;
}