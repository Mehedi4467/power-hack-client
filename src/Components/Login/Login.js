import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Images/Logo/logo.png";
import Spinner from "../Shared/Spinner";
import userToken from '../../Hook/useToken';


const Login = () => {

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [token] = userToken(email);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        setLoading(true)
        const email = data.email;
        const password = data.password;

        const currentUser = { email: email, password: password }

        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser),
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data?.user) {

                    setEmail(email);
                    setLoading(false);
                    toast("You Successfully login!! ");
                }
                else {
                    setError(data.message);
                    setLoading(false);
                }
            });

    };


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, from, token]);

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className=" flex justify-center items-center my-4">
            <div className="card w-full md:w-1/2  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex justify-center">
                        <img src={logo} width="100" alt="shop in shop black logo" />
                    </div>
                    <h2 className="card-title mx-auto mb-2 text-2xl">Login</h2>

                    {error ? (
                        <p className="text-warning text-center mb-4 text-lg">
                            {error}
                        </p>
                    ) : (
                        ""
                    )}


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered input-warning w-full "
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Must be six characters or longer",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === "required" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.password.message}
                                        </span>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <span className="label-text-alt text-warning">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="card-actions w-full">
                            <button type="submit" className="btn w-full  bg-primary">
                                Login
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox mr-2" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <div>
                                    <h2>
                                        Don’t have an account?{" "}
                                        <Link className="text-orange-400" to="/reg">
                                            Registration Now!
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
