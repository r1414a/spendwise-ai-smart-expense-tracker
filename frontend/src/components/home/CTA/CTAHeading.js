"use client";

import { motion } from "framer-motion";


export default function CTAHeading(){
    return(
        <motion.h1 
        initial={{opacity:0 , scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{ amount: 0.5}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl leading-11 md:leading-15 text-mywhite font-bold capitalize max-w-lg mx-auto">Start tracking your expenses today.</motion.h1>
    )
}