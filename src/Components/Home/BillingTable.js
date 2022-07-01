import React from 'react';
import BillDeleteModal from '../Modal/BillDeleteModal';
import Pagination from '../Shared/Pagination/Pagination';
import Spinner from '../Shared/Spinner';
import Bills from './Bills';

const BillingTable = ({ totalItem, pageCount, bill, setCurrentPage, currentPage, setUpdateBill, setDeleteModal, deleteModal, loading }) => {
    console.log(bill)
    if (loading || bill.message) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-4/5 mx-auto mt-4'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Billing Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amound</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bill?.map(bil => <Bills setUpdateBill={setUpdateBill} key={bil._id} bil={bil} setDeleteModal={setDeleteModal}></Bills>)
                        }
                    </tbody>
                </table>
            </div>
            {
                totalItem > 10 && <div className='flex my-6 justify-center md:justify-end'>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount}></Pagination>
                </div>
            }
            {
                deleteModal && <BillDeleteModal setDeleteModal={setDeleteModal} deleteModal={deleteModal}></BillDeleteModal>
            }
        </div>
    );
};

export default BillingTable;