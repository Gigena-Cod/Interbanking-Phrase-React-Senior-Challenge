import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  gap: 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const NewPhraseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
`;

export const PhrasesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 2rem;
  flex: 1;
  grid-auto-flow: dense;
  margin: 0 auto;
  width: 100%;
  overflow-y: overlay;
  align-content: flex-start;
  padding: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(165, 165, 165);
    border-radius: 5px;
  }
`;
