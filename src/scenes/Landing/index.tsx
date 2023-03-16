import React from 'react';
import './Landing.sass';
import Header from '../../components/Header'
import SceneOne from './components/SceneOne'
import SceneTwo from './components/SceneTwo'
import SceneTree from  './components/SceneTree'
import SceneFour from './components/SceneFour'
import Footer from "../../components/Footer"

export default function Index() {
  return (
      <div className='wrapper'>
          <div> <Header/> </div>
          <div> <SceneOne/> </div>
          <div> <SceneTwo/> </div>
          <div> <SceneTree/> </div>
          <div> <SceneFour/> </div>
          <div> <Footer/> </div>
      </div>
  )
}
