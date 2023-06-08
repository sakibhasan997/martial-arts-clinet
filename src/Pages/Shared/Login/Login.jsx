import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const { user, gProvider, createLogin } = useContext(AuthContext)


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setError('')
                toast('your password is successful')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleGoogle = () => {
        gProvider()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }


    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    };

    return (
        <>
            <Helmet>
                <title>Martial Arts | Login</title>
            </Helmet>
            <div>
                <div className="hero mb-10">
                    <div className="  ">
                        <div className="text-center my-8 ">
                            <h1 className="text-5xl font-bold">Please Login Now!</h1>

                        </div>
                        <Form onSubmit={handleLogin}>
                            <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100 ">
                                <div className="card-body">
                                    <p className='text-red-600'>{error}</p>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Your Email Address</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Your Password Address</span>
                                        </label>
                                        <input type={passwordEye === false ? "password" : "text"} name="password" placeholder="Your Password..." className="input input-bordered" required />
                                        <div className="text-2xl absolute top-12 right-5">
                                            {passwordEye === false ? (
                                                <AiFillEyeInvisible onClick={handlePasswordClick} />
                                            ) : (
                                                <AiFillEye onClick={handlePasswordClick} />
                                            )}
                                        </div>
                                    </div>
                                    {/* <div className="form-control mt-6"> */}
                                    <button className="btn btn-primary mt-6" type="submit">Login</button>
                                    {/* </div> */}
                                    <div className="divider">OR</div>
                                    <div className='my-5 mx-auto flex gap-4'>
                                        <button onClick={handleGoogle} className="btn btn-circle btn-outline btn-primary">
                                            <FaGoogle className='' />
                                        </button>
                                    </div>
                                    <p className='mt-5'>Don't Have an Account? <Link className='link-hover btn-link' to='/register'>Register</Link> </p>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Login;