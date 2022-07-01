import React, { useEffect, useState } from 'react';
import BillingTable from './BillingTable';
import BillingTop from './BillingTop';


const Home = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [bill, setBill] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addModalopen, setAddModalOpen] = useState(false);
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
    }, [addModalopen, deleteModal])

    return (
        <div>
            <div className='sticky top-[90px] z-[99999999]'>
                <BillingTop addModalopen={addModalopen} setAddModalOpen={setAddModalOpen}></BillingTop>
            </div>

            <BillingTable loading={loading} setDeleteModal={setDeleteModal} deleteModal={deleteModal} bill={bill}></BillingTable>

        </div>
    );
};

export default Home;