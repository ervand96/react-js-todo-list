import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/featured/header";
import Home from "./pages/home";
import About from "./pages/about";
import Main from "./components/featured/main";
import Login from "./pages/login";
import ScheduleEmailComponent from "./pages/scheduleEmail/cron";
import WebCam from "./pages/webCam";
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
          <Route path={navBarPath.SCHEDULE_EMAIL_COMPONENT} element={<ScheduleEmailComponent />} />
          <Route path={navBarPath.WEBCAM} element={<WebCam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
