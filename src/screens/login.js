import react from 'react';
import '../styles/login/login.css'
import {
    Link
} from "react-router-dom";




const Login = () => {
    return (
        <div className='body'>
            <div className="container">

                <div className='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>

                    <div className="img-left d-md-flex d-none"></div>

                    <div className="card-body d-flex flex-column justify-content-center">
                        <h4 className="title text-center mt-4 pb-3">Login into accont</h4>
                        <form>
                            <div className='form-group '>
                                <input type="email" className="form-control" placeholder='email' />
                            </div>
                            <div className='form-group py-3 ' >
                                <input type="senha" className="form-control" placeholder='***' />
                            </div>
                            <div className=''>
                                <Link to="dashboard"><input type="button" className="btn  btn-outline-primary d-block w-100 " value='Login' /></Link>

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