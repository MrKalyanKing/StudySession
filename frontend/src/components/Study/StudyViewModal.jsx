import React from "react";
import { X } from "lucide-react";

const StudyViewModal = ({ isOpen, onClose, study }) => {
  if (!isOpen || !study) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-2xl shadow-lg p-5 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-3">{study.name}</h2>

        {/* Subject */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Subject:</span> {study.subject}
        </p>

        {/* Priority */}
        <p className="text-sm mb-2">
          <span className="font-medium">Priority:</span>{" "}
          <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs">
            {study.priority}
          </span>
        </p>

        {/* Duration */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Progress:</span> {study.duration || 0}%
        </p>

        {/* Date */}
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Date:</span>{" "}
          {study.date ? new Date(study.date).toDateString() : "No date"}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${study.duration || 0}%` }}
          ></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StudyViewModal;