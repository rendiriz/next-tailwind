import * as React from "react";
import Link from "next/link";

import { INavbar } from "./dts/Navbar";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/foundations">
          <a>Foundations</a>
        </Link>
      </li>
    </ul>
  );
};

export { Navbar };
