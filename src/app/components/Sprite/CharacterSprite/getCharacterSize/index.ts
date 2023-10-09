import { SIZE_CHARACTER } from "@/app/styles/size";
import { css } from "styled-components";

type Props = {
  frameSize: number;
  scale: number;
};
export const getCharacterSize = ({ frameSize, scale }: Props) => {
  return css`
    width: ${frameSize * scale}px;
  `;
};
