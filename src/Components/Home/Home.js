import React, { useEffect, useState } from 'react';
import BillingTable from './BillingTable';
import BillingTop from './BillingTop';


const Home = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [bill, setBill] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addModalopen, setAddModalOpen] = useState(false);
    const [updateBill, setUpdateBill] = useState(false);
    useEffect(() => {

        fetch('http://localhost:5000/billing-list', {
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
    }, [addModalopen, deleteModal, updateBill])

    return (
        <div>
            <div className='sticky top-[90px] z-[99999999]'>
                <BillingTop updateBill={updateBill} setUpdateBill={setUpdateBill} addModalopen={addModalopen} setAddModalOpen={setAddModalOpen}></BillingTop>
            </div>

            <BillingTable setUpdateBill={setUpdateBill} loading={loading} setDeleteModal={setDeleteModal} deleteModal={deleteModal} bill={bill}></BillingTable>

        </div>
    );
};

export default Home;