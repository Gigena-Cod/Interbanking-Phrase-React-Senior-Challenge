import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  gap: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NewPhraseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const PhrasesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 1rem;
  flex: 1;
  grid-auto-flow: dense;
  margin: 0 auto;
  width: 100%;
  overflow-y: overlay;
  align-content: flex-start;
`;
