import { useState } from 'react'
import VerticalStackLayout from './components/views/VerticalStackLayout/VerticalStackLayout'
import { Margin } from './components/model/Margin'
import { Padding } from './components/model/Padding'
import Spacing from './components/model/Spacing'

function App() {

  return (
    <>
     <VerticalStackLayout
        margin={new Margin(40)}
        padding={new Padding(40)}
        spacing={new Spacing(20)}
     >
        <p>Google</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
     </VerticalStackLayout>
    </>
  )
}

export default App
