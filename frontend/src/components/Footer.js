import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

const about = [
    {
        text: "Github",
        icon: <FaGithub className="text-lightred"/>,
        link: "https://github.com/r1414a"
    },
    {
        text: "Linkedin",
        icon: <FaLinkedin className="text-lightred"/>,
        link: "https://www.linkedin.com/in/rupesh-chincholkar-08bb7612b/"
    },
    {
        text: "Portfolio",
        icon: <FaFolderOpen className="text-lightred"/>,
        link: "https://r1414a.github.io/portfolio-website/"
    },
]

export default function Footer(){
    return(
        <footer className=" mt-32 bg-white shadow-[0_-5px_35px_rgba(241,245,249,1)] border border-lightgray/40 w-full py-3">
            <div className="max-w-screen-xl mx-auto flex justify-between">
            <p className="text-gray"><span className="text-lightred font-bold">SpendWise</span> - AI smart Expense Tracker @ 2026</p>
            <ul className="fixed bottom-0 right-20 flex gap-8 bg-white p-3.5">
                {
                    about.map((link,i) => (
                        <Link key={i} href={link.link}>
                        <li className="flex items-center gap-2 text-sm text-gray font-medium underline underline-offset-4">{link.icon} {link.text}</li>
                        </Link>
                    ))
                }
            </ul>
            </div>
        </footer>
    )
}