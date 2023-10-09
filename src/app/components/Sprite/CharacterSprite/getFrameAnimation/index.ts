import { SIZE_CHARACTER } from "@/app/styles/size";
import { css, keyframes } from "styled-components";

type Props = {
  frameNumber: number;
};
const moveSpritesheet = keyframes`
   from {
      transform: translate3d(0px,0,0)
   }
   to {
      transform: translate3d(-100%,0,0)
   }
`;

export const getFrameAnimation = ({ frameNumber }: Props) => {
  return css`
    animation: ${moveSpritesheet} 1s steps(${frameNumber}) infinite;
  `;
};
