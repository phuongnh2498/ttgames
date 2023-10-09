import { css } from "styled-components";

type HealthBarWidthProp = {
  percentage: number;
};
export const getHealthBarWidth = ({ percentage }: HealthBarWidthProp) => css`
  width: ${percentage}%;
`;
