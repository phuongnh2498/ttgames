import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import { getCharacterSize } from "./getCharacterSize";
import { getFrameAnimation } from "./getFrameAnimation";

type CharacterSprite = {
  spriteImage: string;
  frameSize: number;
  frameNumber: number;
  scale: number;
};

type getCharacterWidthProp = {
  scale: number;
};
const getCharacterWidth = ({ scale }: getCharacterWidthProp) => {
  return css`
    width: calc(128px * ${scale});
  `;
};
export const CharacterSprite = (props: CharacterSprite) => {
  const { spriteImage, frameSize, frameNumber, scale = 5 } = props;

  return (
    <Root scale={scale} frameSize={frameSize}>
      <CharacterShadow
        className="Character_shadow pixelart"
        src="/static/images/DemoRpgCharacterShadow.png"
        width={frameSize * scale}
        height={frameSize * scale}
        alt="Shadow"
      />
      <CharacterSpriteWrapper scale={scale}>
        <CharacterSpritesheet
          scale={scale}
          frameNumber={frameNumber}
          src={spriteImage}
          width={128 * scale}
          height={128 * scale}
          alt="Character"
        />
      </CharacterSpriteWrapper>
    </Root>
  );
};

const Root = styled.div<{ frameSize: number; scale: number }>`
  overflow: hidden;
  position: relative;
  margin-top: -40px;
  ${getCharacterSize}
`;

const CharacterShadow = styled(Image)`
  position: absolute;
  image-rendering: pixelated;
`;

const CharacterSpritesheet = styled(Image)<{
  frameNumber: number;
  scale: number;
}>`
  max-width: inherit;
  position: absolute;
  image-rendering: pixelated;
  left: 10px;
  ${getCharacterWidth}
  ${getFrameAnimation}
`;

const CharacterSpriteWrapper = styled.div<{ scale: number }>`
  position: relative;
  height: 140px;
  ${getCharacterWidth}
`;
