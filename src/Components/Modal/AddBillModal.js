import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBillModal = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = async (data) => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;


        const currentUser = {
            email: email, password: password, name: displayName
        }

        console.log(currentUser)

        // fetch(`http://localhost:5000/adminUser/${email}`, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(currentUser),
        // })
        //     .then(res => res.json())
        //     .then((data) => {

        //         if (data.acknowledged) {

        //         }
        //     });



        toast("You have been sent an email for verification! ")
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
                        </div>

                        <div className="modal-action">
                            <button className="btn btn-primary">ADD Bill</button>
                            <label htmlFor="add-bills-modal" className="btn btn-warning">Cencel</label>
                        </div>

                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddBillModal;