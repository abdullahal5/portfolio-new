import { Roboto } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ReduxProviders from "@/lib/ReduxProviders";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Fahim-Portfolio",
  description: "A Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProviders>
      <html
        className="!scroll-smooth lg:scrollbar-thin md:scrollbar-thin lg:scrollbar-thumb-violet-500 md:scrollbar-thumb-violet-500 lg:scrollbar-track-zinc-400 md:scrollbar-track-zinc-400 overflow-y-scroll"
        lang="en"
      >
        <body
          className={`${roboto.className} mx-auto dark:bg-black bg-gray-50`}
        >
          <Toaster />
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
        </body>
      </html>
    </ReduxProviders>
  );
}
