// #region Global Imports
import React, { FC, ComponentType } from "react";
// #endregion Global Imports

// #region Local Imports
import { Home as LayoutHome } from '@Components/Layout'
// #endregion Local Imports

type HomeComponent = FC & { Layout: ComponentType }

const Home: HomeComponent = () => {
  return (
    <div>
      Home
    </div>
  )
}

Home.Layout = LayoutHome

export default Home
