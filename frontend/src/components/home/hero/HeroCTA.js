"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <motion.div
    variants={slideUpVariants}
    >
    <Link href={"/dashboard"}>
      <button className="mt-4 h-10 bg-lightred text-mywhite px-6 rounded-md cursor-pointer hover:bg-darkblue">
        Try Demo
      </button>
    </Link>
    </motion.div>
  );
}
