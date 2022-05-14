import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Views from './components/Views'

function App() {

  return (
    <main className='main'>
      <Header />
      <Views />
      <section className='container'>
        <Outlet />
      </section>
    </main>
  )
}

export default App
