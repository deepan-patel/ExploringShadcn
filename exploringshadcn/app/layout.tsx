import type { Metadata } from "next";
import "./globals.css";
import { Inter, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider"
import AppSideBar from "@/components/web/AppSideBar";
import Navbar from "@/components/web/Navbar";

const ralewayHeading = Raleway({ subsets: ['latin'], variable: '--font-heading' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Exploring Shadcn UI",
  description: "Exploring Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", inter.variable, ralewayHeading.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppSideBar />
          <main className="w-full">
            <Navbar />
            <div className="px-4">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
