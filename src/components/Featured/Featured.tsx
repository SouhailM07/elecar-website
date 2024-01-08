import "./featured.css";
// mui
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// hooks
import { useState } from "react";
// assets
import porsche_logo from "/logo1.png";
import audi_logo from "/logo2.png";
import tesla_logo from "/logo3.png";

export default function Featured() {
  let arrOfLabels: string[] = [tesla_logo, audi_logo, porsche_logo];
  return (
    <>
      <article className="mt-[10rem]">
        <ul className="flex">
          {arrOfLabels.map((e, i) => {
            return (
              <li key={i} className="border-2 ">
                <input type="radio" id={e} name="featured" className="hidden" />
                <label
                  htmlFor={e}
                  onClick={() => {
                    // setProjectsType(e);
                  }}
                >
                  <img src={e} alt="img" className="h-[2rem] w-[2rem] p-1" />
                </label>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
