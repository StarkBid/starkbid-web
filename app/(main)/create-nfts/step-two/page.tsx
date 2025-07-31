"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "@/components/create-nfts/common/BackButton";
import ProgressBar from "@/components/create-nfts/common/ProgressBar";
import MediaUpload from "@/components/create-nfts/step-two/MediaUpload";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nftName: z.string().min(1, "NFT name is required"),
  royalties: z
    .string()
    .min(1, "Royalties percentage is required")
    .refine(
      (val) => {
        const num = Number.parseFloat(val);
        return !isNaN(num) && num >= 0 && num <= 100;
      },
      { message: "Royalties must be between 0% and 50%" }
    ),
  biddingType: z.string().optional(),
  supplyRoyalties: z.string().optional(),
  description: z.string().optional(),
  putOnMarketplace: z.boolean().optional(),
  price: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (val === undefined || val === "") return true;
        const num = Number.parseFloat(val);
        return !isNaN(num) && num > 0;
      },
      { message: "Price must be a positive number" }
    ),
  makeMintingFree: z.boolean().optional(),
  type: z.string().optional(),
  name: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function StepTwo() {
  const router = useRouter();
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nftName: "",
      royalties: "",
      biddingType: "",
      supplyRoyalties: "",
      description: "",
      putOnMarketplace: false,
      price: "",
      makeMintingFree: false,
      type: "",
      name: "",
    },
  });

  const putOnMarketplace = watch("putOnMarketplace");

  const toggleAdvancedFeatures = () => {
    setShowAdvancedFeatures(!showAdvancedFeatures);
  };

  const handleMediaUpload = (file: File) => {
    const validTypes = ["image/jpeg", "image/png", "audio/mpeg", "video/mp4"];
    if (!validTypes.includes(file.type)) {
      alert(
        "Invalid file type. Please upload JPEG, PNG, MP3, or MP4 files only."
      );
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      alert("File size exceeds 100MB limit.");
      return;
    }

    setMediaFile(file);
    setMediaType(file.type);

    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };

  const onSubmit = (data: FormValues) => {
    if (!mediaFile) {
      alert("Please upload media for your NFT");
      return;
    }

    console.log("Form data:", data);
    console.log("Media file:", mediaFile);
    router.push("/create-nfts/step-three");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="mb-6 md:mb-8">
          <BackButton />
          <h1 className="text-xl md:text-3xl font-bold mt-4">Create NFT</h1>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Please fill in appropriate information to continue. Note that once
            your item is minted you will not be able to change any of its
            information.
          </p>
          <ProgressBar
            currentStep={2}
            totalSteps={3}
            className="mt-4 md:mt-6"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Mobile: User info and media upload first */}
            <div className="lg:hidden">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 bg-deepGray px-3 md:px-4 py-4 md:py-5 rounded-md">
                <div className="rounded-full bg-purple overflow-hidden flex-shrink-0">
                  <Image
                    src="/avatars/create-nft-pfp.png"
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 md:w-15 md:h-15 object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm md:text-base font-bold text-white truncate">
                    @radicaldude84
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-white truncate">
                    352by_fc76
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs bg-green text-black px-2 py-0.5 rounded-full">
                    Connected
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    Ethereum Blockchain
                  </p>
                </div>
              </div>
              <MediaUpload
                mediaFile={mediaFile}
                mediaPreview={mediaPreview}
                mediaType={mediaType}
                onUpload={handleMediaUpload}
                onRemove={removeMedia}
              />
            </div>

            <div className="lg:col-span-2">
              {/* Desktop: User info */}
              <div className="hidden lg:flex items-center gap-4 mb-6 bg-deepGray px-4 py-5 rounded-md">
                <div className="rounded-full bg-purple overflow-hidden">
                  <Image
                    src="/avatars/create-nft-pfp.png"
                    alt="User avatar"
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="xl:text-base font-bold text-white text-sm">
                    @radicaldude84
                  </p>
                  <p className="xl:text-base text-sm font-semibold text-white">
                    352by_fc76
                  </p>
                </div>
                <div className="ml-auto text-start">
                  <span className="text-xs bg-green text-black px-2 py-0.5 rounded-full">
                    Connected
                  </span>
                  <p className="text-sm text-gray-400">Ethereum Blockchain</p>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="nftName"
                  className="block mb-2 text-sm md:text-base"
                >
                  NFT Name <span className="text-purple">*</span>
                </label>
                <input
                  id="nftName"
                  type="text"
                  placeholder="Name your NFT"
                  className={`w-full bg-transparent border ${
                    errors.nftName ? "border-red" : "border-darkerGray"
                  } rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm md:text-base`}
                  {...register("nftName")}
                />
                {errors.nftName && (
                  <p className="text-red text-sm mt-1">
                    {errors.nftName.message}
                  </p>
                )}
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Please note that this name will be displayed publicly for
                  other users to see.
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="royalties"
                  className="block mb-2 text-sm md:text-base"
                >
                  Supply/Royalties <span className="text-purple">*</span>
                </label>
                <input
                  id="royalties"
                  type="text"
                  placeholder="e.g. 10%"
                  className={`w-full bg-transparent border ${
                    errors.royalties ? "border-red" : "border-darkerGray"
                  } rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm md:text-base`}
                  {...register("royalties")}
                />
                {errors.royalties && (
                  <p className="text-red text-sm mt-1">
                    {errors.royalties.message}
                  </p>
                )}
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Could be: 0%, 10%, 20%, 30%. Maximum is 50%
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block mb-2 text-sm md:text-base">
                  Bidding Type <span className="text-purple">*</span>
                </label>
                <Controller
                  name="biddingType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full bg-transparent border border-darkerGray rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm md:text-base text-gray-400 h-auto">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-darkerGray">
                        <SelectItem
                          value="public"
                          className="text-white hover:bg-gray-800 focus:bg-gray-800"
                        >
                          Public
                        </SelectItem>
                        <SelectItem
                          value="private"
                          className="text-white hover:bg-gray-800 focus:bg-gray-800"
                        >
                          Private
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Please choose if this asset&apos;s bidding is going to be
                  public or private.
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="supplyRoyalties"
                  className="block mb-2 text-sm md:text-base"
                >
                  Supply Royalties <span className="text-purple">*</span>
                </label>
                <input
                  id="supplyRoyalties"
                  type="text"
                  placeholder="e.g. 0.90"
                  className="w-full bg-transparent border border-darkerGray rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm md:text-base"
                  {...register("supplyRoyalties")}
                />
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  This is the starting price of the assets, users can not bid
                  below it
                </p>
              </div>

              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm md:text-base"
                >
                  Description <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Enter description here..."
                  rows={4}
                  className="w-full bg-transparent border border-darkerGray rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm md:text-base"
                  {...register("description")}
                />
              </div>

              <motion.button
                type="button"
                onClick={toggleAdvancedFeatures}
                className="flex items-center justify-center w-full py-3 text-purple hover:text-purple transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {showAdvancedFeatures
                  ? "- Remove Advance Features"
                  : "+ Add Advance Features"}
              </motion.button>

              <AnimatePresence>
                {showAdvancedFeatures && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6">
                      <label className="block mb-2 text-sm md:text-base">
                        Features{" "}
                        <span className="text-gray-400">(Optional)</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="type" className="block mb-2 text-sm">
                            Type
                          </label>
                          <input
                            id="type"
                            type="text"
                            placeholder="e.g. size"
                            className="w-full bg-transparent border border-darkerGray rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm"
                            {...register("type")}
                          />
                        </div>
                        <div>
                          <label htmlFor="name" className="block mb-2 text-sm">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="e.g small"
                            className="w-full bg-transparent border border-darkerGray rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm"
                            {...register("name")}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              {/* Desktop: Media upload */}
              <div className="hidden lg:block">
                <MediaUpload
                  mediaFile={mediaFile}
                  mediaPreview={mediaPreview}
                  mediaType={mediaType}
                  onUpload={handleMediaUpload}
                  onRemove={removeMedia}
                />
              </div>

              <div className="mt-6 md:mt-8">
                <label className="block mb-4 text-sm md:text-base">
                  Features <span className="text-gray-400">(Optional)</span>
                </label>

                <div className="mb-4 border border-darkerGray rounded-md p-3 md:p-4">
                  <div className="flex items-start md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm md:text-base">
                        Put on Marketplace
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mt-1">
                        Allow users instantly purchase your NFT by adding a
                        price value
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        {...register("putOnMarketplace")}
                      />
                      <div className="w-11 h-6 bg-darkerGray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"></div>
                    </label>
                  </div>

                  <AnimatePresence>
                    {putOnMarketplace && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden"
                      >
                        <label htmlFor="price" className="block mb-2 text-sm">
                          Price
                        </label>
                        <input
                          id="price"
                          type="text"
                          placeholder="Enter price"
                          className={`w-full bg-transparent border ${
                            errors.price ? "border-red" : "border-darkerGray"
                          } rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-purple text-sm`}
                          {...register("price")}
                        />
                        {errors.price && (
                          <p className="text-red text-sm mt-1">
                            {errors.price.message}
                          </p>
                        )}
                        <p className="text-gray-400 text-xs mt-1">
                          Please note that the price should be in the token of
                          this connected wallet
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border border-darkerGray rounded-md p-3 md:p-4">
                  <div className="flex items-start md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm md:text-base">
                        Make Minting Free
                      </p>
                      <p className="text-xs md:text-sm text-gray-400 mt-1">
                        Create and list your NFT without upfront gas fees
                        (transaction costs) on a blockchain
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        {...register("makeMintingFree")}
                      />
                      <div className="w-11 h-6 bg-darkerGray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-purple hover:bg-purple text-white font-medium py-3 px-4 rounded-md mt-6 md:mt-8 transition-colors text-sm md:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next
          </motion.button>
        </form>
      </div>
    </div>
  );
}
