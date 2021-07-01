import * as React from "react";

import { IHome } from "./dts/Home";

import { Navbar } from "@Components/Navbar";

const Home: React.FunctionComponent<IHome.IProps> = ({
  children,
}): JSX.Element => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export { Home };
