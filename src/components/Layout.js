import React from 'react'
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
const Layout = () => {
  return (
    <div className='page-layout'>
         <Navbar />
        <div className='main-div'>
            <Sidebar/>
            <div className='content'>
                
            </div>
        </div>
</div>
  )
}

export default Layout