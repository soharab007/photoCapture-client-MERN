

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>

            <section className="flex h-[100%] items-center h-full p-16 dark:bg-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center pb-40">
                        <h2 className="mb-8 font-extrabold text-9xl text-red-600">
                            <span className="sr-only text-ora"></span>404!
                        </h2>
                        <p className="text-2xl text-red font-semibold md:text-3xl mb-5">The Page didn't found</p>
                        {/* <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p> */}
                        <Link rel="noopener noreferrer" to="/" className="px-8 py-5 mt-5 font-semibold rounded dark:bg-violet-700  dark:text-blue-900 text-blue-600">Back to homepage</Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ErrorPage;