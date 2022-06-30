import React from 'react';
import BillingTable from './BillingTable';
import BillingTop from './BillingTop';

const Home = () => {
    return (
        <div>
            <div className='sticky top-[90px] z-[99999999]'>
                <BillingTop></BillingTop>
            </div>
            <BillingTable></BillingTable>
        </div>
    );
};

export default Home;