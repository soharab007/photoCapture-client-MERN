import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const blog = () => {




    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {/* <section className=" bg-gray-300"> */}
            <section className=" dark:bg-black-700">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl mb-8 font-semibold sm:text-2xl"><b className='text-blue-600'>
                        Here The Blog For You
                    </b></h2>

                    <div className="space-y-4">
                        <details className="w-full border border-purple-500 rounded-lg">
                            <summary className="px-4 py-6 text-white focus:outline-none focus-visible:ring-violet-400"><b className='text-blue-500'>
                                What's the Difference between SQL and NoSQL ?
                            </b></summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black bg-white">
                                From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                                Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

                                To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.

                                SQL vs NoSQL: Five Main Differences
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                                There are five practical differences between SQL and NoSQL:
                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="px-4 text-white py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-blue-500'>
                                    What is JWT, and how does it work?
                                </b>

                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black bg-white">
                                First, some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. JWT's can be signed and/or encrypted. The signed tokens verify the integrity of the claims contained in the token, while the encrypted ones hide the claims from other parties.
                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="text-white px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-blue-500'>

                                    What is the difference between javascript and NodeJS ?

                                </b>
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black bg-white">




                                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                                2.


                            </p>
                        </details>
                        <details className="w-full  border-purple-500  border rounded-lg">
                            <summary className="text-white px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                                <b className='text-blue-500'>
                                    How does NodeJS handle multiple requests at the same time  ?
                                </b>
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-black bg-white">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                            </p>
                        </details>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default blog;