import "./style/input.css";
import "./App.css";
// components
import { MyContainer } from "./components";
//
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="electric cars landing page" />
        <meta
          name="keywords"
          content="responsive design, landing page, electric cars"
        />
        <meta name="author" content="Shadow" />
      </Helmet>
      <MyContainer />
    </>
  );
}
export default App;
