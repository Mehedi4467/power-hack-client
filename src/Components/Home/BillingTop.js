import React from 'react';
import AddBillModal from '../Modal/AddBillModal';

const BillingTop = ({ setSearch, setAddModalOpen, addModalopen, updateBill, setUpdateBill }) => {

    return (

        <div className='bg-white mt-4'>
            <div className="navbar bg-base-100 w-4/5 md:w-2/3 py-2 hover:shadow-xl  mx-auto shadow-lg rounded-full px-6">
                <div className="flex-1 items-center">
                    <h2 className="text-orange-500 font-bold text-sm md:text-lg uppercase ">Billings</h2>

                    <div className="form-control w-1/2 flex justify-center mx-auto">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="input rounded-full input-bordered" />
                    </div>
                </div>

                <div className="flex-none gap-2">

                    <label onClick={() => {
                        setAddModalOpen(true)
                    }} htmlFor="add-bills-modal" className='btn md:flex items-center hidden btn-sm rounded-full btn-primary'>Add New Bill</label>
                    <i className="p-2 cursor-pointer block md:hidden mr-2 shadow-lg rounded-full text-primary  fa-solid fa-circle-plus"></i>
                </div>
            </div>
            {
                addModalopen && <AddBillModal setAddModalOpen={setAddModalOpen}></AddBillModal>
            }
            {
                updateBill && <AddBillModal updateBill={updateBill} setUpdateBill={setUpdateBill}></AddBillModal>
            }
        </div>

    );
};

export default BillingTop;