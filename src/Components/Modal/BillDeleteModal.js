import React from 'react';

const BillDeleteModal = () => {
    return (
        <div>
            <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Do you want to delete <span className='text-orange-500 text-xl'>Mehedi's</span> bill?</h3>
                    <p className="py-4"> <b className='text-warning'>Warning :</b> If you delete it, you will lose data that can never be restored!! </p>
                    <div className="modal-action">
                        <button className='btn btn-primary'>Delete</button>
                        <label htmlFor="bill-delete-modal" className="btn btn-error">Cencel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDeleteModal;