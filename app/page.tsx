import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HomePageContent = dynamic(() => import("../components/home-page-content"));

export const metadata: Metadata = {
  title: "Home",
  description:
    "Minimal websites, dashboards, booking systems, and growth support for businesses that want to launch clearly."
};

export default function Home() {
  return <HomePageContent />;
}
