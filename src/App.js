import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/signup`} element={<Singup />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
