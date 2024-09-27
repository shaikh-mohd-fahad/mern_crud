import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EditStudent from "./EditStudent.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/edit/:id" element={<EditStudent />}></Route>
    </Routes>
  </BrowserRouter>,
)
