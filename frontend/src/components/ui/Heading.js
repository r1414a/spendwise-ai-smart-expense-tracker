"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion"

export default function Heading({css,heading}){
    return <motion.h1
        variants={slideUpVariants}
    className={`text-3xl md:text-4xl font-bold capitalize ${css}`}>{heading}</motion.h1>
}