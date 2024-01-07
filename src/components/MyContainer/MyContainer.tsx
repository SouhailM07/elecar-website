import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Home } from "../../components";
export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}
