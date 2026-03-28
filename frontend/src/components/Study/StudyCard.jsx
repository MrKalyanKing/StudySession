import React, { useContext } from 'react'
import { SessionContext } from '../Context/SessionContext'

const StudyCard = () => {
    const {studyData}=useContext(SessionContext)
    console.log(studyData)
  return (
    <div>StudyCard</div>
  )
}

export default StudyCard