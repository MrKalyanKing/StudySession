import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import WorkSpace from '../Workspace/WorkSpace'

const Dashboard = () => {
  return (
    <div className='h-screen flex flex-col'>
        {/* Navbar */}
        <div><Navbar/></div>

        {/* below the navbar */}
        <div className='flex'>
            <div>
                <Sidebar/>
            </div>
            <div>
                <WorkSpace/>
                <div>
                    <h1>StudyForm</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard