import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const url = 'https://bmi-server.herokuapp.com/api/'
    const [blogTray, setBlogTray] = useState([])
    useEffect(()=>{
        axios.get(`${url}writeup`).then((res)=>{
            if(res.data.status){
                setBlogTray(res.data.resp)
            }
        })
    })
    return (
        <div className='bg-match-bmi py-5 px-5'>
            <div className='row' >
            {
                blogTray.map((each, i)=>(
                        <div className='col-md-6'>
                            <div className='container bg-bmi shadow-lg rounded-lg py-2 my-4 text-bmi-match' >
                                <h1>{each.title}</h1>
                            </div>
                        </div>

                ))
            }
        </div>
        </div>
    );
};

export default Blog;