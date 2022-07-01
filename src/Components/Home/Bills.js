import React from 'react';


const Bills = ({ bil, setDeleteModal }) => {

    const { name, email, phone, amount } = bil;
    return (
        <tr>
            <th>ASNM22</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{amount} &#2547;</td>
            <td>
                <div className='flex items-center justify-between'>
                    <i className="hover:text-orange-500 cursor-pointer fa-solid fa-pen-to-square"></i>

                    <label htmlFor="bill-delete-modal"> <i onClick={() => {
                        setDeleteModal(bil)
                    }} className="hover:text-orange-500 cursor-pointer fa-solid fa-trash-can"></i></label>

                </div>
            </td>
        </tr>
    );
};

export default Bills;