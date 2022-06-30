import React from 'react';

const BillingTop = () => {
    return (

        <div className="navbar  bg-base-100 w-2/3 py-2 hover:shadow-2xl mt-10 mx-auto shadow-lg rounded-full px-6">
            <div className="flex-1 items-center">
                <h2 className="text-orange-500 font-bold uppercase ">Billings</h2>

                <div className="form-control w-1/2 flex justify-center mx-auto">
                    <input type="text" placeholder="Search" className="input rounded-full input-bordered" />
                </div>
            </div>

            <div className="flex-none gap-2">
                <button className='btn btn-sm rounded-full btn-primary'>Add New Bill</button>
            </div>
        </div>

    );
};

export default BillingTop;