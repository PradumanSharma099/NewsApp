import React, { Component } from 'react'
import News from './Components/News'

export class Business extends Component {
  render() {
    return (<>
      <News category={'business'}/>
      </>
    )
  }
}

export default Business