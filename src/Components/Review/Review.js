import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


const Review = () => {
    const notify = () => toast.success("Successfully Deleted!");
    const notifyUpdate = () => toast.success("Successfully Updated!");

    const { user } = useContext(AuthContext);
    const [myreivews, setMyReviews] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:1000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
                // console.log(data);
            })
    }, [user?.email]);



    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure you ?');
        if (agree) {
            fetch(`http://localhost:1000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaingReview = myreivews.filter(rev => rev._id !== id)
                        setMyReviews(remaingReview)
                    }
                    notify();
                    console.log(data)
                })
        }
    };



    return (
        <div>
            <div className=' dark:bg-gray-600 pt-10  grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 justify-items-center'>
                {
                    myreivews.length !== 0 ?
                        <>
                            {
                                myreivews.map(myreivew =>
                                    <ReviewCard
                                        key={myreivew._id}
                                        myreivew={myreivew}
                                        handleDelete={handleDelete}
                                    >
                                    </ReviewCard>)
                            }
                        </>
                        :
                        <>
                            <div className='flex grid-cols-1'>
                                <h1 className='p-10 h-96 w-full  font-bold text-3xl text-gray-200 '>No Review Added</h1>
                            </div>
                        </>
                }
            </div>
            <Helmet>
                <title>My reviews</title>
            </Helmet>
        </div>
    );
};

export default Review;