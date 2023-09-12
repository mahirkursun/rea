import React, { Component } from 'react'

import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'

class Main extends Component {
  render() {
    return (
        <div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
        </div>
    )
  }
}

export default Main