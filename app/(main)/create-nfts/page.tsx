import { redirect } from "next/navigation";

export default function Page() {
  redirect("/create-nfts/step-one");
  return null;
}
