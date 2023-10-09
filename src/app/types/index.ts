import { SpriteType } from "../components/Character/const";

export type CharacterKey = keyof typeof SpriteType;
export type SpriteStatus = "attack" | "run" | "idle";

export type CharacterType = {
  origin: CharacterKey;
  name: string;
  currentHealth: number;
  maxHealth: number;
  status: SpriteStatus;
  avatar: string;
};
