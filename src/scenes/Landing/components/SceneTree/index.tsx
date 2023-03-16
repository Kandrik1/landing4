import React from 'react';
import './SceneThree.sass';

export default function Index() {
    return (
        <div className='wrapperSceneThree'>
            <div className='SceneThreeBeginning'>
                <div className='treeColumn1'>
                    <div><img src='/gallery/car.svg'/></div>
                    <div className='ColumnText1'>
                        <h1 className='ThreeHeading'>Get a ride</h1>
                        <p className='TextTwo'>Bolt offers you a ride in minutes.</p>
                    </div>
                </div>
                <div className='treeColumn2'>
                    <div><img src='/gallery/prices.svg'/></div>
                    <div className='ColumnText'>
                        <h1 className='ThreeHeading'>The best prices</h1>
                        <p className='TextTwo'>We aim to offer the best ride prices in <br/> every city. See for yourself!</p>
                    </div>
                </div >
                <div className='treeColumn3'>
                    <div><img src='/gallery/use.svg'/></div>
                    <div className='ColumnText'>
                        <h1 className='ThreeHeading'>Easy to use</h1>
                        <p className='TextTwo'>Get wherever you need to go as quickly <br/>  as possible</p>
                    </div>
                </div>
            </div>
            <div className='SceneThreeEnd'>
                <div className='ThreeEndBlock'>
                    <h1 className='threeEndHeading'>Get a ride in minutes!</h1>
                    <p className='TextTwo'>Pick your destinaton, request a ride, meet your driver, enjoy the <br/> journey</p>
                </div>
            </div>
        </div>
    )
}