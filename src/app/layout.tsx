import { MessageInitializer } from "@/components/shared/message-initializer";
import ReduxProvider from "@/provider/redux-provider";
import { SessionProvider } from "@/provider/session-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App as AntdApp } from "antd";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const displayFont = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const bodyFont = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FlyGhor | Book Flights, Hotels & Holidays",
  description:
    "Find and book cheap flights, hotels, and holiday packages. Compare flight deals and hotel prices to destinations worldwide with FlyGhor.",
  keywords:
    "flight booking, hotel booking, travel, holiday packages, cheap flights, Bangladesh travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} h-full`}
    >
      <body suppressHydrationWarning={true} className="min-h-full">
        <AntdRegistry>
          <ReduxProvider>
            <SessionProvider>
              <ThemeProvider>
                <AntdApp>
                  <MessageInitializer />
                  {children}
                </AntdApp>
              </ThemeProvider>
            </SessionProvider>
          </ReduxProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
