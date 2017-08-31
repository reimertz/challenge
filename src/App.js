import React, { Component } from 'react'

import JustAnEditor from './containers/JustAnEditor'
import Description from './components/Description'

class App extends Component {
  render() {
    return (
      <main>
        <h1> IdeaPad Challenge</h1>
        <JustAnEditor />
        <Description />
      </main>
    )
  }
}

export default App
