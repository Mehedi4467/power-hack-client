import React, { useState } from 'react';
import BillDeleteModal from '../Modal/BillDeleteModal';

const BillingTable = () => {

    const [deleteModal, setDeleteModal] = useState(false)
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

                        <tr>
                            <th>ASNM22</th>
                            <td>Md.Mehedi Hassan</td>
                            <td>mehedihassan4467@gmail.com</td>
                            <td>01521542122</td>
                            <td>2000 &#2547;</td>
                            <td>
                                <div className='flex items-center justify-between'>
                                    <i className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i>

                                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                                        setDeleteModal(true)
                                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>ASNM22</th>
                            <td>Md.Mehedi Hassan</td>
                            <td>mehedihassan4467@gmail.com</td>
                            <td>01521542122</td>
                            <td>2000 &#2547;</td>
                            <td>
                                <div className='flex items-center justify-between'>
                                    <i className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i>

                                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                                        setDeleteModal(true)
                                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>ASNM22</th>
                            <td>Md.Mehedi Hassan</td>
                            <td>mehedihassan4467@gmail.com</td>
                            <td>01521542122</td>
                            <td>2000 &#2547;</td>
                            <td>
                                <div className='flex items-center justify-between'>
                                    <i className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i>

                                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                                        setDeleteModal(true)
                                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>ASNM22</th>
                            <td>Md.Mehedi Hassan</td>
                            <td>mehedihassan4467@gmail.com</td>
                            <td>01521542122</td>
                            <td>2000 &#2547;</td>
                            <td>
                                <div className='flex items-center justify-between'>
                                    <i className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i>

                                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                                        setDeleteModal(true)
                                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                deleteModal && <BillDeleteModal></BillDeleteModal>
            }
        </div>
    );
};

export default BillingTable;