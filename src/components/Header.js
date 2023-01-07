import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='row w-100 p-3' style={{zIndex: -1}}>
                <div className='col-lg-4 p-5' >
                    <h1 className="text-bmi font-weight-bold" style={{fontSize: '50px'}} >Our Year of Establishment</h1>
                    <h6 className="text-bmi pt-5">It is possible to have breakthroughs and successes without being established in them. There may be good and bad days, that is because there is no establishment in the good season yet. But in 2023, you shall be established in all good works.</h6>
                </div>
                <div className='col-lg-8 bmi-background' ></div>
            </div>
        </div>
    );
};

export default Header;