import styled from "styled-components";
import { CharacterSprite } from "../Sprite/CharacterSprite";
import { HealthBar } from "./HealthBar";
import { useState } from "react";
import { SpriteType } from "./const";
import { CharacterKey, SpriteStatus } from "@/app/types";
import Image from "next/image";

type CharacterProps = {
  frameNumber: number;
  frameSize: number;
  spriteImage: string;
  scale: number;
  name: string;
  currentHealth: number;
  maxHealth: number;
  avatar: string;
};
export const Character = (props: CharacterProps) => {
  const { currentHealth, maxHealth, name, avatar } = props;
  return (
    <div className="flex flex-col justify-items-center text-center">
      <div className="flex mx-auto p-2 align-items-center">
        <Image
          className="rounded-full"
          src={avatar}
          width={20}
          height={20}
          alt="sheesh"
        />
        <NameText className="text-red-400">{name}</NameText>
      </div>
      <HealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
      <CharacterSprite {...props} />
      <button onClick={() => {}} className="border-red-100 border bg-slate-400">
        do action
      </button>
    </div>
  );
};

const NameText = styled.strong`
  font-size: 0.8rem;
`;
