import('preline')
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextAPI/ContextAPI";

const Navbar = () => {
  const { user, logOut } = useContext(Context)
  // console.log(user);
  return (
    <section>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 py-1">
        <nav className="max-w-[85rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center  justify-between">
            <NavLink className="flex-none text-xl w-52 font-semibold flex">
              <img className="w-10 h-12 my-auto " src="https://i.ibb.co/S0Qg7fG/logo.png" alt="" />
              <p>NovoNest <span className=" flex justify-end ml-7">Residences</span></p>
            </NavLink>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-5 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col backdrop-blur-xl text-black backdrop:bg-gray-7000 bg-transparent rounded-xl p-1 lg:text-lg gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center sm:mt-0 sm:ps-5">
              <ul className="flex justify-center gap-3">
                <NavLink>
                  <li>Home</li>
                </NavLink>
                <NavLink to={`/apartments`}>
                  <li>Apartments</li>
                </NavLink>
                {/* <NavLink to={`/additems`}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to={`/contact`}>
                  <li>Contact Us</li>
                </NavLink> */}
              </ul>
            </div>
          </div>
        </nav>
        <div className='flex lg:flex-nowrap flex-wrap lg:gap-10 gap-5 justify-end my-auto lg:w-fit w-full lg:mr-10'>
          {/* <div className='my-auto flex gap-1'>
            <input className="border-2 p-1 rounded-lg  " type="text" placeholder="Search here..." />
            <FaSearch className="w-8 my-auto h-7"></FaSearch>
          </div> */}
          <div>
            {
              user ?
                <div className="">
                  <details className="dropdown  dropdown-end rounded-full">
                    <summary className=" border-hidden btn bg-blue-600 rounded-full"><img className="w-10 h-9 rounded-full " src={user.photoURL} alt="" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-50 bg-base-100 rounded-box w-52">
                      <h1 className=" font-semibold my-1">{user.displayName}</h1>
                      <NavLink to={`/dashboard`} className={`text-base`}><li>DashBoard</li></NavLink>
                      <NavLink className={`text-base`}><li>Announcements</li></NavLink>
                      <button onClick={()=>logOut()} className="btn btn-sm my-1">Log Out</button>
                    </ul>
                  </details>
                </div>
                :
                <NavLink to={`/login`}><button className='btn'>login</button></NavLink>
            }
            {/* DropDown */}

          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;