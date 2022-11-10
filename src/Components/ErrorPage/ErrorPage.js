

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>

            <section className="flex h-[100%] items-center h-full p-16 dark:bg-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center pb-40">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only text-ora">Error</span>404
                        </h2>
                        <p className="text-2xl text-red-500 font-semibold md:text-3xl">The page didn't found.</p>
                        <p className="mt-4 mb-8 text-gray-400"></p>
                        <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400  dark:text-gray-900 text-blue-500">Back to homepage</Link>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ErrorPage;