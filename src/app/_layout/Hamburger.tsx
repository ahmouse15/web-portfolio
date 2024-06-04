'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import { FaBars, FaXmark } from "react-icons/fa6";
import { Nav } from "./Nav";

const show = {
  opacity: 1,
  display: 'block'
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none'
  }
}


export function Hamburger() {

    let [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="pr-8 self-center md:hidden z-40" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark  size={28}/> : <FaBars  size={28} />}
        </div>
        <motion.div
          className="fixed z-30 w-[100vw] h-[100vh] top-0 left-0 bg-ghost"
          initial={{opacity: 0, display: 'none'}}
          animate={isOpen ? show : hide}
          transition={{ease:'easeInOut', duration: 0.5}}
          >
            <Nav/>
          </motion.div>
      </div>
  );
  }