// #region Global Imports
import React, { FC, ComponentType } from "react";
// #endregion Global Imports

// #region Local Imports
import { Basic as LayoutBasic } from "@Components/Layout";
// #endregion Local Imports

type FoundationsComponent = FC & { Layout: ComponentType };

const Foundations: FoundationsComponent = () => {
  return <div>Foundations</div>;
};

Foundations.Layout = LayoutBasic;

export default Foundations;
