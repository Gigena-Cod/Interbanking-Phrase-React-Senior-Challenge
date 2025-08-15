import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  height: 6rem;
  border-radius: 0.5rem;
  gap: 1rem;
  flex-wrap: wrap;
  align-content: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.31);
`;

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const SkeletonText = styled.div<{ $width?: string }>`
  display: flex;
  width: ${(props) => props.$width || "100%"};
  height: 1rem;
  border-radius: 4px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 37%, #e0e0e0 63%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;
