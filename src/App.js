import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Header from "./Components/Shared/Header";
import NotFound from "./Components/Shared/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <div className="sticky top-0 z-[99999999]">
        <Header></Header>
        <ToastContainer />
      </div>

      <Routes>
        <Route path="/" element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reg" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
