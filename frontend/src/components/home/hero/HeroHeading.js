"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion";


export default function HeroHeading() {
  return (
    <motion.h1
       variants={slideUpVariants}
      className="text-5xl md:text-6xl font-semibold text-lightred"
    >
      AI Expense Tracker
    </motion.h1>
  );
}
