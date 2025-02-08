import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { CodeOutlined } from "@ant-design/icons";
import { Image } from "antd";
import jadwalKuliah from "@/assets/images/jadwal-kuliah.png"
import animeHub from "@/assets/images/anime-hub.png"
import danmogotCheckout from "@/assets/images/danmogot-checkout.png"
import mriImage from "@/assets/images/mri.png"

export function ProjectLayout() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          url={item?.url}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
  </div>
);
const items = [
  {
    title: "Danmogot Checkout Web",
    description: "Marketplace website for ordering products at the Danmogot shop.",
    header: <Image src={danmogotCheckout.src} className="rounded-xl" />,
    icon: <CodeOutlined className="h-4 w-4 text-neutral-500" />,
    // url: 'https://checkout.danmogot.com/portal/cart'
  },
  {
    title: "Anime Hub",
    description: "Application to display the latest anime list using Next.js.",
    header: <Image src={animeHub.src} className="rounded-xl" />,
    icon: <CodeOutlined className="h-4 w-4 text-neutral-500" />,
    url: 'https://anime-hub-red.vercel.app/'
  },
  {
    title: "Aplikasi Penjadwalan Kelas",
    description: "The application generates lecture class scheduling automatically using the Genetic Algorithm",
    header: <Image src={jadwalKuliah.src} className="rounded-xl" />,
    icon: <CodeOutlined className="h-4 w-4 text-neutral-500" />,
    url: 'https://github.com/efektenang/jadwal-genetika'
  },
  {
    title: "Medical Raksasa Indonesia Admin Page",
    description:
      "Excellence propels us to constantly seek out and implement groundbreaking solutions that set new industry standards.",
    header: <Image height={140} src={mriImage.src} className="rounded-xl object-cover" />,
    icon: <CodeOutlined className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Other repository projects",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <CodeOutlined className="h-4 w-4 text-neutral-500" />,
    url: 'https://github.com/efektenang?tab=repositories'
  }
];
