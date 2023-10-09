"use client";
import { Wrapper } from "./components/Wrapper";
import { Character } from "./components/Character";
import { useState } from "react";
import { CharacterType } from "./types";
import { SpriteType } from "./components/Character/const";

const ttpfpurl =
  "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8b1e9ec2a2d1e3e22c7d79fe7c212d5a.jpeg?x-expires=1697043600&x-signature=Urf4%2FHTa25du3OpOxD4kdf1hScM%3D";
const characterList: CharacterType[] = [
  {
    origin: "Archer",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Archer",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Archer",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "DudeMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "DudeMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "DudeMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "OwletMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "OwletMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "OwletMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "PinkMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "PinkMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "PinkMonster",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Swordsman",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Swordsman",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Swordsman",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Wizard",
    maxHealth: 100,
    currentHealth: 100,
    status: "idle",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Wizard",
    maxHealth: 100,
    currentHealth: 100,
    status: "run",
    name: "Archer",
    avatar: ttpfpurl,
  },
  {
    origin: "Wizard",
    maxHealth: 100,
    currentHealth: 100,
    status: "attack",
    name: "Archer",
    avatar: ttpfpurl,
  },
];
export default function Home() {
  const [characterPool, setCharacterPool] =
    useState<CharacterType[]>(characterList);

  return (
    <Wrapper>
      {characterPool.map((character, id) => {
        const { status, origin } = character;
        const characterSpriteProps = SpriteType[origin][status];
        return (
          <Character
            key={id}
            name={character.origin}
            currentHealth={character.currentHealth}
            maxHealth={character.maxHealth}
            avatar={character.avatar}
            {...characterSpriteProps}
          ></Character>
        );
      })}
    </Wrapper>
  );
}
