import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Card from '../../Services/Card/Card';


const Home = () => {
    const { user } = useContext(AuthContext);
    const services = useLoaderData();

    return (
        <div>

            <div className="bg-pink-400">
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col sm:text-center sm:mb-0">
                            <Link href="/" className="sm:mx-auto">
                                <div className="flex items-center justify-center w-12 h-6 rounded-full bg-teal-accent-400">
                                    <svg
                                        className="w-10 text-white h-5 text-deep-purple-900"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </Link>
                            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                    <span className="relative inline-block">
                                        <svg
                                            viewBox="0 0 52 24"
                                            fill="currentColor"
                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                        >
                                            <defs>
                                                <pattern
                                                    id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                    x="0"
                                                    y="0"
                                                    width=".135"
                                                    height=".30"
                                                >
                                                    <circle cx="1" cy="1" r=".7" />
                                                </pattern>
                                            </defs>
                                            <rect
                                                fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                                width="52"
                                                height="24"
                                            />
                                        </svg>
                                    </span>{' '}
                                    Give Me Your Review For The Better Services
                                </h2>
                                <p className="text-base text-indigo-100 md:text-lg">
                                    The reviews are one of the most affordable ways to grow my solo business. Here's why they're so important and how to make them work for you.
                                    A customer review is a written or spoken comment given by someone to share their experience with a product or service. A review can be either positive or negative.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center bg-blue-100'>
                {
                    services.map(service =>
                        <Card
                            service={service}
                            key={service._id}
                        >
                        </Card>)
                }
            </div>


            <div className='grid justify-items-center mb-5 py-8 bg-slate-400'>
                <Link to={'/services'}>
                    <button className="btn btn-active btn-primary">See All Services</button>

                </Link>
            </div>



            <div>
                <section className="dark:bg-gray-900 dark:text-gray-100">
                    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-start  ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">500+</p>
                            <p className="text-sm sm:text-base">Clients</p>
                        </div>
                        <div className="flex flex-col justify-start  ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                            <p className="text-sm sm:text-base">Followers on social media</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                            <p className="text-sm sm:text-base">Published Megazine</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                            <p className="text-sm sm:text-base">TED talks</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">12</p>
                            <p className="text-sm sm:text-base">Years of experience</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 ">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                            <p className="text-sm sm:text-base">Workshops</p>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section className="dark:bg-gray-600 dark:text-gray-100">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Do I provide those services?</summary>
                                <div className="px-4 pb-4">
                                    <p>The services I provide are Weeding Photography,Sports Photography,Fashion Photography,Photojurnalism,Family Photography,Birthday Photography and so on.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What do I focus on providing services?</summary>
                                <div className="px-4 pb-4">
                                    <p>My main focus must be to satisfy the customers.
                                        Customer satisfaction is defined as a measurement that determines how happy customers are with a company’s products, services, and capabilities. Customer satisfaction information, including surveys and ratings, can help a company determine how to best improve or changes its products and services.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What to do to recieive services from me?</summary>
                                <div className="px-4 pb-4 space-y-2">
                                    <p>You can place orders from my sites and also contact me through social media.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>



            <Helmet>
                <title>photoCapture </title>
            </Helmet>
        </div>
    );
};

export default Home;