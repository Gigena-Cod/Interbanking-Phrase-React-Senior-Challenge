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
