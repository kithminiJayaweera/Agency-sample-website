import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-4 sm:px-16 lg:px-32">
            <div className="max-w-[1440px] mx-auto sm:mx-auto sm:text-center md:text-left md:items-start">
                {/* 4-column grid for main content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 sm:justify-center sm:items-center md:justify-start md:items-start">
                    {/* Logo and Description */}
                    <div className="space-y-4 sm:text-center sm:items-center md:text-left md:items-start">
                        <h4 className="font-bold text-[#00329B]">LOGO</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="text-gray-600 text-sm mt-8">
                            <p>@Lorem</p>
                        </div>
                    </div>
                    {/* About Us */}
                    <div className="space-y-4 sm:text-center sm:items-center md:text-left md:items-start">
                        <h4 className="font-bold text-gray-800">About us</h4>
                        <ul className="space-y-2 text-sm text-[#515151]">
                            <li className="hover:text-gray-400"><a href="#">Lorem</a></li>
                            <li className="hover:text-gray-400"><a href="#">Portfolio</a></li>
                            <li className="hover:text-gray-400"><a href="#">Careers</a></li>
                            <li className="hover:text-gray-400"><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div className="space-y-4 sm:text-center sm:items-center md:text-left md:items-start">
                        <h4 className="font-bold text-gray-800">Contact us</h4>
                        <div className="space-y-2 text-sm text-[#515151] mt-8">
                            <p className='mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>+908 89097 890</p>
                        </div>
                    </div>
                        <div className="space-y-4 flex flex-col justify-between sm:text-center sm:items-center md:text-left md:items-start">
                            <div className="flex space-x-4 md:mt-28">
                                <a href="#">
                                    <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg">
                                        <i className="fa-brands fa-facebook"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg">
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-lg">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                </div>
                </div>
            <div className="w-screen border-t border-[#D2D2D2] absolute left-0" />
            <div className="pt-8 text-center mx-auto text-gray-500 font-normal text-[13px] mb-6">
                <p className="text-[#515151] text-sm">Copyright© 2024 kodex all rights reserved</p>
            </div>
        </footer>
        
    );
};

export default Footer;