"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { StarkBidLogo } from "@/public/images"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const links = {
  Marketplace: ["Art", "Gaming", "Membership", "PFPs", "Photography", "Music"],
  Resources: [
    "Support",
    "API",
    "Blog",
    "Partners",
    "Explore",
    "Sitemap",
    "Terms of Service",
    "Privacy Policy",
    "Copyright",
  ],
  Company: ["About", "Careers", "Ventures"],
  "Follow us": ["X", "Discord", "Instagram", "Youtube"],
}

const socialLinks: Record<string, string> = {
  X: "https://twitter.com",
  Discord: "https://discord.com",
  Instagram: "https://instagram.com",
  Youtube: "https://youtube.com",
}

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Subscribed:", values.email)
    reset()
  }

  const getLinks = (category: keyof typeof links) => links[category] || []
  const linkKeys = Object.keys(links) as (keyof typeof links)[]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <footer className="w-full h-fit bg-[#0D1216] text-white">
      <motion.div
        className="w-full px-4 md:px-10 xl:px-20 py-8 lg:py-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <motion.div className="flex flex-col gap-y-2.5 md:max-w-sm" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Image src={StarkBidLogo || "/placeholder.svg"} width={32} height={32} alt="StarkBid logo" />
              <span className="text-2xl md:text-[28px] font-bold text-white">StarkBid</span>
            </div>
            <p className="text-white/90 font-semibold text-xs md:text-base mb-2.5">
              A hauntingly beautiful NFT series where glitchy, transparent pixels form eerie digital ghosts and lost
              memories
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex gap-2.5">
              <div className="flex-grow">
                <input
                  {...register("email")}
                  placeholder="Enter your Email address"
                  aria-label="Email subscription"
                  className="font-semibold text-xs md:text-sm w-full px-2.5 py-3 bg-[#1A1A1A] border-none text-white placeholder:text-white/70 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="py-3 px-2.5 h-fit bg-white text-[#414651] text-xs md:text-sm hover:bg-gray-100 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 xl:gap-x-12">
            {linkKeys.map((category) => (
              <motion.div key={category} className="space-y-4 md:space-y-5" variants={itemVariants}>
                <h3 className="text-white/90 font-bold text-base md:text-xl">{category}</h3>
                <nav className="flex flex-col gap-y-2 text-sm md:text-base md:gap-y-4">
                  {getLinks(category).map((item) => (
                    <Link
                      key={item}
                      href={
                        category === "Follow us"
                          ? socialLinks[item] || "#"
                          : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      target={category === "Follow us" ? "_blank" : "_self"}
                      rel={category === "Follow us" ? "noopener noreferrer" : ""}
                      className="text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="mt-10 pt-[30px] border-t-[0.4px] border-white/60" variants={itemVariants}>
          <p className="text-center md:text-left text-white/90 text-sm">©2025 StarkBid. All Rights Reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

