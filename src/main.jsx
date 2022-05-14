import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Favorites from './routes/Favorites'
import NewsAll from './routes/NewsAll'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<NewsAll />} />
          <Route path='favorites' element={<Favorites />}/>
        </Route>   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
