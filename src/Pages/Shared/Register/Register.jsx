import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  // handle form events
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  // handle submit 
  const onSubmit = data => console.log(data);


  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  //    check password event 
  const password = watch('password')

  return (
    <>
      <Helmet>
        <title>Martial Arts | Register</title>
      </Helmet>
      <section className="hero ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-2xl rounded-xl py-8 px-10">
            {/* header */}
            <div className="flex items-center justify-center my-5 lg:w-[555px] ">
              <p className="uppercase text-4xl font-bold text-center">
                Please Register Now
              </p>
            </div>

            {/* body */}
            <div>
              <div className="mx-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Your Email Address*</span>
                  </label>
                  <input type="text" name="name" {...register("name", { required: true })} placeholder="Your Name.." className="input input-bordered" required />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text">Photo URL*</span>
                  </label>
                  <input type="text"
                    name="photo" placeholder="Photo URL.."
                    className="input input-bordered" required
                    {...register("photo")}
                  />

                </div>
                {/* password section */}
                <div className="mt-5 relative">
                  <label className="label">
                    <span className="label-text"> Your Password*</span>
                  </label>
                  <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Password"
                    className={`w-full h-14 pl-4 border rounded-lg ${errors.password &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("password", {
                      required: 'Password is required',
                      pattern: {
                        value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                        message: 'Password should include at least one uppercase, one numeric value and one special character'
                      },
                      minLength: {
                        value: 8,
                        message: 'Minimum Required length is 8'
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                    })}
                  />
                  {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute top-12 cursor-pointer right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                  </div>
                </div>

                {/* confirm password section */}
                <div className="mt-5 relative">
                  <label className="label">
                    <span className="label-text"> Your Confirm Password*</span>
                  </label>
                  <input
                    type={confirmPasswordEye === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    onPaste={(e) => {
                      e.preventDefault()
                      return false;
                    }}
                    className={`w-full h-14 border pl-4 rounded-lg ${errors.confirmPassword &&
                      "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
                    {...register("confirmPassword", {
                      required: 'confirm password is required',
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}

                  {/* eye section */}
                  <div className="text-2xl absolute cursor-pointer top-12 right-5">
                    {confirmPasswordEye === false ? (
                      <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                    ) : (
                      <AiFillEye onClick={handleConfirmPasswordClick} />
                    )}
                  </div>
                </div>
                {/* button section */}
                <div className="flex items-center justify-center mt-5">
                  <input
                    type='submit'
                    value='Submit'
                    className="h-10 btn cursor-pointer w-full rounded-lg font-bold bg-blue-700 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <div className=" text-center">
              <button className="btn btn-circle  btn-outline btn-primary">
                <FaGoogle className='' />
              </button>
            </div>
            <p className='mt-5'>Already Have an Account? <Link className='link-hover btn-link' to='/login'>Login</Link> </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
