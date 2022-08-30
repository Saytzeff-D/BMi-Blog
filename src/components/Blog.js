import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const blogTray = useSelector(state=>state.BlogReducer.blogTray)
    const navigate = useNavigate()

    return (
        <div className='bg-bmi py-5 px-5 mt-2'>
            <div className='row' >
            {
                blogTray.map((each, i)=>(
                        <div className='col-lg-6 mx-auto' key={i} style={{zIndex: 1}}>
                            <div className='container bg-bmi shadow-lg rounded-lg py-2 my-4 text-bmi-match' >
                                <div className='d-flex justify-content-between'>
                                    <p className='font-weight-bold text-white'>Time</p>
                                    <img src={require('../assets/bmi_logo.png')} alt="Basileia Ministries Int'l" width="50px"/>
                                </div>
                                    <h1>{each.title}</h1>
                                <p className='h6 mb-5'>{each.content.slice(0,50)}{each.content.length > 50 && (<span>...</span>)}</p>
                                {
                                    each.content.length > 50
                                    &&
                                    <p className='btn text-bmi-match' onClick={()=>navigate('/posts/' + each.title)}>Continue Reading <i className='fa fa-arrow-right'></i></p>
                                }
                            </div>
                        </div>

                ))
            }
        </div>
        </div>
    );
};

export default Blog;