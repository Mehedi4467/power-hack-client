import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {

        const email = user;
        if (email) {
            fetch(`https://hudson-syrup-16711.herokuapp.com/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token];
}
export default useToken;