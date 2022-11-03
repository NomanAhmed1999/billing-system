import React from 'react';




const AuthService = () => {

    const getData = async () => {
        return (
            await fetch(
                "https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((json) => {
                }

                )
        )


    }
}

export default AuthService;
