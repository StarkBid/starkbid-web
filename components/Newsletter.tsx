"use client"
import { BlNewsletterBg, TrNewsletterBg } from "@/public/images"
import { useState } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
    email: z.string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
})

export default function Newsletter() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
      })
    
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log("Subscribed:", values.email)
          setIsSuccess(true)
          reset()
          
          // Reset success message after 3 seconds
          setTimeout(() => {
            setIsSuccess(false)
          }, 3000)
        } catch (error) {
          console.error("Subscription error:", error)
        } finally {
          setIsSubmitting(false)
        }
      }
  return (
    <div className="w-full px-4 md:px-10 xl:px-20 py-6 lg:py-8">
        <div className="bg-[#6C45C5] rounded-[20px] p-6 sm:p-10 md:p-16 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0">
                <Image src={TrNewsletterBg} alt="bottom left background decoration" />
            </div>
            
            <div className="absolute bottom-0 left-0">
                <Image src={BlNewsletterBg} alt="bottom left background decoration" />
            </div>

            <div className="relative z-10">
                <div className="mb-4 md:mb-6">
                    <h3 className="font-bold text-xl md:text-[35px] leading-tight md:leading-[50px] text-center md:text-left">Stay in the loop</h3>
                </div>
                
                {/* Restructured layout for better responsiveness */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:gap-[10vw] xl:gap-[18vw]">
                    <p className="w-full text-sm lg:text-base font-semibold mb-6 lg:mb-0 text-center md:text-left">A hauntingly beautiful NFT series where glitchy, transparent pixels form eerie digital ghosts and lost memories</p>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="flex flex-row gap-2.5">
                            <div className="flex-grow">
                                <div className="relative">
                                    <input
                                        {...register("email")}
                                        placeholder="Enter your Email address"
                                        aria-label="Email subscription"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        className={`font-semibold text-xs md:text-sm w-full px-2.5 py-3 bg-[#957BD0] border ${errors.email ? "border-red-400" : "border-transparent"} text-white placeholder:text-white/70 focus:outline-none focus:ring-1 focus:ring-[#7C3AED] rounded-lg transition-colors`}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-300 text-xs mt-1" role="alert">
                                        {errors.email.message}
                                    </p>
                                )}
                                {isSuccess && (
                                    <p className="text-green-300 text-xs mt-1 font-bold">
                                        Subscription successful!
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className={`py-3 px-2.5 h-fit ${isSubmitting ? "bg-gray-300" : "bg-white hover:bg-gray-100"} text-[#414651] text-xs md:text-sm transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] font-medium md:font-bold whitespace-nowrap`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center w-[55px] py-0.5">
                                        <div className="animate-spin h-4 w-4 border-2 border-[#6C45C5] border-t-transparent rounded-full" aria-hidden="true"></div>
                                    </div>
                                ) : "Subscribe"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}