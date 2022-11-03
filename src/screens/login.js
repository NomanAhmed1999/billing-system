import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login/login.css'
import {
    Link
} from "react-router-dom";




const Login = () => {
    const navigate = useNavigate();
    const apiVariable = "http://localhost:3000/api/v1";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const getData = async () => {
        let obj = {
            Username: email,
            password: password
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch(`${apiVariable}/auth/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                if (data.error) {
                    setErr(data.error)
                    setTimeout(() => {
                        setErr('')
                    }, 3000);
                } else {
                    localStorage.setItem("token", data.token);
                    navigate("/dashboard")
                }
            });
    }

    return (
        <div className='body'>
            <div className="container">

                <div className='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>

                    <div className="img-left d-md-flex d-none"></div>

                    <div className="card-body d-flex flex-column justify-content-center">
                        <h4 className="title text-center mt-4 pb-3">Login into accont</h4>
                        {err ?
                            <p style={{ color: 'red' }}>{err}</p>
                            :
                            null
                        }
                        <form>
                            <div className='form-group '>
                                <input type="email" className="form-control" placeholder='email' onChange={e => { setEmail(e.target.value); }} />
                            </div>
                            <div className='form-group py-3 ' >
                                <input type="password" className="form-control" placeholder='***' onChange={e => { setPassword(e.target.value); }} />
                            </div>
                            <div className=''>
                                {/* <Link to="dashboard"><input type="button" className="btn  btn-outline-primary d-block w-100 " value='Login' /></Link> */}
                                <Link onClick={getData}><input type="button" className="btn  btn-outline-primary d-block w-100 " value='Login' /></Link>

                            </div>

                            <Link to="sign-up"><p className='new-account'>Create New Account?</p></Link>
                        </form>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Login;