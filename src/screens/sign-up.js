import react from 'react';
import '../styles/login/login.css'
import { Link } from 'react-router-dom';




const SignUp = () => {
    return (
        <div className='body'>
            <div className="container">

                <div className='col-lg-10 col-xl-8 card mx-auto d-flex flex-row px-0'>

                    <div className="img-left d-md-flex d-none"></div>

                    <div className="card-body d-flex flex-column justify-content-center">
                        <h4 className="title text-center mt-4 pb-3">Sign Up accont</h4>
                        <form>
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='Full Name' />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="email" className="form-control" placeholder='Email' />
                            </div>
                            <div className='form-group m-2 '>
                                <input type="text" className="form-control" placeholder='Contact' />
                            </div>
                            <div className='form-group m-2 ' >
                                <input type="password" className="form-control" placeholder='Password' />
                            </div>
                            <div className='form-group m-2 ' >
                                <input type="password" className="form-control" placeholder='Confirm Password' />
                            </div>
                            <div className=''>
                                <input type="button" className="btn  btn-outline-primary d-block w-100 " value='Sign Up' />
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