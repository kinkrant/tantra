import { Fragment } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {

  return (
    <Fragment>
      <nav className=" border-gray-800 z-50 px-2 sm:px-4 py-4 bg-gray-100 border-b-gray-800 border-b fixed top-0 w-full">
        <div className="container md:px-28 flex flex-wrap justify-between items-center mx-auto">
          <div className="flex justify-between flex-wrap w-full md:w-auto ">
            <Link to="/" className="flex">
              <span className="text-gray-800 hover:text-gray-700 font-medium text-xl">
                Tanaji Awaghade
              </span>
            </Link>
            <div className="md:hidden">
              <span className="text-gray-800 text-xl">
                <a href="tel:+91 98507 13738">
                  <BiPhoneCall />
                </a>
              </span>
            </div>
          </div>

       
          <div className="w-full block md:w-auto">
            <ul className="flex mt-3 overflow-y-auto whitespace-no-wrap scroll-hidden md:flex-row md:space-x-8 md:mt-0 md:text-sm text-xs md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block text-center py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0 hover:text-blue-800"
                  // onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/aboutus"
                  className="block text-center py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0 hover:text-blue-500"
                  // onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="block text-center py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0 hover:text-blue-500"
                  // onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/newarrival"
                  className="block leading-5 text-center py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0 w-full hover:text-blue-500"
                  // onClick={() => setIsOpen(false)}
                >
                  New Arrival
                </Link>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="block text-center py-2 pr-4 pl-3 text-gray-800 rounded md:bg-transparent md:p-0 hover:text-blue-500"
                  // onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
