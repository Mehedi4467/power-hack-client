import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Header from "./Components/Shared/Header";
import NotFound from "./Components/Shared/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <div className="sticky top-0 z-[99999999]"> <Header></Header></div>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reg" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
