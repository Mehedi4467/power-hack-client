import React from 'react';
import Spinner from '../Shared/Spinner';
import BillingTable from './BillingTable';
import BillingTop from './BillingTop';


const Home = ({ pageCount, setSearch, totalItem, currentPage, setCurrentPage, updateBill, setUpdateBill, deleteModal, setDeleteModal, bill, loading, addModalopen, setAddModalOpen }) => {



    if (loading) {
        return <Spinner></Spinner>
    }
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