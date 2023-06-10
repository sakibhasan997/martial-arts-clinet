import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { gProvider } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSocial = () => {
        gProvider()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/students', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className=" text-center">
                <button onClick={handleSocial} className="btn btn-circle  btn-outline btn-primary">
                    <FaGoogle className='' />
                </button>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default SocialLogin;