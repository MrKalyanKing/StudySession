import { BarChart, Folder, LayoutDashboard, Menu, PlusCircle, X } from 'lucide-react'
import React, { useState } from 'react'
import StudyForm from '../Study/StudyForm'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [open, setOpen] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
    {/* Mobile Toggle Button */}
    <button 
      className='md:hidden fixed bottom-6 right-6 z-50 bg-blue-900 text-white p-4 rounded-full shadow-lg h-14 w-14 flex items-center justify-center'
      onClick={() => setIsMobileOpen(!isMobileOpen)}
    >
      {isMobileOpen ? <X size={24}/> : <Menu size={24}/>}
    </button>

    {/* Sidebar Content */}
    <div className={`
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      transition-transform duration-300 ease-in-out
      fixed md:relative z-40 h-full bg-white border-r
      ${collapsed ? "w-[80px]" : "w-[260px]"}
      flex flex-col justify-between shadow-lg md:shadow-none
    `}>
        <div>
          <div className='flex items-center p-4 mt-2 justify-between '>
              { !collapsed && 
                  <h1 className='font-bold text-xl text-gray-800'>Overview</h1>
               }
              <button 
                className='hidden md:flex cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors' 
                onClick={() => setCollapsed(prev => !prev)}
              >
                <Menu/>
              </button>
          </div>

          <ul className='flex flex-col cursor-pointer p-3 space-y-2'>
              <SidebarItem 
                icon={<LayoutDashboard/>} 
                label="Dashboard" 
                collapsed={collapsed} 
                active={true}
              />
              <SidebarItem 
                icon={<BarChart/>} 
                label="Analytics" 
                collapsed={collapsed} 
              />
              <SidebarItem 
                icon={<Folder/>} 
                label="Project" 
                collapsed={collapsed} 
              />
              <li 
                onClick={() => {
                  setOpen(true)
                  setIsMobileOpen(false)
                }}
                className='flex items-center gap-4 p-3 rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm'
              >
                  <PlusCircle size={24}/>
                  {!collapsed && (
                      <span className='font-medium'>Create Task</span>
                  )}
              </li>
          </ul>
        </div>
        
        {open && <StudyForm onClose={()=>setOpen(false)}/>}
    </div>

    {/* Overlay for mobile */}
    {isMobileOpen && (
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        onClick={() => setIsMobileOpen(false)}
      />
    )}
    </>
  )
}

const SidebarItem = ({ icon, label, collapsed, active }) => (
  <li className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
    active 
    ? 'bg-blue-50 text-blue-900 shadow-sm' 
    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
  }`}>
      <div className={`${active ? 'text-blue-900' : 'text-gray-500'}`}>
        {icon}
      </div>
      {!collapsed && ( 
          <span className='font-medium'>{label}</span>
       )}
  </li>
)

export default Sidebar