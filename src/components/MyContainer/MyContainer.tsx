import "./mycontainer.css";
// mui
// import { Container } from "@mui/material";
// components
import {
  Navbar,
  Home,
  About,
  Popular,
  Featured,
  MoreFeatures,
  Subscribe,
  Logos,
  Footer,
} from "../../components";
export default function MyContainer() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="space-y-[17rem]">
        {/* <Home /> */}
        {/* <About /> */}
        {/* <Popular /> */}
        {/* <Featured /> */}
        {/* <MoreFeatures /> */}
        <Subscribe />
        {/* <Logos /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
