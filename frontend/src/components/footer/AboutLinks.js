"use client";

import { slideUpVariants } from "@/animations/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

const about = [
  {
    text: "Github",
    icon: <FaGithub className="text-lightred" />,
    link: "https://github.com/r1414a",
  },
  {
    text: "Linkedin",
    icon: <FaLinkedin className="text-lightred" />,
    link: "https://www.linkedin.com/in/rupesh-chincholkar-08bb7612b/",
  },
  {
    text: "Portfolio",
    icon: <FaFolderOpen className="text-lightred" />,
    link: "https://r1414a.github.io/portfolio-website/",
  },
];

export default function AboutLinks() {
    const [reachedBottom, setReachedBottom] = useState(false);
  useEffect(() => {
    function scrollEvent() {
        const scrollThreshold = 5;

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - scrollThreshold) {
        setReachedBottom(true);
      }else{
        setReachedBottom(false);
      }
    }
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <motion.ul 
    variants={slideUpVariants}
    initial="hidden"
      animate="visible"
    className={`w-full md:w-fit fixed ${reachedBottom ? 'bottom-12' : 'bottom-1' } md:bottom-0 right-0 md:right-4 xl:right-20 flex justify-center gap-8 bg-white border-t border-lightgray/40 md:border-0 p-3.5`}>
      {about.map((link, i) => (
        <Link key={i} href={link.link}>
          <li className="flex items-center gap-2 text-sm text-gray font-medium underline underline-offset-4">
            {link.icon} {link.text}
          </li>
        </Link>
      ))}
    </motion.ul>
  );
}
