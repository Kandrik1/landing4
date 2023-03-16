import React from 'react';
import './sceneOne.sass';

export default function Index() {
    return (
        <div className='wrapperSceneOne'>
            <div className='blockSceneOne'>
                <div className='BlockOne'>
                    <div className='BlockOneText'>
                        <h1 className='BlockOneHeading'>The fast, affordable way to ride.</h1>
                        <p className='textOne'>Download the Bolt app</p>
                    </div>
                    <div className='doubleLogo'>
                        <img src='/gallery/appStore.svg'/>
                        <img src='/gallery/googlePlay.svg'/>
                    </div>
                </div>
                <div className='BlockOneLink'><p className='OneLinkText'>REQUEST A RIDE ONLINE</p> <img src='/gallery/arrow.svg' /></div>
            </div>
            <img className='img' src ='/gallery/img.png' alt=''/>
        </div>
    )
}