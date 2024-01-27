import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// components
import { Navbar_mobile } from "../../components";
// hooks
import React, { useState } from "react";
//@ts-ignore
export const PanelContext = React.createContext();
// assets
import nav_logo from "/favicon.png";
import menu_logo from "/bars-solid.svg";
export default function Navbar() {
  let arrOfLinks: string[] = ["Home", "About", "Popular", "Features"];
  let [openPanel, setOpenPanel] = useState<boolean>(false);
  return (
    <>
      <PanelContext.Provider value={{ openPanel, setOpenPanel }}>
        <AppBar
          className="!bg-bodyColor !shadow-none m-auto max-w-[84rem]"
          position="sticky"
        >
          <Toolbar component="nav" className="justify-between items-center">
            <div className="flex items-center text-[1.5rem] space-x-2">
              <img src={nav_logo} alt="logo" />
              <p>Elecar</p>
            </div>
            <button className="lg:hidden " onClick={() => setOpenPanel(true)}>
              <img src={menu_logo} alt="logo" className="h-[1.5rem]" />
            </button>
            <Stack
              component="ul"
              role="list"
              direction="row"
              spacing="2.5rem"
              className="font-medium text-[1.2rem] lg:!flex !hidden"
            >
              {arrOfLinks.map((e, i) => {
                return (
                  <li key={i} role="listitem">
                    <a href={`#${e}`}>{e}</a>
                  </li>
                );
              })}
            </Stack>
          </Toolbar>
          <Navbar_mobile />
        </AppBar>
      </PanelContext.Provider>
    </>
  );
}
