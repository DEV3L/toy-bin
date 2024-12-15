"use client";
import { Metadata } from "next";

import { default as NextHead } from "next/head";
import { useEffect } from "react";

export const Head = ({ title = "ToЧ Bin" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  );
};

export const metadata: Metadata = {
  title: "ToЧ Bin",
  description:
    "Experience the thrill of spinning the wheel with ToЧ Bin, a fun and engaging prize-winning game.",
  openGraph: {
    title: "ToЧ Bin",
    description:
      "Experience the thrill of spinning the wheel with ToЧ Bin, a fun and engaging prize-winning game.",
    url: "https://toy-bin.vercel.app",
    siteName: "ToЧ Bin",
    images: [
      {
        url: "/og-image.png", // Ensure this image is added to your public folder
        width: 1200,
        height: 630,
        alt: "ToЧ Bin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToЧ Bin",
    description:
      "Experience the thrill of spinning the wheel with ToЧ Bin, a fun and engaging prize-winning game.",
    images: ["/og-image.png"],
  },
};
