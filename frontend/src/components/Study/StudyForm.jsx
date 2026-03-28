import React, { useContext, useState } from "react";
import { SessionContext } from "../Context/SessionContext";

const StudyForm = ({ onClose }) => {
//   const { studyData } = useContext(SessionContext);

  const [data, setData] = useState({
    id:new Date(),
    name: "",
    subject: "DSA",
    priority: "low",
    duration: "",
    date: "",
  });

 



  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
const handleOnSubmit = (e) => {
  e.preventDefault();

  const existingPosts =
    JSON.parse(localStorage.getItem("postdata")) || [];

  const newPost = {
    ...data,
    // id: Date.now(),
  };

  const updatedPosts = [...existingPosts, newPost];

  localStorage.setItem("postdata", JSON.stringify(updatedPosts));

  onClose()

};
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-xl p-6 w-[400px]">
        <div className="flex justify-between mb-6">
          <h1 className="font-bold">Study Details</h1>
          <button className="cursor-pointer" onClick={onClose}>
            ✕
          </button>
        </div>
        <form onSubmit={handleOnSubmit} action="">
          <div className="flex flex-col p-1 mt-2">
            <label className="text-[18px]" htmlFor="">
              Topic Name
            </label>
            <input
              className="w-full bg-gray-100 mt-1 rounded-md border-gray-500 p-2"
              type="text"
              placeholder="Enter Topic.."
              id=""
              name="name"
              value={data.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-2 ">
            <div className="">
              <label className="text-[18px]" htmlFor="">
                Subject
              </label>
              <select
                className="bg-gray-50 p-2 "
                name="subject"
                value={data.subject}
                onChange={handleOnChange}
              >
                <option>DSA</option>
                <option>WEB DEV</option>
                <option>DBMS</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Priority</label>
              <select
                className="bg-gray-50 p-2"
                name="priority"
                value={data.priority}
                onChange={handleOnChange}
              >
                <option >Low</option>
                <option >Medium</option>
                <option >High</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-[18px]" htmlFor="">
              Duration
            </label>
            <input
              className="p-2"
              type="number"
              min="10"
              name="duration"
              placeholder="Duration min 10"
              id=""
              value={data.duration}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[18px]" htmlFor="">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleOnChange}
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyForm;
