import { Container, SkeletonText } from "./Styled";

export function SkeletonPhrase() {
  return (
    <Container>
      <SkeletonText $width="6rem" />
      <SkeletonText $width="8rem" />
      <SkeletonText $width="4rem" />
      <SkeletonText $width="12rem" />
      <SkeletonText $width="8rem" />
    </Container>
  );
}
