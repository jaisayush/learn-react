import React from 'react'
import './App.css'
import Header from './header'
import Body from './body'
import Footer from './footer'
function App() {
  const fruits =["Apple","Mango","orange"]
  return (
    <React.Fragment>
      <Header />
      <Body fruits={fruits}/>
      <Footer />
    </React.Fragment>
  )
}

export default App
