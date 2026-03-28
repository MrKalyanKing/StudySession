import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import WorkSpace from '../Workspace/WorkSpace'
import StudyCard from '../Study/StudyCard'

const Dashboard = () => {
  return (
    <div className='h-screen flex flex-col overflow-hidden bg-gray-50'>
        {/* Navbar - Fixed at top */}
        <div className="z-50"><Navbar/></div>

        <div className='flex flex-1 overflow-hidden relative'>
            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content Area */}
            <main className='flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 w-full'>
                <div className="max-w-7xl mx-auto space-y-6">
                    <WorkSpace/>
                    <StudyCard/>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboard