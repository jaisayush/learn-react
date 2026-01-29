import React from 'react'
import './App.css'
// Converting imports to PascalCase to match filenames - Best Practice
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

// FUNCTIONAL COMPONENT
// In Angular, components are Classes with decorators (@Component).
// In React, modern components are just JavaScript functions that return JSX.
function App() {
  // Variables defined here are like properties in an Angular class.
  const fruits = ["Apple", "Mango", "orange"]

  // RETURN JSX
  // This is the "template" of your component.
  // Instead of a separate .html file, we write HTML-like syntax directly in JS.
  // React.Fragment (<React.Fragment> or <>) is like <ng-container>, 
  // it lets you group elements without adding an extra node to the DOM.
  return (
    <React.Fragment>
      {/* 
        COMPONENT COMPOSITION 
        We use components like HTML tags.
      */}
      <Header />

      {/* 
        PROPS (Short for Properties)
        Passing data down to child components.
        Angular Equivalent: [fruits]="fruits" (@Input in child)
        Here we are passing the 'fruits' array to the Body component.
      */}
      <Body fruits={fruits}/>
      
      <Footer />
    </React.Fragment>
  )
}

export default App
