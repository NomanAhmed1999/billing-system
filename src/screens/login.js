import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login/login.css'
import {
    Link
} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



const Login = () => {
    const navigate = useNavigate();
    const apiVariable = "http://localhost:3000/api/v1";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [openForgetPass, setOpenForgetPass] = useState(0);

    const getData = async () => {
        setLoading(true);
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
                    setLoading(false);
                    setErr(data.error)
                    setTimeout(() => {
                        setErr('')
                    }, 3000);
                } else {
                    setLoading(false);
                    localStorage.setItem("token", data.token);
                    navigate("/dashboard");
                }
            });
    }



    const forgetPasswordFunc = () => {
        setLoading(true);
        let obj = {
            email: email
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch(`${apiVariable}/auth/forgotPassword`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("forgetPasswordFunc", data);
                if (data.error) {
                    setLoading(false);
                    setErr(data.error)
                    setTimeout(() => {
                        setErr('')
                    }, 3000);
                } else {
                    setLoading(false);
                    setEmail('');
                    setOpenForgetPass(2);
                }
            });

    }

    const resetPassword = () => {
        setLoading(true);
        let obj = {
            "password": password,
            "confirmPassword": confirmPassword
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch(`${apiVariable}/auth/resetPassword/${token}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("resetPassword", data);
                if (data.error) {
                    setLoading(false);
                    setErr(data.error)
                    setTimeout(() => {
                        setErr('')
                    }, 3000);
                } else {
                    setLoading(false);
                    setToken('');
                    setOpenForgetPass(0);
                }
            });

    }














    return (
        <div className='body'>
            <div className="container">

                <div className='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>

                    <div className="img-left d-md-flex d-none"></div>

                    {
                        openForgetPass == 0 ?
                            (
                                <div className="card-body d-flex flex-column justify-content-center">
                                    {/* <div className='progress-bar-container'>
                                    </div> */}
                                    <h4 className="title text-center mt-4 pb-3 title-loading">Login into accont{loading ? <CircularProgress color="success" size={20} /> : null}</h4>

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
                                        <div className='flex-container'>
                                            <Link to="sign-up"><p className='new-account'>Create New Account?</p></Link>
                                            <Link onClick={() => setOpenForgetPass(1)}><p className='new-account'>Forget Password</p></Link>
                                        </div>
                                    </form>
                                </div>
                            )
                            :
                            (
                                openForgetPass == 1 ?


                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h4 className="title text-center mt-4 pb-3 title-loading">Forget Password{loading ? <CircularProgress color="success" size={20} /> : null}</h4>
                                        {err ?
                                            <p style={{ color: 'red' }}>{err}</p>
                                            :
                                            null
                                        }
                                        <form>
                                            <div className='form-group '>
                                                <input type="email" className="form-control" placeholder='email' onChange={e => { setEmail(e.target.value); }} />
                                            </div>
                                            <div className='py-3'>
                                                <Link onClick={forgetPasswordFunc}><input type="button" className="btn  btn-outline-primary d-block w-100 " value='Send' /></Link>

                                            </div>
                                        </form>
                                    </div>

                                    :

                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h4 className="title text-center mt-4 pb-3 title-loading">Reset Password{loading ? <CircularProgress color="success" size={20} /> : null}</h4>
                                        {err ?
                                            <p style={{ color: 'red' }}>{err}</p>
                                            :
                                            null
                                        }
                                        <form>
                                            <div className='form-group mt-3'>
                                                <input type="text" className="form-control" placeholder='Token' onChange={e => { setToken(e.target.value); }} />
                                            </div>
                                            <div className='form-group mt-3'>
                                                <input type="password" className="form-control" placeholder='Password' onChange={e => { setPassword(e.target.value); }} />
                                            </div>
                                            <div className='form-group mt-3' >
                                                <input type="password" className="form-control" placeholder='Confirm Password' onChange={e => { setConfirmPassword(e.target.value); }} />
                                            </div>
                                            <div className=' mt-3'>
                                                <Link onClick={resetPassword}><input type="button" className="btn  btn-outline-primary d-block w-100 " value='Reset' /></Link>

                                            </div>
                                        </form>
                                    </div>


                            )

                    }



                </div>


            </div>


        </div>
    )
}

export default Login;