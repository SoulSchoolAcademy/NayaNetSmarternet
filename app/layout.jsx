export const metadata = {
  title: "SmartNet",
  description: "SmartNet Pro scaffold",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
