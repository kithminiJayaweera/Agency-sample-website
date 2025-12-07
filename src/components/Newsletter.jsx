import React from 'react';
import Button from './Button';
import pie from '../assets/PieChart.png';
import star from '../assets/Star.png';
import {motion} from 'framer-motion';


const Newsletter = () => {
  return (
    <section id='blog' className="relative scroll-m-24">
      {/* Decorative star image */}
      <motion.img
        src={star}
        alt="Star"
        className="absolute left-[10%] md:left-[25%] top-[-9%] max-w-[40px] md:max-w-[66px] hidden md:block z-20"
        animate={{ scale: [1, 1.2, 1, 0.9, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
      />
  <motion.div className="w-full bg-[#E8F4FA] pt-8 md:pt-24 sm:pt-12 sm:pb-10 md:pb-20 px-0"
        initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{}}>
  <div className="w-full text-center relative px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 sm:mb-16 md:mb-20 leading-relaxed">
            Lorem Ipsum is simply dummy<br/> text of the printing.
          </h2>
          
          {/* Pie chart image */}
            <motion.img 
              src={pie}
              alt="Pie Chart"
              className="absolute right-[10%] sm:right-[10%] md:right-[10%] lg:right-[20%] top-[-15%] md:top-[-25%] w-[40px] md:w-[54px] hidden md:block max-w-[54px] "
              animate={{ scale: [1, 1.2, 1, 0.9, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
            />
          
          {/* Newsletter form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:px-4 sm:px-3 py-3 placeholder:text-sm sm:ml-4 rounded-lg bg-white md:max-w-[532px] md:w-full sm:max-w-[432px] sm:w-full"
            />
            <Button variant="black" size="medium" className="w-full sm:mr-4 md:w-auto md:max-w-[150px] sm:max-w-[100px]">
              <span className="flex items-center justify-center w-full h-full sm:text-[14px] md:text-[16px]">SUBSCRIBE</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
