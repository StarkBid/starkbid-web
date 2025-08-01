import Image from 'next/image'
import React from 'react'
import { BsDiscord } from 'react-icons/bs'

const AnnouncementBanner = () => {
  return (
    <section className="bg-purple text-white p-4 hidden lg:flex items-center justify-between">
        <div id="questCalendar" className="inline-flex gap-4">
            <Image
                src={"/calendar.png"}
                alt="Calendar Icon"
                width={20}
                height={20}
            />
            <span className="text-xs lg:text-sm font-medium">Next NFT Quest ends 16/05/2025 10am ET</span>
        </div>
        <a href="#" target="_blank" id="starkbidSocial" className="group inline-flex items-center gap-2 cursor-pointer">
            <BsDiscord size={24} />
            <span className="text-xs lg:text-sm ml-2">Open Discord</span>
            <Image
                src={"/arrow-up.png"}
                alt="Long Arrow-up-right Icon"
                width={20}
                height={20}
                className="transition-all duration-300 group-hover:rotate-45"
            />
        </a>
    </section>
  )
}

export default AnnouncementBanner
