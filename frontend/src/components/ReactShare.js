"use client";

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

import { FaCopy, FaTimes } from "react-icons/fa";
import clsx from "clsx";

export default function ReactShare({ shareUrl, title }) {

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
      <div className='z-20 bg-white w-full'>
        <div className="flex gap-2 justify-around text-center mt-4 pb-4">

          {/* WhatsApp */}
          <div className="cursor-pointer">
            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={30} round />
            </WhatsappShareButton>
            <p className="text-sm mt-1">WhatsApp</p>
          </div>

          {/* Facebook */}
          <div className="cursor-pointer">
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={30} round />
            </FacebookShareButton>
            <p className="text-sm mt-1">Facebook</p>
          </div>

          {/* Telegram */}
          <div className="cursor-pointer">
            <TelegramShareButton url={shareUrl} title={title}>
              <TelegramIcon size={30} round />
            </TelegramShareButton>
            <p className="text-sm mt-1">Telegram</p>
          </div>

          {/* Reddit */}
          <div className="cursor-pointer">
            <RedditShareButton url={shareUrl} title={title}>
              <RedditIcon size={30} round />
            </RedditShareButton>
            <p className="text-sm mt-1">Reddit</p>
          </div>

          {/* Copy Link */}
          <div className="flex flex-col justify-between cursor-pointer" onClick={handleCopy}>
            <FaCopy size={25} className="mx-auto text-gray-700" />
            <p className="text-sm mt-1">Copy</p>
          </div>

        </div>
      </div>
  );
}
