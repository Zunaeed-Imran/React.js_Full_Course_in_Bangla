import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Prac from './practice1.jsx'
import Card from './card';
import Class_practice from './class_component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      
      {/* <Prac/> */}
      <App />
      {/* <Card/> */}
      {/* <Class_practice name="Class Prop use by .this"/> */}
    </>
  </React.StrictMode>,
)
