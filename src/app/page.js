import Crousel from '@/components/Crousel'
import Intro from '@/components/Intro'
import Outro from '@/components/Outro'
import Services from '@/components/Services'
import React from 'react'

function Home() {
  return (
  <>

    <div>
      <Crousel/>
    </div>
    <div className="container-fliud pt-5 pb-5" style={{backgroundColor:'pink'}}>
      <Intro/>
    </div>
    <div className="container-fliud pt-5 pb-5" style={{backgroundColor:'orange'}}>
      <Services/>
    </div>
    <div className="container-fliud pt-5 pb-5">
      <Outro/>
    </div>
    </>
  )
}

export default Home