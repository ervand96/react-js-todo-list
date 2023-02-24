import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Header from "./components/featured/header";
import Main from "./components/featured/main";
import { navBarPath } from "./constants/navbar";

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
          <Route path={navBarPath.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
