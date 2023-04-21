import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="sm:px-O mx-auto max-w-screen-xl px-2">{children}</div>;
};
