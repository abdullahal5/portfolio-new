import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
// import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fahim-Portfolio",
  icons: {
    icon: "https://i.ibb.co/st4k6fX/1bffa484777281-5d6786a598010-removebg-preview.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      className="!scroll-smooth lg:scrollbar-thin md:scrollbar-thin lg:scrollbar-thumb-violet-500 md:scrollbar-thumb-violet-500 lg:scrollbar-track-zinc-400 md:scrollbar-track-zinc-400 overflow-y-scroll"
      lang="en"
    >
      <body
        className={`${roboto.className} lg:w-[1100px] md:w-[1100px] mx-auto dark:bg-black bg-gray-50`}
      >
        {/* <Head>
          <link
            rel="icon"
            href="/1bffa484777281.5d6786a598010-removebg-preview.png"
            sizes="any"
          />
        </Head> */}
        <NextTopLoader
          color="#9C27B0"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
