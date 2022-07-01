import React from 'react';
import BillDeleteModal from '../Modal/BillDeleteModal';
import Spinner from '../Shared/Spinner';
import Bills from './Bills';

const BillingTable = ({ bill, setDeleteModal, deleteModal, loading }) => {

    if (loading) {
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
                            bill.map(bil => <Bills key={bil} bil={bil} setDeleteModal={setDeleteModal}></Bills>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal && <BillDeleteModal setDeleteModal={setDeleteModal} deleteModal={deleteModal}></BillDeleteModal>
            }
        </div>
    );
};

export default BillingTable;