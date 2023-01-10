import React from "react";
import { IconContext } from "react-icons";
import {
  IoLocationOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoSearchOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <section className="border-b">
      <header className="container mx-auto flex justify-between h-20 items-center px-5">
        <aside>
          <h1 className="text-2xl font-Poppins font-semibold text-gray-400">
            HuntDear
          </h1>
        </aside>
        <aside className="flex justify-center items-center w-7/12">
          <div className="w-80">
            <input
              className="border text-[0.9rem] h-12 px-2 font-Poppins bg-[#F5F6F7] text-gray-400 w-full outline-1 outline-blue-400"
              type="text"
              name=""
              placeholder="Search for job titles or keywords"
            />
          </div>
          <div className="w-48 relative flex items-center">
            <div className="absolute left-2">
              <IconContext.Provider value={{ size: 25, color: "gray" }}>
                <IoLocationOutline />
              </IconContext.Provider>
            </div>

            <input
              className="border-t border-l border-b h-12 px-2 pl-10 overflow-hidden font-Poppins bg-[#F5F6F7] text-gray-400 outline-1 outline-blue-400"
              type="text"
              name=""
              placeholder="Location"
            />
          </div>
          <div className="w-12 bg-green-500 h-12 flex justify-center items-center rounded-sm">
            <button>
              <IconContext.Provider value={{ size: 25, color: "white" }}>
                <IoSearchOutline />
              </IconContext.Provider>
            </button>
          </div>
        </aside>
        <aside className="flex items-center space-x-3">
          <div className="mt-1">
            <IconContext.Provider value={{ size: 30, color: "gray" }}>
              <IoNotificationsOutline />
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider value={{ size: 40, color: "gray" }}>
              <IoPersonCircleOutline />
            </IconContext.Provider>
          </div>
        </aside>
      </header>
    </section>
  );
};

export default Navbar;
