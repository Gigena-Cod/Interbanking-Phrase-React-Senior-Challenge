import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.375);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 28rem;
  height: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: overlay;
  flex: 1;
`;

export const ModalFooter = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
