import React from 'react';
import { toast } from 'react-toastify';

const BillDeleteModal = ({ deleteModal, setDeleteModal }) => {
    const handeldelete = id => {
        fetch(`https://hudson-syrup-16711.herokuapp.com/delete-billing/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged && data.deletedCount > 0) {
                    toast('Delete Successfully');
                    setDeleteModal(false);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Do you want to delete <span className='text-orange-500 text-xl'>{deleteModal.name}'s</span> bill?</h3>
                    <p className="py-4"> <b className='text-warning'>Warning :</b> If you delete it, you will lose data that can never be restored!! </p>
                    <div className="modal-action">
                        <button onClick={() => handeldelete(deleteModal._id)} className='btn btn-primary'>Delete</button>
                        <label htmlFor="bill-delete-modal" className="btn btn-error">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDeleteModal;