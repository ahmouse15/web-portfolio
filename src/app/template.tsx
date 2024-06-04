"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const variants = {
  hide: {
    y: 50,
    opacity: 0 
  },
  show: {
    y: 0,
    opacity: 1,

  }
}

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
    initial="hide"
    animate="show"
    variants={variants}
    transition={{  duration: 0.35}}
    >
    {children}
    </motion.div>
  );
}
