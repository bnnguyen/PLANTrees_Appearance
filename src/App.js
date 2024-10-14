import { Route, Routes } from "react-router";
import Footer from "./components/general-components/footer/Footer";
import Header from "./components/general-components/header/Header";
import Homepage from "./components/homepage/Homepage";
import TreeLibrary from "./components/tree-library/TreeLibrary";
import AreaSuggestions from "./components/area-suggestions/AreaSuggestions";
import MyTreeSpace from "./components/my-tree-space/MyTreeSpace";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/area"
          element={
            <>
              <Header />
              <AreaSuggestions />
              <Footer />
            </>
          }
        />
        <Route
          path="/myspace"
          element={
            <>
              <Header />
              <MyTreeSpace />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
