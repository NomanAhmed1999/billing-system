import react, { useState, useEffect } from 'react';
import '../styles/sign-up/sign-up.css'
import { Link } from 'react-router-dom';
import Img from '../assests/avatar-img.png'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const apiVariable = "http://localhost:3000/api/v1";



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [cnic, setCnic] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [err, setErr] = useState('');



    const signUp = () => {
        let obj = {
            "Username": name,
            "email": email,
            "ID": cardNum,
            "cardNumber": cardNum,
            "CNIC": cnic,
            "password": pass,
            "confirmPassword": cPass
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        fetch(`${apiVariable}/auth/signUp`, requestOptions)
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
                        <h4 className="title text-center mt-4 pb-3">Sign Up accont</h4>
                        {err ?
                            <p style={{ color: 'red', width: '350px' }}>{err}</p>
                            :
                            null
                        }
                        <form>
                            {/* <div className='form-group m-2 signup-form'>
                                <div className='for-img'>
                                    <img src={Img} />
                                </div>
                                <input type="file" className="" />
                            </div> */}
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='Full Name' onChange={e => { setName(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="email" className="form-control" placeholder='Email' onChange={e => { setEmail(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='Contact' onChange={e => { setContact(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='Card Number' onChange={e => { setCardNum(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='CNIC Number' onChange={e => { setCnic(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 ' >
                                <input type="password" className="form-control" placeholder='Password' onChange={e => { setPass(e.target.value); }} />
                            </div>
                            <div className='form-group m-2 ' >
                                <input type="password" className="form-control" placeholder='Confirm Password' onChange={e => { setCPass(e.target.value); }} />
                            </div>
                            <div className=''>
                                <input onClick={signUp} type="button" className="btn  btn-outline-primary d-block w-100 " value='Sign Up' />
                            </div>
                            <Link to="/"><p className='new-account'>have Account?</p></Link>
                        </form>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default SignUp;