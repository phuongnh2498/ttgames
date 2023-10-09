import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};
export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="flex max-w-5xl mx-auto">{children}</div>;
};
