import type { PhraseProps } from "./types";
import { Container } from "./Styled"; 
import { Text } from "../../../../components";

export function Phrase(phraseProps: PhraseProps) {
  const { text } = phraseProps;
  
  return (
    <Container>
      <Text value={text} />
    </Container>
  );
}
