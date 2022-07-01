import React from 'react';


const Bills = ({ bil, setDeleteModal, setUpdateBill }) => {

    const { _id, name, email, phone, amount } = bil;
    return (
        <tr>
            <th className='uppercase'>{_id?.slice(15)}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount} &#2547;</td>
            <td>
                <div className='flex items-center justify-between'>
                    <label onClick={() => {
                        setUpdateBill(bil)
                    }} htmlFor="add-bills-modal" > <i onClick={() => setUpdateBill(bil)} className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i></label>
                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                        setDeleteModal(bil)
                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                </div>
            </td>
        </tr>
    );
};

export default Bills;