import "./mycontainer.css";
// mui
// import { Container } from "@mui/material";
// components
import {
  Navbar,
  Home,
  About,
  Featured,
  MoreFeatures,
  Subscribe,
  Logos,
} from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Featured /> */}
      <MoreFeatures />
      <Subscribe />
      <Logos />
    </>
  );
}
