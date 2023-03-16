import React from 'react';
import './Header.sass';

export default function Index() {
    return (
        <div className='headerWrapper'>
            <img src='/gallery/bolt.svg' alt=''/>
            <div className='headerNavigation'>
                <p className='headerNavigationText'>Ride</p>
                <p className='headerNavigationText'>Become a driver</p>
                <p className='headerNavigationText'>Fleet</p>
                <p className='headerNavigationText'>Business</p>
                <p className='headerNavigationText'>Food</p>
                <p className='headerNavigationText'>Cities</p>
            </div>
        </div>
    )
}