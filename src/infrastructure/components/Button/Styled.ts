import { styled } from "styled-components";
import { TYPE } from "./types";

/**
 * Function to get the styles for the button based on the type
 * @param {TYPE} $type - The type of the button (primary or secondary)
 * @returns {Object} - The styles for the button
 */
const getButtonStyles = ($type?: TYPE, $disabled?: boolean) => {
  if ($disabled) {
    return {
      background: "rgb(184, 184, 184)",
      border: "1px solid rgb(184, 184, 184)",
      boxShadow: "rgba(184, 184, 184, 0.15)",
      cursor: "not-allowed",
    };
  }

  switch ($type) {
    case TYPE.PRIMARY:
      return {
        background: "#1E87F0",
        border: "1px solid #1E87F0",
        boxShadow: "rgba(30, 135, 240, 0.15)",
        cursor: "pointer",
      };
    case TYPE.TERTIARY:
      return {
        background: "rgba(247, 70, 88, 1)",
        border: "1px solid rgba(247, 70, 88, 1)",
        boxShadow: "rgba(247, 70, 88, 0.15)",
        cursor: "pointer",
      };
    default:
      return {
        background: "#fff",
        border: "1px solid #ffffff",
        boxShadow: "rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
      };
  }
};

export const Container = styled.button<{ $type?: TYPE; $disabled?: boolean }>`
  ${({ $type, $disabled }) => {
    const styles = getButtonStyles($type, $disabled);
    return `
      background-color: ${styles.background};
      border: ${styles.border};
      box-shadow: 0px 0px 12px 0px ${styles.boxShadow};
      -webkit-box-shadow: 0px 0px 12px 0px ${styles.boxShadow};
      -moz-box-shadow: 0px 0px 12px 0px ${styles.boxShadow};
    `;
  }}
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 2.25rem;
  width: max-content;
  margin: 0;
`;
