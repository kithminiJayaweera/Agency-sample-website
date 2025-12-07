import React from 'react';
import Button from './Button';
import GradientBackground from './GradientBackground';
import { motion } from "framer-motion";

const FeatureSection = ({
  icon,
  iconBgColor,
  image,
  imageAlt,
  reversed = false,
  gradientColor,
}) => {
  return (
    <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 lg:gap-8 items-center my-16 md:my-24 lg:my-32`}>
      {/* Text Section */}
      <div className={`space-y-6 ${reversed ? 'lg:order-2' : ''} flex flex-col`}>
        <div className="flex items-start gap-4 lg:ml-16">
          <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center text-white text-lg `}>
            <motion.i
              className={icon + ' flex items-center justify-center leading-none text-center'}
              style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              whileHover={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 300 }}
            ></motion.i>
          </div>
          <p className="text-left">
            <span className="text-gray-800 font-bold text-[17px] ">Lorem Ipsum is simply dummy text</span><br/>
            <span className="text-gray-400 text-[14px]">of the printing and typesetting industry.</span>
          </p>
        </div>
        <h3 className="xl:text-[30px] md:text-[24px] sm:text-[22px] font-semibold xl:mt-[21px] lg:mt-[11px] sm:ml-16">
          <span className="text-[#2596be]">Lorem Ipsum</span> is simply dummy<br className="hidden md:block"/> text of the printing.
        </h3>
        <p className="text-gray-600 leading-relaxed sm:text-[14px] xl:text-[16px] xl:mt-[28px] lg:mt-[23px] sm:ml-16">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br className="hidden md:block"/> mobile and web applications and website builders<br className="hidden md:block"/>
          measuring dozens of completed projects. We build and <br className="hidden md:block"/> develop mobile applications for several top
          platforms, <br className="hidden md:block"/> including Android & iOS.
        </p>
      </div>
      
      {/* Image Section */}
  <div className={`${reversed ? 'lg:order-1' : ''} relative overflow-hidden ${!reversed ? 'px-2 sm:px-3 md:px-4' : 'px-4 sm:px-6 md:px-8'}`}>
        {/* Gradient for md and up: center, else original position */}
          <GradientBackground 
            color={gradientColor} 
            position="center"
            size="small"
            className="z-0"
          />
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto max-h-[520px] md:max-h-[400px] object-contain relative z-10"
        />
      </div>
    </div>
  );
};

export default FeatureSection;