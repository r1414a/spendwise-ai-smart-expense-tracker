"use client";

import { slideUpVariants } from "@/animations/variants"
import { motion } from "framer-motion"

export default function HeroPara(){
    return(
        <motion.p 
        variants={slideUpVariants}
        className="text-lg text-myborder/80 max-w-lg mt-4 md:mt-6">
            Automatically categorize your expenses, get spending insights, and
            take control of your finances — powered by AI.
          </motion.p>
    )
}