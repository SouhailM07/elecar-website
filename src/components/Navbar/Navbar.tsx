import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import nav_logo from "/favicon.png";
export default function Navbar() {
  let arrOfLinks: string[] = ["Home", "About", "Popular", "Features"];
  return (
    <>
      <header>
        <AppBar className="!bg-transparent" position="sticky">
          <Toolbar className="justify-between !px-[7rem]">
            <div className="flex items-center text-[1.5rem] space-x-2">
              <img src={nav_logo} alt="logo" />
              <p>Elecar</p>
            </div>
            <Stack
              component="ul"
              direction="row"
              spacing="2.5rem"
              className="font-medium text-[1.2rem]"
            >
              {arrOfLinks.map((e, i) => {
                return (
                  <li key={i}>
                    <a href={`#${e}`}>{e}</a>
                  </li>
                );
              })}
            </Stack>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
}