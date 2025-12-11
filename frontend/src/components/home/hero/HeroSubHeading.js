"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion";

export default function HeroSubHeading() {
  return (
    <motion.h1
      variants={slideUpVariants}
      className="text-3xl md:text-5xl font-semibold text-darkblue"
    >
      Track <span className="text-lightred">smarter</span>. Spend{" "}
      <span className="text-lightred">better</span>.
    </motion.h1>
  );
}
