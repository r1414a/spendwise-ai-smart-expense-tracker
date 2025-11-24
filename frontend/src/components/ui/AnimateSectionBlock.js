"use client";

import { parentVariants } from "@/animations/variants"
import { motion } from "framer-motion"

export default function AnimatedSectionBlock({children}){
    return(
        <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.5}}
    >
      {children}
    </motion.div>
    )
}