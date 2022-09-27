import Home from "./pages/home";
import Header from "./components/featured/header";
import Main from "./components/featured/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navBarPath } from "./constants/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";

import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={navBarPath.HOME} element={<Home />} />
          <Route path={navBarPath.ABOUT} element={<About />} />
          <Route path={navBarPath.TODO_LIST} element={<Main />} />
          <Route path={navBarPath.CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
