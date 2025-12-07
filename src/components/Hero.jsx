
import React from 'react';
import { motion } from "framer-motion";
import Button from './Button';
import ServiceCard from './ServiceCard';
import GradientBackground from './GradientBackground';

import personOne from '../assets/person-one.png';
import blueVector from '../assets/Vector1.png';
import greenVector from '../assets/Vector2.png';
import webApp from '../assets/web-app.png';
import seo from '../assets/seo.png';
import mobileApp from '../assets/mobile-app.png';
import vr from '../assets/vr.png';

const services = [
    {
    icon: webApp,
    title: "Web Application",
    subtitle: "Lorem Ipsum is simply",
    iconBg: "bg-[#efefff]", 
    },
    {
    icon: seo,
    title: "SEO",
    subtitle: "Lorem Ipsum is simply",
    iconBg: "bg-[#ecffda]", 
    },
    {
    icon: vr,
    title: "AI/ML Solutions",
    subtitle: "Lorem Ipsum is simply",
    iconBg: "bg-[#dae6ff]",
    },
    {
    icon: mobileApp,
    title: "Mobile Applications",
    subtitle: "Lorem Ipsum is simply",
    iconBg: "bg-[#ffe5da]", 
    },
];

const Hero = () => {
  return (
  <section className="bg-gradient-to-br from-blue-50 to-[#e3ebf7] relative overflow-hidden w-full mx-auto scroll-mt-24">
    {/* Decorative elements */}
    <div className='absolute top-60 right-0 z-0 max-w-[200px] md:max-w-[300px]  lg:max-w-full hidden xl:block'>
      <img src={blueVector} alt="vector1" className="w-full h-auto object-contain" />
    </div>
    <div className='absolute bottom-5 left-0 z-0 max-w-[200px] md:max-w-[300px] lg:max-w-full hidden xl:block'>
      <img src={greenVector} alt="vector2" className="w-full h-auto object-contain" />
    </div>
    {/* Subtle purple gradient behind text */}
        <GradientBackground color="subtlePurple" size="large" position="left" className="z-0 opacity-50" />

    {/* Main Hero Content */}
  <div id='home' className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px] justify-center items-start w-full mx-auto max-w-[1536px] max-h-[743px] pt-[128px] lg:pt-[100px] ">
  {/* Left side (Text) */}
  <div className="mt-0 mx-4 w-full  order-2 lg:order-1 z-10">
        <h1
          className="w-full max-w-[900px] font-semibold lg:text-[40px] text-[#000] xl:ml-[123px] lg:ml-[80px] md:ml-[100px] sm:pr-6 sm:mb-[20px] lg:mb-[30px] xl:mb-[40px] md:text-[32px] sm:text-[24px] z-20 "
        >
          Experienced <span className="text-[#1090CB]">mobile and web </span><br className="sm:hidden"/>
          applications and website <br className="sm:hidden"/>
          builders measuring.
        </h1>
        <p className="max-w-[613px] max-h-[125px] mt-0 leading-[204%] text-[16px] text-[#5C5C5C] font-normal xl:ml-[123px] lg:ml-[80px] md:ml-[100px] sm:pr-6 lg:mb-[65px] sm:mb-[28px] lg:text-[16px] md:text-[14px] sm:text-[12px] z-20">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>
        <div className="flex flex-row md:max-w-[401px] md:h-[51px] md:gap-3 sm:gap-2 xl:ml-[123px] lg:ml-[80px] md:ml-[100px]  z-20">
            <Button variant="primary" size="largeRare" >Contact us</Button>
            <Button variant="secondary" size="largeRare">View more</Button>
        </div>
        <div className="hidden md:block mb-16"></div>
      </div>
  {/* Right side (Image) */}
  <div className="lg:mt-[-220px] md:mt-[-200px] sm:mt-[-250px] mr-[65px] w-full flex lg:justify-end lg:items-end sm:justify-center sm:items-center order-1 lg:order-2">
  <GradientBackground color="yellow" position="left" className="z-0" />
  <motion.img
    src={personOne}
    alt="Person working on laptop"
    className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[597px] h-auto md:h-[500px] lg:h-[763px] object-contain z-10"
    animate={{ scale: [1, 1.03, 1] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
  />
      </div>
    </div>
    <div className="hidden sm:block mb-24"></div>

      {/* Services cards */}
      <div className="w-full bg-white py-12 px-0 flex flex-col sm:items-start md:items-center z-50">
        <div className="w-full mx-auto md:px-2">
          <div className="flex flex-row flex-wrap w-full justify-center sm:justify-start md:justify-center sm:px-4 gap-y-6">
            {services.map((service, index) => (
                <div className="flex-shrink-0 w-[280px] h-[83px]" key={index}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  iconBg={service.iconBg}
                />
              </div>
            ))}
          </div>
        </div>
          <div className="w-screen border-b border-gray-200 mt-[73px] relative left-1/2 -translate-x-1/2" />
      </div>
    </section>
  )
}

export default Hero;