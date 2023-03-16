import React from 'react';
import './Footer.sass';

export default function Index() {
    return (
        <div className='footerWrapper'>
            <div className='footerBlockBegin'>
                <div className='footerLogos'>
                    <div className='footerLogosBegin'>
                        <div><img src='/gallery/bigBolt.svg'/></div>
                        <div className='stores'>
                            <img src='/gallery/appStore.svg'/>
                            <img src='/gallery/googlePlay.svg'/>
                            <img src='/gallery/appGallery.svg'/>
                        </div>
                    </div>
                    <div className='signs'>
                        <div className='signsElement'><img src='/gallery/support.svg'/><p className='signsText'>Support</p></div>
                        <div className='signsElement'><img src='/gallery/language.svg'/><p className='signsText'>Language</p></div>
                    </div>
                </div>
                <div className='footerColum'>
                    <div className='footerColum1'>
                        <h1 className='signsText'>Nos services</h1>
                        <p className='footerColumText'>Ride</p>
                        <p className='footerColumText'>Become a driver</p>
                        <p className='footerColumText'>Business</p>
                        <p className='footerColumText'>Food</p>
                        <p className='footerColumText'>Fleets</p>
                        <p className='footerColumText'>Fleets</p>
                        <p className='footerColumText'>Scooters Platform</p>
                        <p className='footerColumText'>Dispacth Software</p>
                        <p className='footerColumText'>Franchise</p>
                        <p className='footerColumText'>Influencers</p>
                        <p className='footerColumText'>Request Bolt Online</p>
                    </div>
                    <div className='footerColum1'>
                        <h1 className='signsText'>À propos</h1>
                        <p className='footerColumText'>Airports</p>
                        <p className='footerColumText'>Cities</p>
                        <p className='footerColumText'>Green Plan</p>
                        <p className='footerColumText'>Careers</p>
                        <p className='footerColumText'>Press</p>
                        <p className='footerColumText'>Blog</p>
                        <p className='footerColumText'>Contacts</p>
                        <p className='footerColumText'>Security</p>
                    </div>
                </div>
            </div>
            <div className='footerBlockEnd'>
                <div className="company">
                    <p className='footerColumText'>© 2021 Bolt Technology OÜ</p>
                    <p className='footerColumText'>Mentions légales</p>
                    <p className='footerColumText'>Cookie Declaration</p>
                </div>
                <div className='logoMessenger'>
                    <img src='/gallery/facebook.svg'/>
                    <img src='/gallery/instagram.svg'/>
                    <img src='/gallery/linkrdIn.svg'/>
                </div>
            </div>
        </div>
    )
}