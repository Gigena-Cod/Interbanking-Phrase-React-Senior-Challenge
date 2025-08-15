import {
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "./Styled";
import { Text } from "../Text/Text";
import { Button } from "../Button/Button";
import { FONT_SIZE, FONT_WEIGHT } from "../Text/types";
import { TYPE } from "../Button/types";
import type { ModalProps } from "./types";

/**
 * Custom modal component
 * @param {ModalProps} modalProps - Props for the modal component
 * @param {boolean} modalProps.isOpen - Whether the modal is open or not
 * @param {string} modalProps.title - The title of the modal
 * @param {string} modalProps.description - The description of the modal
 * @param {ReactNode} modalProps.children - The content of the modal
 * @param {string} modalProps.primaryButtonTitle - The title of the primary button
 * @param {string} modalProps.secondaryButtonTitle - The title of the secondary button
 * @param {Function} modalProps.onPrimaryButtonClick - The click handler for the primary button
 * @param {Function} modalProps.onSecondaryButtonClick - The click handler for the secondary button
 */
export function Modal(modalProps: ModalProps) {
  const {
    isOpen,
    title,
    description,
    children,
    primaryButtonTitle,
    secondaryButtonTitle,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
  } = modalProps;

  return (
    isOpen && (
      <Container>
        <ModalContent>
          <ModalHeader>
            <Text
              value={title}
              fontSize={FONT_SIZE.TEXT_BASE}
              fontWeight={FONT_WEIGHT.FONT_BOLD}
            />
            <Text value={description} fontSize={FONT_SIZE.TEXT_SM} />
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button
              title={secondaryButtonTitle}
              onClick={onSecondaryButtonClick}
            />
            <Button
              title={primaryButtonTitle}
              onClick={onPrimaryButtonClick}
              type={TYPE.PRIMARY}
            />
          </ModalFooter>
        </ModalContent>
      </Container>
    )
  );
}
