import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='row w-100 p-3'>
                <div className='col-lg-4 p-5' >
                    <h1 className="text-bmi font-weight-bold" style={{fontSize: '50px'}} >Basileia Ministries Int'l Blog Website</h1>
                    <h6 className="text-bmi pt-5">A small river named Duden flows by their place and supplies it with the necessary regelia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h6>
                </div>
                <div className='col-lg-8 bmi-background' ></div>
            </div>
        </div>
    );
};

export default Header;