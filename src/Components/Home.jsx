import React, { useEffect, useState } from "react";
import ButtonSearch from "./ButtonSearch";

const Home = () => {
  let [Data, SetData] = useState([]);
  let [Catagory, setCatagory] = useState("Indian");
  let [inputData, SetInputData] = useState("");
  async function fetching() {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Catagory}`
    );
    let data = await api.json();
    SetData(data.meals);
  }
  useEffect(() => {
    fetching();
  }, [Catagory]);
  return (
    <>
      {/* <ButtonSearch /> */}
      <div className="flex flex-wrap justify-center md:grid-cols-4 lg:grid-cols-6 px-8 items-center py-2  gap-5 text-sm font-semibold text-black">
        <button
          onClick={() => {
            return setCatagory("Indian");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#433878] hover:bg-[#433878]"
        >
          Indian
        </button>
        <button
          onClick={() => {
            return setCatagory("American");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#FF9D3D] hover:bg-[#FF9D3D]"
        >
          American
        </button>
        <button
          onClick={() => {
            return setCatagory("Thai");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#BC7c7c] hover:bg-[#BC7c7c]"
        >
          Thai
        </button>
        <button
          onClick={() => {
            return setCatagory("Russian");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#091057] hover:bg-[#091057]"
        >
          Russian
        </button>
        <button
          onClick={() => {
            return setCatagory("Italian");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#F95454] hover:bg-[#F95454]"
        >
          Italian
        </button>
        <button
          onClick={() => {
            return setCatagory("French");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#006BFF] hover:bg-[#006BFF]"
        >
          French
        </button>
        <button
          onClick={() => {
            return setCatagory("Canadian");
          }}
          className="  hover:text-white px-5 py-2 rounded-xl border-2 border-[#006B54] hover:bg-[#006B54]"
        >
          Canadian
        </button>
      </div>
      {/* button section end  */}
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(e);

          let Searchapi = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
          );
          let Searchdata = await Searchapi.json();
          Searchdata ? SetData(Searchdata.meals) : "Food is Not Available";
        }}
        className="w-full sm:w-[50%] mx-auto mt-5"
      >
        <input
          type="text"
          className="w-full bg-blue-400 px-5 py-2 font-semibold rounded-3xl"
          onChange={(event) => {
            SetInputData(event.target.value);
          }}
        />
      </form>

      {/* form section ends  */}
      <div className="w-full p-10 gap-6 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {Data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between group gap-3 p-3 border-2 border-black rounded-xl overflow-hidden flex-col"
          >
            <div
              key={index}
              className=" relative overflow-hidden  rounded-xl border-2 border-black "
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="group-hover:scale-110 duration-200 ease-in"
              />
            </div>
            <h2 className="p-2 text-lg font-semibold">{item.strMeal}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
