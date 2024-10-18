import React, { useState } from "react";

const ButtonSearch = () => {
    let [Catagory, setCatagory] = useState("Indian")
   return (
    <div className="flex justify-center md:grid-cols-4 lg:grid-cols-6 px-10 items-center py-3  gap-5 text-lg font-semibold text-black">
      <button onClick={()=>{
        return setCatagory("Indian")
      }} className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#433878] hover:bg-[#433878]">
        Indian
      </button>
      <button onClick={()=>{
        return setCatagory("American")
      }} className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#FF9D3D] hover:bg-[#FF9D3D]">
        American
      </button>
      <button onClick={()=>{
        return setCatagory("Thai")
      }} className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#BC7c7c] hover:bg-[#BC7c7c]">
        Thai
      </button>
      <button  onClick={()=>{
        return setCatagory("Russian")
      }} className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#091057] hover:bg-[#091057]">
        Russian
      </button>
      <button onClick={()=>{
        return setCatagory("Italian")
      }} className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#F95454] hover:bg-[#F95454]">
        Italian
      </button>
      <button  onClick={()=>{
        return setCatagory("French")
      }}  className="  hover:text-white px-8 py-3 rounded-xl border-2 border-[#006BFF] hover:bg-[#006BFF]">
        French
      </button>
    </div>
  );
};

export default ButtonSearch;
