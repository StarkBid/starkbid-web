"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { links, socialLinks } from "@/constants/footer";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Subscribed:", values.email);
    reset();
  };

  const getLinks = (category: keyof typeof links) => links[category] || [];
  const linkKeys = Object.keys(links) as (keyof typeof links)[];
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <footer className="w-full h-fit text-white bg-black ">
      <motion.div
        className="w-full px-4 md:px-6 xl:px-16 py-8 lg:py-10  container mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <motion.div
            className="flex flex-col gap-y-2.5 md:max-w-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/icons/starkbid-logo.svg"
                width={32}
                height={32}
                alt="StarkBid logo"
              />
              <span className="text-2xl md:text-[28px] font-bold text-white">
                StarkBid
              </span>
            </div>
            <p className="text-white/90 font-semibold text-xs md:text-base mb-2.5">
              Powering the Future of Digital Auctions on Starknet.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex gap-2.5"
            >
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

            <div className="mt-6">
              <h3 className="text-white/90 font-bold text-base md:text-xl mb-4">
                Join The Community
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] p-2 rounded-lg hover:bg-[#2A2A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width={25}
                      height={25}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-x-3 md:gap-x-5 gap-y-10 xl:gap-x-12">
            {linkKeys.map((category) => (
              <motion.div
                key={category}
                className="space-y-4 md:space-y-5"
                variants={itemVariants}
              >
                <h3 className="text-white/90 font-bold text-base md:text-xl">
                  {category}
                </h3>
                <nav className="flex flex-col gap-y-2 text-sm md:text-base md:gap-y-4">
                  {getLinks(category).map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
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

        <motion.div
          className="mt-10 pt-[30px] border-t-[0.4px] border-white/60"
          variants={itemVariants}
        >
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4">
            <p className="text-center md:text-left text-white/90 text-sm">
              Copyright © {currentYear} StrakBid. All rights reserved
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex gap-x-2 md:gap-x-6">
                {" "}
                <Link
                  href="/terms-condition"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Terms & Condition
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-white/90 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>

              <a
                href="mailto:support@starkbid.com"
                className="text-white/90 text-sm hover:text-white transition-colors "
              >
                support@starkbid.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
