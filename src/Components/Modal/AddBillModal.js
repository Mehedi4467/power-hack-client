import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ButtonSpinner from '../Shared/ButtonSpinner';

const AddBillModal = ({ setAddModalOpen }) => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const displayName = data.name;
        const email = data.email;
        const phone = data.phone;
        const amount = data.amount;


        const currentBill = {
            email: email, phone: phone, amount: amount, name: displayName
        }

        fetch(`http://localhost:5000/add-billing`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(currentBill),
        })
            .then(res => res.json())

            .then((data) => {
                setLoading(false)
                if (data.acknowledged) {
                    toast("You new bill Added Successfully");
                    setAddModalOpen(false)
                }
            });

    };



    return (
        <div>
            <input type="checkbox" id="add-bills-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-orange-500">Add New Bill</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered input-warning w-full "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered input-warning w-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Please enter valid email",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.email.message}
                                        </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="phoneNumber"
                                    placeholder="Phone Number"
                                    className="input input-bordered input-warning w-full"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Phone Number is required",
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: "Phone Number Must be 11 Digits",
                                        },
                                        minLength: {
                                            value: 11,
                                            message: "Phone Number Must be 11 Digits",
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                    {errors.phone?.type === "maxLength" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                    {errors.phone?.type === "minLength" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.phone.message}
                                        </span>
                                    )}

                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Pain Amount</span>
                                </label>
                                <input
                                    type="number"
                                    min='00'
                                    placeholder="Paid Amount"
                                    className="input input-bordered input-warning w-full"
                                    {...register("amount", {
                                        required: {
                                            value: true,
                                            message: "Paid Amount is required",
                                        }

                                    })}
                                />
                                <label className="label">
                                    {errors.amount?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.amount.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div className="modal-action">
                            {
                                loading ? <ButtonSpinner></ButtonSpinner> : <button className="btn btn-primary">ADD Bill</button>
                            }

                            <label htmlFor="add-bills-modal" className="btn btn-warning">Cencel</label>
                        </div>

                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddBillModal;