"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion";

export default function SectionPara({text,css}){
    return(
        <motion.p 
        variants={slideUpVariants}
        className={`mt-2.5 text-myborder/70 text-md md:text-lg text-start md:text-center ${css} md:mx-auto`}>
          {text}
        </motion.p>
    )
}