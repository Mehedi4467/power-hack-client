import React, { useEffect, useState } from 'react';
import BillingTable from './BillingTable';
import BillingTop from './BillingTop';


const Home = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [bill, setBill] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addModalopen, setAddModalOpen] = useState(false);
    const [updateBill, setUpdateBill] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [search, setSearch] = useState('');

    useEffect(() => {

        fetch(`http://localhost:5000/billing-list?name=${search.toLocaleLowerCase()}&page=${currentPage - 1}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBill(data);
                setLoading(false);
            })
    }, [addModalopen, deleteModal, updateBill, currentPage, search])

    useEffect(() => {
        fetch('http://localhost:5000/bill/count', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(parseInt(count) / 10);
                setPageCount(pages);
                setTotalItem(count);
            })
    }, [bill]);

    return (
        <div>
            <div className='sticky top-[90px] z-[99999999]'>
                <BillingTop setSearch={setSearch} updateBill={updateBill} setUpdateBill={setUpdateBill} addModalopen={addModalopen} setAddModalOpen={setAddModalOpen}></BillingTop>
            </div>

            <BillingTable totalItem={totalItem} pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} setUpdateBill={setUpdateBill} loading={loading} setDeleteModal={setDeleteModal} deleteModal={deleteModal} bill={bill}></BillingTable>

        </div>
    );
};

export default Home;