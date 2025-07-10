import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider } from "./lib/Provider";




export const metadata: Metadata = {
  title: "Vistagram",
  description: "Created by Arghya Nath",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body>
          {children}
        </body>
      </Provider>
    </html>
  );
}
