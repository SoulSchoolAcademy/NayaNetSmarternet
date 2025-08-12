export const metadata = { title: "SmartNet", description: "SmartNet Pro scaffold" };

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen grid grid-cols-[260px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Topbar />
            <main className="container">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

