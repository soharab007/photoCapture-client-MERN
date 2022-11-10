
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';






const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const notify = () => toast.success("Successfully Sign Up !");
    const notifyError = () => toast.error("An error in here Please, Try again!");
    const { createUser, nameUpdate, googleSignIn } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value;
        const photoURI = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                nameUpdate(name, photoURI);
                notify();
                console.log(user);
            })
            .catch((error) => {
                notifyError()
                console.log(error);
            });
    };

    const handleGoogleSign = () => {

        const from = location.state?.from?.pathname || "/";
        googleSignIn()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                notify();

                const currentUser = {
                    email: user?.email
                };
                fetch(`https://localhost1000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access_token', data.token)
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                notifyError()
                console.log(error);
            });

    }

    return (

        <div>
            <div className='grid justify-items-center my-5'>
                <div className="w-full max-w-md p-8 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <form
                        onSubmit={handleSignUp}
                        className=" ng-untouched ng-pristine ng-valid">
                        <div className=" text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Username</label>
                            <input
                                name='name' type="text" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className=" text-sm">
                            <label htmlFor="photoURL" className="block dark:text-gray-400">photoURL</label>
                            <input
                                name='photoURL' type="text" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className=" text-sm">
                            <label htmlFor="Email" className="block dark:text-gray-400">Email</label>
                            <input
                                name='email' type="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className=" text-sm">
                            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                            <input
                                name='password'
                                type="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                            <div className="flex justify-end text-xs dark:text-gray-400">
                                <a rel="noopener noreferrer" >Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign Up</button>
                    </form>


                    <div className="flex items-center space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Sign Up with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center ">
                        <button
                            onClick={handleGoogleSign}
                            aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FaGoogle className='text-3xl' title='Google Sign In'> </FaGoogle>
                        </button>

                    </div>
                    <p className="text-xs text-center dark:text-gray-400">Already have an account?
                        <Link rel="noopener noreferrer" to='/login' className="underline text-green-400 text-xl m-5">Sign In</Link>
                    </p>
                </div>
                <ToastContainer position="top-center" />
            </div>
            <Helmet>
                <title>Sign Up  </title>
            </Helmet>
        </div>
    );
};

export default SignUp;