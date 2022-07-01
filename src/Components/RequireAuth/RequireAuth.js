import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Shared/Spinner';




function RequireAuth({ children }) {


    let location = useLocation();
    const [userInfo, setUserinfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/user/auth/me', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUserinfo(data);
                    setLoading(true)
                }
            });
    }, [userInfo])

    if (!loading) {
        return <Spinner></Spinner>
    }

    if (!userInfo?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;