import "./navbar_mobile.css";
// mui
import { Drawer } from "@mui/material";
// hooks
import { useContext } from "react";
import { PanelContext } from "../Navbar/Navbar";
// assets
import close_logo from "/xmark-solid.svg";
export default function Navbar_mobile() {
  let arrOfLinks: string[] = ["Home", "About", "Popular", "Features"];
  let { openPanel, setOpenPanel }: any = useContext(PanelContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={openPanel}
        // onClose={() => setOpenPanel(false)}
      >
        <div className="bg-gray-900 text-[1.3rem] h-full w-[100vw] overflow-hidden">
          <div className="flex justify-end p-[2rem]">
            <button
              aria-label="close menubar"
              onClick={() => setOpenPanel(false)}
            >
              <img src={close_logo} alt="close logo" className="h-[3rem] " />
            </button>
          </div>
          <ul
            role="list"
            className="flex flex-col  justify-evenly text-white  h-[60%] font-bold text-center "
          >
            {arrOfLinks.map((e, i) => {
              return (
                <li key={i} onClick={() => setOpenPanel(false)} role="listitem">
                  <a href={"#" + e}>{e}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
}
