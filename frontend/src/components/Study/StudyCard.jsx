import React, { useContext, useEffect, useState } from "react";
import { Trash, Eye } from "lucide-react";
import StudyViewModal from "./StudyViewModal";
import { SessionContext } from "../Context/SessionContext";

const StudyCard = () => {

   const [selectedStudy, setSelectedStudy] = useState(null)
  const [open, setOpen] = useState(false)

  const {deleteSession,sessions}=useContext(SessionContext)

  


  const getPriorityColor = (priority) => {
  switch (priority?.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-600";
    case "medium":
      return "bg-yellow-100 text-yellow-600";
    case "low":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {sessions.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-4 space-y-3 hover:shadow-lg transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Project/Study</span>
              <span className={`text-xs px-2 py-1 bg-red-10 rounded-md ${getPriorityColor(elem.priority)} `}>
                {elem.priority}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-semibold text-lg">{elem.name}</h2>

            {/* Subject Tag */}
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-blue-100 rounded">
                {elem.subject}
              </span>
              <span className="text-xs px-2 py-1 bg-green-100 rounded">
                Studying
              </span>
            </div>

            {/* Progress */}
            <div>
              <input
                type="range"
                value={elem.duration || 0}
                max="100"
                readOnly
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                {elem.duration || 0}% completed
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm">
              <p className="text-gray-500">
                {elem.date
                  ? new Date(elem.date).toDateString()
                  : "No date"}
              </p>

              <div className="flex gap-3">
                <button 
                onClick={()=>{
                    setSelectedStudy(elem)
                    setOpen(true)
                }}
                className="text-blue-600 flex items-center cursor-pointer gap-1">
                  <Eye size={16} /> View
                </button>

                <button
                  onClick={() => deleteSession(idx)}
                  className="text-red-500 cursor-pointer"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <StudyViewModal
       isOpen={open}
       onClose={()=>setOpen(false)}
       study={selectedStudy}
      />
    </div>
  );
};

export default StudyCard;