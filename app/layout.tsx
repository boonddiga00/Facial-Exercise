import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/style/GlobalStyle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facial Exercise",
  description: "Facial exercise agent for schizophrenia patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
