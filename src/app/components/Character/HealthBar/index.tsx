import React from "react";
import { text } from "stream/consumers";
import styled from "styled-components";
import { getHealthBarWidth } from "./getHealthBarWidth";

type HealthBarProps = {
  currentHealth: number;
  maxHealth: number;
};

export const HealthBar = ({ currentHealth, maxHealth }: HealthBarProps) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  return (
    <Root>
      <HealthBarInner percentage={healthPercentage}></HealthBarInner>
      <HealthText>
        {currentHealth} / {maxHealth}
      </HealthText>
    </Root>
  );
};

const Root = styled.div`
  width: 75px;
  height: 10px;
  background-color: #ccc;
  border: 1px solid #333;
  border-radius: 5px;
  position: relative;
  align-self: center;
`;
const HealthBarInner = styled.div<{ percentage: number }>`
  height: 100%;
  background-color: #4caf50; /* Green color for healthy status */
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
  ${getHealthBarWidth}
`;

const HealthText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  color: #333;
  font-weight: bold;
  font-size: 0.4rem;
`;
