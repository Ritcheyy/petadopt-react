import { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <main>{children}</main>;
};

export default DefaultLayout;
