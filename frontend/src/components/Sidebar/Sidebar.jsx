import { BarChart, Folder, LayoutDashboard, Menu, PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
  return (
    <div className={`${collapsed ? "w-[80px] flex flex-col items-center" 
    : "w-[250px] shadow-md flex flex-col  justify-between "}`}>
        <div className='flex items-center p-2   mt-4 mb-5 justify-between '>
            { !collapsed && 
                <h1 className='font-bold '>Study Planner</h1>
             }
            <button className='flex cursor-pointer' onClick={()=>setCollapsed(prev=>!prev)} ><Menu/></button>
        </div>
        <ul className='flex flex-col cursor-pointer p-2 justify-between space-y-4  '>
            <li className='flex gap-5 p-2  rounded-md bg-purple-300 text-purple-500'>
                <LayoutDashboard/>
                {!collapsed && ( 
                    <span>Dashboard</span>
                 )}
            </li>
            <li className='flex gap-5 p-2 rounded-md bg-purple-300 text-purple-500'>
                <BarChart/>
                {!collapsed && (
                    <span>Analytics</span>
                )}
            </li>
            <li className='flex gap-5 p-2 rounded-md bg-purple-300 text-purple-500'>
                <Folder/>
                {!collapsed && (
                    <span>Project</span>
                )}
            </li>
            <li className='flex gap-5 p-2 rounded-md bg-purple-300 text-purple-500'>
                <PlusCircle/>
                {!collapsed && (
                    <span>Create Task</span>
                )}
            </li>
        </ul>
    </div>
  )
}

export default Sidebar