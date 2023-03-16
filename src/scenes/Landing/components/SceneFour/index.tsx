import React from 'react';
import './SceneFour.sass';

export default function Index() {
    return (
        <div className='wrapperSceneFour'>
            <div className='wrapperSceneFour'>
                <div className='SceneFourBeginning'>
                    <div className='FourColumn'>
                        <div><img src='/gallery/minCar.svg'/></div>
                        <div className='ColumnText4'>
                            <h1 className='FourHeading'>Safe and convenient </h1>
                            <p className='TextTwo'>Moving with Bolt is easy, convenient and <br/> fast.</p>
                        </div>
                    </div>
                    <div className='FourColumn'>
                        <div><img src='/gallery/heart.svg'/></div>
                        <div className='ColumnText4'>
                            <h1 className='FourHeading'>Happy drivers, happy riders</h1>
                            <p className='TextTwo'>Bolt drivers earn more thanks to lower <br/> commission rates.</p>
                        </div>
                    </div >
                    <div className='FourColumn'>
                        <div><img src='/gallery/call.svg'/></div>
                        <div className='ColumnText4'>
                            <h1 className='FourHeading'>Always there for you</h1>
                            <p className='TextTwo'>Get fast support, whenever you need it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sceneFourEnd'>
                <div className='fourEndBlock'>
                    <h1 className='fourEndHeading'>Ready to ride?</h1>
                    <div className='doubleLogoFour'>
                        <img src='/gallery/appStore.svg'/>
                        <img src='/gallery/googlePlay.svg'/>
                    </div>
                </div>
                <p className='textOne'>Or sign up to start driving</p>
            </div>
        </div>
    )
}