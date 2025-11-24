"use client";

import { parentVariants } from "@/animations/variants"
import { motion } from "framer-motion"

export default function AnimatedHeroBlock({children}){
    return(
        <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
    )
}