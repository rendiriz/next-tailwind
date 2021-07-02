// #region Global Imports
import React, { ComponentType } from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { Home as LayoutHome } from "@Components/Layout";
// #endregion Local Imports

type HomePage = NextPage & { Layout: ComponentType };

const Home: HomePage = () => {
  return <div>Home</div>;
};

Home.Layout = LayoutHome;

export default Home;
