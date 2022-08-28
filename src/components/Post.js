import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const blogTray = useSelector(state=>state.BlogReducer.blogTray)

    useEffect(()=>{
        let postFinder = blogTray.find((each, i)=>(each.title === params.title))
        postFinder !== undefined ? setPost(postFinder) : console.log('No Post')
    }, [blogTray])
    return (
        <div className='bg-bmi py-5 px-5 mt-2'>
            <div className='row' >
                <div className='col-lg-8 mx-auto'>
                    <div className='container bg-bmi shadow-lg rounded-lg py-2 my-4 text-bmi-match' >
                        <div className='d-flex justify-content-between'>
                            <p className='font-weight-bold text-white'>Time</p>
                            <img src={require('../assets/bmi_logo.png')} alt="Basileia Ministries Int'l" width="50px"/>
                        </div>
                            <h1>{post.title}</h1>
                            <p className='mb-5 py-3'>{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;