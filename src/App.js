import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Header from "./Components/Shared/Header";
import NotFound from "./Components/Shared/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Footer from "./Components/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Spinner from "./Components/Shared/Spinner";

function App() {
  const [deleteModal, setDeleteModal] = useState(false)
  const [bill, setBill] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addModalopen, setAddModalOpen] = useState(false);
  const [updateBill, setUpdateBill] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [search, setSearch] = useState('');
  const [totalBill, setTotall] = useState([]);
  const [billMessage, setBillMessage] = useState(false);
  useEffect(() => {

    fetch(`https://hudson-syrup-16711.herokuapp.com/billing-list?name=${search.toLocaleLowerCase()}&page=${currentPage - 1}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setBillMessage(data.message);
          setLoading(false);
        }
        else {
          setBill(data);
          setLoading(false);
          setBillMessage(false)
        }

      })
  }, [addModalopen, deleteModal, updateBill, currentPage, search, billMessage])

  useEffect(() => {
    fetch('https://hudson-syrup-16711.herokuapp.com/bill/count', {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.total)
        const count = data.count;
        const pages = Math.ceil(parseInt(count) / 10);
        setPageCount(pages);
        setTotalItem(count);
        setTotall(data.total)
      })
  }, [bill, billMessage]);

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div>
      <div className="sticky top-0 z-[99999999]">
        <Header totalBill={totalBill}></Header>
        <ToastContainer />
      </div>

      <Routes>
        <Route path="/" element={<RequireAuth><Home setAddModalOpen={setAddModalOpen} addModalopen={addModalopen} loading={loading} bill={bill} setDeleteModal={setDeleteModal} deleteModal={deleteModal} setUpdateBill={setUpdateBill} updateBill={updateBill} setCurrentPage={setCurrentPage} currentPage={currentPage} setTotalItem={setTotalItem} totalItem={totalItem} setSearch={setSearch} pageCount={pageCount}></Home></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reg" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
