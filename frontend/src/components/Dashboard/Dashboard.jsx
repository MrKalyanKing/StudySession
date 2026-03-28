import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import WorkSpace from '../Workspace/WorkSpace'
import StudyCard from '../Study/StudyCard'

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
                    <StudyCard/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard