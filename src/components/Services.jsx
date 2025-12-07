import React from 'react';
import FeatureSection from './FeatureSection';
import SectionTitle from './SectionTitle';
import Button from './Button';
import GradientBackground from './GradientBackground';

import mobilePhone from '../assets/mobile-phone.png';
import websiteStack from '../assets/websiteStack.png';
import theDude from '../assets/theDude.png';
import bell from '../assets/bell.png';
import beneshop from '../assets/beneoshop.png';
import caspio from '../assets/caspio.png';
import hyper from '../assets/HyperGrid.png';
import leo from '../assets/leotrippi.png';

import{motion} from 'framer-motion';

const Services = () => {

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-8 xl:px-28">
        {/* Main Services Section */}
        <motion.div className="text-center mt-16 mb-12 md:mb-20 sm:mb-18"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{}}>
          <SectionTitle 
            title="Lorem Ipsum is simply dummy text of the printing."
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </motion.div>

        {/* Feature Sections */}
        <div id='about' className="w-full space-y-16 md:space-y-24 lg:space-y-32">
          {/* Web Development Section */}
          <motion.div initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{}}>
          <FeatureSection 
            icon="fa-regular fa-face-smile-beam"
            iconBgColor="bg-[#08d3bb]"
            image={mobilePhone}
            imageAlt="Web development illustration"
            gradientColor="purple"
            gradientPosition="right"
          /></motion.div>

          {/* VR/AR Section */}
          <motion.div initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{}}>
          <FeatureSection 
            icon="fa-regular fa-face-smile-beam"
            iconBgColor="bg-[#1090cb]"
            image={websiteStack}
            imageAlt="Person using VR headset"
            reversed={true}
            gradientColor="green"
            gradientPosition="top-left"
          /></motion.div>

          {/* Mobile App Section */}
          <motion.div initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      viewport={{}}>
          <FeatureSection 
            icon="fa-regular fa-face-smile-beam"
            iconBgColor="bg-[#9208D3]"
            image={theDude}
            imageAlt="Mobile app interface"
            gradientColor="blue"
            gradientPosition="top-right"
          /></motion.div>
        </div>

        {/* CTA Cards */}
  <motion.div
    id='services'
    className="flex flex-col lg:flex-row justify-center gap-8 xl:gap-[40px] lg:gap-[30px] md:my-20 xl:my-40 relative scroll-mt-24 px-4 sm:px-0 md:items-center md:justify-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{}}
  >
          {/* Left Card */}
          <div className="bg-gray-100 rounded-3xl text-center w-full md:w-[572px] md:h-[459px] xl:py-2 xl:px-4 sm:py-2 sm:px-6 z-10" style={{ height: '459px' }}>
            <h4 className="text-[25px] font-bold md:mt-[64px] sm:mt-[32px] sm:text-[24px]">
              Lorem Ipsum is simply<br className="hidden sm:block"/> dummy text.
            </h4>
            <p className="text-gray-600 md:mt-10 md:mb-14 sm:my-8 xl:text-[16px] lg:text-[14px] sm:text-[14px] px-2">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br className="hidden sm:block"/>
              mobile and web applications and website builders<br className="hidden sm:block"/>
              measuring dozens of completed projects. We build and<br className="hidden sm:block"/> 
              develop mobile applications for several top platforms,<br className="hidden sm:block"/>
              including Android & iOS.             
            </p>
            <Button variant="primary" size="mediumRare">View More</Button>
          </div>

          {/* Right Card */}
          <div className="bg-[#2596be] w-full md:w-[572px] md:h-[459px] sm:px-6 sm:py-2 xl:py-2  rounded-3xl text-center  text-white z-10" style={{ height: '459px' }}>
            <h4 className="text-[25px] font-bold md:mt-[64px] sm:mt-[32px] sm:text-[24px]"> 
              Lorem Ipsum is simply<br className="hidden sm:block"/> dummy text.
            </h4>
            <p className="md:mt-10 md:mb-14 sm:my-8 xl:text-[16px] lg:text-[14px] sm:text-[14px] px-2">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced<br className="hidden sm:block"/>
              mobile and web applications and website builders<br className="hidden sm:block"/>
              measuring dozens of completed projects. We build and<br className="hidden sm:block"/> 
              develop mobile applications for several top platforms,<br className="hidden sm:block"/>
              including Android & iOS. 
            </p>
            <Button variant="white" size="mediumRare">View More</Button>
          </div>

          {/* Bell image - only show on larger screens */}
          <div className="hidden lg:block absolute -top-20 right-10 z-20 max-w-[150px]">
            <motion.img
              src={bell}
              alt="bell"
              className="w-full h-auto"
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
            />
          </div>

          {/* Pink Gradient */}
           
  </motion.div>
        
        {/* Company Logos Section */}
        <motion.div className="mb-20 sm:mt-24"
                    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{}}>
          <h2 className="text-xl font-bold mb-8 sm:mb-12 text-center">
            You will be in good Company
          </h2>

          <div className="relative w-full mx-auto mb-14">
            {/* Yellow Gradient - leftmost, behind logos */}
            <GradientBackground 
              color="yellow" 
              position="top-left" 
              className="left-[-220px] top-[-300px] z-0 opacity-25"
              size="large"
            />
            
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 sm:gap-0 items-center justify-items-center relative z-10 w-full">
              <div className="flex items-center justify-center">
                <img src={beneshop} alt="BeneShop Logo" className="max-h-[100px] sm:max-h-[130px] sm:w-full md:max-h-[185px] object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src={caspio} alt="Caspio Logo" className="max-h-[100px] sm:max-h-[130px] sm:w-full md:max-h-[185px] object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src={hyper} alt="HyperGrid Logo" className="max-h-[100px] sm:max-h-[130px] sm:w-full md:max-h-[185px] object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src={leo} alt="LeoTrippi Logo" className="max-h-[100px] sm:max-h-[130px] sm:w-full md:max-h-[185px] object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
