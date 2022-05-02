import { Fragment } from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const Footer =() =>{

    return(
        <Fragment>
            <div className="bg-gray-300 border-t border-gray-800">
            <div className="container mx-auto md:px-24 py-6 px-4">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="text-gray-900 text-center md:text-left text-xl mb-4 md:mb-0 font-semibold">
                        Tanaji Awaghade
                </div>
                <div className="flex flex-row justify-center text-gray-900 text-center md:text-left text-xl mb-4 md:mb-0 font-semibold">
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="text-2xl mx-2 text-gray-800"><FaFacebook /></a>
  <a href="https://www.instagram.com/"rel="noreferrer" target="_blank" className="text-2xl mx-2 text-gray-800  "><FaInstagram /></a>
  <a href="https://www.pinterest.com/" rel="noreferrer" target="_blank" className="text-2xl mx-2 text-gray-800  "><FaPinterest /></a>
                </div>
            </div>
            </div>
            </div>
        </Fragment>
    );

}

export default Footer;