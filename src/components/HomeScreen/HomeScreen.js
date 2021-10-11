import React from 'react';

// Components
import Overview from './Overview/Overview';
import CompanyUsers from './CompanyUsers/CompanyUsers';
import AppBenefits from './AppBenefits/AppBenefits';
import Pricing from './Pricing/Pricing';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';

const HomeScreen = () => {
    return(
        <div>
            Home Screen Component
            <Overview />
            <CompanyUsers />
            <AppBenefits />
            <Pricing />
            <Reviews />
            <Footer />
        </div>
    )
}

export default HomeScreen;