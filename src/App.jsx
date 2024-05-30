import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import SearchPage from './pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex flex-col'>
      {/* <Header /> */}
      <SearchPage />
    </div>
  )
}

export default App
