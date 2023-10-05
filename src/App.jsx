import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import NotifyAlert from './NotifyAlert'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
      <NotifyAlert/>
    </div>
  )
}

export default App
