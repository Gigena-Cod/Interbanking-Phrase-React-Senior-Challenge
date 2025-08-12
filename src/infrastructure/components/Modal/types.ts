export interface ModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    children: React.ReactNode;
    primaryButtonTitle: string;
    secondaryButtonTitle: string;
    onPrimaryButtonClick: () => void;
    onSecondaryButtonClick: () => void;
}