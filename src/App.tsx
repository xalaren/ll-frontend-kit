import { useState } from 'react'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import BreadcrumbItem from './components/Breadcrumb/BreadcrumbItem'
import HorizontalStackLayout from './components/HorizontalStackLayout/HorizontalStackLayout'

function App() {

  return (
    <>
     <HorizontalStackLayout
        margin={"10"}
        padding={"10"}
        spacing={20}
     >
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
        <p>Hello world!</p>
     </HorizontalStackLayout>
    </>
  )
}

export default App
